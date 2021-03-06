import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import { renderModule, renderModuleFactory } from '@angular/platform-server';
import { APP_BASE_HREF } from '@angular/common';
import { enableProdMode, StaticProvider } from '@angular/core';
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';
import { createServerRenderer } from 'aspnet-prerendering';

export { AppServerModule } from './app/app.server.module';

enableProdMode();

// * NOTE :: leave this as require() since this file is built Dynamically from webpack
// const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('../dist/main');

export default createServerRenderer(params => {
    const { AppServerModule, AppServerModuleNgFactory, LAZY_MODULE_MAP } = (module as any).exports;

    const options: {
        document?: string;
        url?: string;
        extraProviders?: StaticProvider[];
    } = {
        document: params.data.originalHtml,
        url: params.url,
        extraProviders: [
            provideModuleMap(LAZY_MODULE_MAP),
            { provide: APP_BASE_HREF, useValue: params.baseUrl }
        ]
    };

    if (params.data.someData) {
        options.extraProviders.push({
            provide: 'someData',
            useValue: params.data.someData
        });
    }

    // Bypass ssr api call cert warnings in development
    // process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

    const renderPromise = AppServerModuleNgFactory
        ? /* AoT */ renderModuleFactory(AppServerModuleNgFactory, options)
        : /* dev */ renderModule(AppServerModule, options);

    const cleanTemplate = (html) => {
        const replaceTags = ['<html>', '</html>', '<head>', '</head>', '<body>', '</body>'];
        let replacedHtml = html;

        replaceTags.forEach((tag: string) => {
            replacedHtml = replacedHtml.replace(tag, '');
        });

        return replacedHtml;
    };

    return renderPromise.then((html) => {
        return {
            html: cleanTemplate(html)
        };
    });
});
