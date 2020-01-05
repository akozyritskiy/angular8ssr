using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using AngularNetCore2.Models;

namespace AngularNetCore2.Controllers
{
    public class HomeController : Controller
    {
        private dynamic SomeData = new
        {
            originalHtml = "<app-root></app-root>",
            someData = new
            {
                text = "Hello from server!"
            }
        };

        public IActionResult Index()
        {
            return RedirectToAction("ClientApp");
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

        public IActionResult ClientApp()
        {
            ViewBag.SomeData = this.SomeData;

            return View();
        }

        public IActionResult ClientAppLazy()
        {
            ViewBag.SomeData = this.SomeData;

            return View("ClientApp");
        }

        public IActionResult Child()
        {
            ViewBag.SomeData = this.SomeData;

            return View("ClientApp");
        }
    }
}
