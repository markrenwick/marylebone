using Marylebone.Domain.Interfaces.Services;
using Microsoft.AspNetCore.Mvc;

namespace Marylebone.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PrimesController : ControllerBase
    {
        private readonly ILogger<PrimesController> _logger;
        private readonly IPrimesService _primesService;

        public PrimesController(ILogger<PrimesController> logger, IPrimesService primesService)
        {
            _logger = logger;
            _primesService = primesService;
        }

        [HttpGet]
        [Route("GetPrimeNumbersBetween")]
        public IActionResult GetPrimeNumbersBetween(int start, int end)
        {
            _logger.Log(LogLevel.Information, $"Calling GetPrimeNumbersBetween with start:{start} end:{end}");

            if (start < 0 || start >= end)
                return BadRequest();

            return Ok(_primesService.GetPrimeNumbersInRange(start, end));
        }
    }
}