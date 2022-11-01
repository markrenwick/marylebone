namespace Marylebone.Domain.Interfaces.Services
{
    public interface IPrimesService
    {
        List<int> GetPrimeNumbersInRange(int start, int end);
        bool IsPrime(int number);
    }
}