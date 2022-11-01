using Marylebone.Domain.Interfaces.Services;

namespace Marylebone.Domain.Services
{
    public class PrimesService : IPrimesService
    {
        public List<int> GetPrimeNumbersInRange(int start, int end)
        {
            var numbers = new List<int>();

            for (var i = start; i <= end; i++)
            {
                if (IsPrime(i))
                    numbers.Add(i);
            }

            return numbers;
        }

        public bool IsPrime(int number)
        {
            if (number <= 1) return false;
            if (number == 2) return true;
            if (number % 2 == 0) return false;

            var boundary = (int)Math.Floor(Math.Sqrt(number));
          
            for (var i = 3; i <= boundary; i += 2)
                if (number % i == 0)
                    return false;
    
            return true;        
        }
    }
}
