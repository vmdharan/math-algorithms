import Catalan from './Catalan/Catalan';
import CatalanDP from './Catalan/CatalanDP';
import Fibonacci from './Fibonacci/Fibonacci';
import FibonacciDP from './Fibonacci/FibonacciDP';
import { calculatePrimes, displayPrimes} from './Primes/SieveOfEratosthenes';

console.log('math-algorithms');

console.log('Primes less than 100');
displayPrimes(calculatePrimes(100));

// F(7) = 13
console.log('Fibonacci using recursion, F(7)');
console.log(Fibonacci(7));

console.log('Fibonacci using iteration, F(7)');
console.log(FibonacciDP(7));

// C(7) = 429
console.log('Catalan using recursion, C(7)');
console.log(Catalan(7));

console.log('Catalan using iteration, C(7)');
console.log(CatalanDP(7));