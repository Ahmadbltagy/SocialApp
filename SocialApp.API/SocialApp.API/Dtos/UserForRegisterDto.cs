
using System.ComponentModel.DataAnnotations;

namespace SocialApp.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string UserName { get; set; }
        [Required]
        [StringLength(8,MinimumLength =4, ErrorMessage ="You must specifiy password between 4 to 8" )]
        public string Password { get; set; }
    }
}
