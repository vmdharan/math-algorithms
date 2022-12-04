import Fibonacci from './Fibonacci/Fibonacci';
import { calculatePrimes, displayPrimes} from './Primes/SieveOfEratosthenes';

console.log('math-algorithms');

console.log('Primes less than 100');
displayPrimes(calculatePrimes(100));

console.log('Fibonacci, F(7)');
console.log(Fibonacci(7));