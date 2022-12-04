import { calculatePrimes, displayPrimes} from './Primes/sieveOfEratosthenes';

console.log('math-algorithms');

console.log('Primes less than 100');
displayPrimes(calculatePrimes(100));
