import Fibonacci from './Fibonacci/Fibonacci';
import FibonacciDP from './Fibonacci/FibonacciDP';
import { calculatePrimes, displayPrimes} from './Primes/SieveOfEratosthenes';

console.log('math-algorithms');

console.log('Primes less than 100');
displayPrimes(calculatePrimes(100));

console.log('Fibonacci using recursion, F(7)');
console.log(Fibonacci(7));

console.log('Fibonacci using iteration, F(7)');
console.log(FibonacciDP(7));