using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace UserLookupBackend.Controllers
{

    [Route("api")]
    public class UserController : Controller
    {
        public UserContext context;

        public UserController(UserContext c) => context = c;

        //http://localhost:53077/api

        [HttpGet("test")]
        public IActionResult getTestData()
        {
            return Content("Test Value");
        } 
    }
}
