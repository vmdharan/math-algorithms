// Generate prime numbers using the Sieve of Eratosthenes.

// Set a limit, n.
const DEFAULT_N = 100;

// List of primes.
const P: boolean[] = [];

// Initialise the list of all integers from 2 to n.
const initialiseList = (n:number = DEFAULT_N) => {
    P[0] = false;
    P[1] = false;
    let i;
    for(i=2; i <= n; i++) {
        P[i] = true;
    }
};

// Calculate the prime numbers.
const calculatePrimes = (n: number = DEFAULT_N): number[] => {
    initialiseList(n);
    let i, j, k, m;
    const result = [];
	
    // Loop till sqrt(n).
    for(i=2; i <= Math.sqrt(n); i++) {
        if(P[i] == true) {
            // Mark all multiples of i as false.
            for(j=(i*i); j <= n; j=j+i) {
                P[j] = false;
            }
        }
    }

    for(m = 0, k = 0; m < P.length; m++) {
        if(P[m] == true) {
            result[k] = m;
            k++;
        }
    }
    return result;
};

// Display the output.
const displayPrimes = (primes: number[]) => {
    let m;
    for(m=0; m<primes.length; m++) {
        console.log(primes[m]);
    }
};

export { calculatePrimes, displayPrimes };