using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using UserLookupBackend.Models;

namespace UserLookupBackend.Controllers
{

    [Route("api")]
    public class UserController : Controller
    {
        public UserContext context;

        public UserController(UserContext c) => context = c;

        //http://localhost:53077/api

        [HttpGet("getuser")]
        public IActionResult getSingleUser()
        {
            string id = Request.Query["id"];

            User newUser = context.users.FirstOrDefault(us => us.id == Convert.ToInt32(id));
            if (newUser == null)
                return Content("Username not found");

            return Content(JsonConvert.SerializeObject(newUser));
        } 
    }
}
