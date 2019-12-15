import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import { renderModule, renderModuleFactory } from '@angular/platform-server';
import { APP_BASE_HREF } from '@angular/common';
import { enableProdMode, StaticProvider } from '@angular/core';
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';
import { createServerRenderer } from 'aspnet-prerendering';

export { AppServerModule } from './app/app.server.module';

enableProdMode();

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
            { provide: APP_BASE_HREF, useValue: params.baseUrl },
            { provide: 'USER_DATA', useValue: { test: 123 } },
            { provide: 'userData', useValue: { test: 123 } }
        ]
    };

    // // Add user data if user already logged in
    // if (params.data.userData) {
    //     options.extraProviders.push({
    //         provide: 'userData',
    //         useValue: params.data.userData
    //     });
    // }

    // // Add page specific data
    // if (params.data.pageData) {
    //     options.extraProviders.push({
    //         provide: 'pageData',
    //         useValue: {
    //             url: params.url,
    //             data: params.data.pageData
    //         }
    //     });
    // }

    // Bypass ssr api call cert warnings in development
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

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

    return renderPromise.then(html => ({ html: cleanTemplate(html) }));
});
