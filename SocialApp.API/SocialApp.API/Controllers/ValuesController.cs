using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SocialApp.API.Data;

namespace SocialApp.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ValuesController : Controller
    {
        private readonly ApplicationDbContext _context;
        public ValuesController(ApplicationDbContext context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<IActionResult> Values()
        {
            var values = await this._context.Values.ToListAsync();
            if (values == null) return NotFound();
            return Ok(values);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetValue(int id)
        {
            var value = await this._context.Values.FirstOrDefaultAsync(x => x.Id == id);
            if(value == null) return NotFound();
            return Ok(value);
        }
    }

}
