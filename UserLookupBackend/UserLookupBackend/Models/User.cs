using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace UserLookupBackend.Models
{
    public class User
    {
        [Key] public int id { set; get; }

        public string fname { set; get; }
        public string lname { set; get; }
        public string address { set; get; }
        public string city { set; get; }
        public string state { set; get; }
        public int zip { set; get; }
    }
}
