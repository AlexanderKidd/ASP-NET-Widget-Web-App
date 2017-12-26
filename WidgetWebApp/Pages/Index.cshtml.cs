using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;


/* This is meant to make model-binding easy: 
 * https://docs.microsoft.com/en-us/aspnet/core/mvc/models/model-binding
 * Basically, dump the HTTP data automatically into a model instead of 
 * extracting w/ controller.
 * 
 * Razor pages also make it easier to drop-in tag & html helpers 
 * (both generate html tags based on code, tag helpers seem newer, sleeker).
 */
namespace WidgetWebApp.Pages
{
    public class IndexModel : PageModel
    {
        public void OnGet()
        {

        }
    }
}
