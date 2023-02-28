using Microsoft.EntityFrameworkCore;

using SocialApp.API.Models;

namespace SocialApp.API.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options):base(options)
        {
            
        }
        public DbSet<Value> Values { get; set; }
    }
}
