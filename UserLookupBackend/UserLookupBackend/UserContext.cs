﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using UserLookupBackend.Models;

namespace UserLookupBackend
{
    public class UserContext : DbContext
    {
        public UserContext(DbContextOptions<UserContext> options) : base(options) { }
        public UserContext() { }

        public DbSet<User> users { set; get; }
    }
}
