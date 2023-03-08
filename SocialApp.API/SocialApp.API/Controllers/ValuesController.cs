using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SocialApp.API.Data;

namespace SocialApp.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        public ValuesController(ApplicationDbContext context)
        {
            _context = context;
        }
        [AllowAnonymous]
        [HttpGet]
        public async Task<IActionResult> Values()
        {
            var values = await this._context.Values.ToListAsync();
            if (values == null) return NotFound();
            return Ok(values);
        }
        [AllowAnonymous]
        [HttpGet("{id}")]
        public async Task<IActionResult> GetValue(int id)
        {
            var value = await this._context.Values.FirstOrDefaultAsync(x => x.Id == id);
            if(value == null) return NotFound();
            return Ok(value);
        }
    }

}
