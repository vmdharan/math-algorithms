// Fibonacci sequence using Dynamic Programming (iterative) method.
// F(0) = 0; F(1) = 1
// F(n) = F(n-1) + F(n-2), for n > 1

const FibonacciDP = (n: number): number => {
    const F = [];

    // Guard
    if(n <= 1) {
        return n;
    }

    // Initialise
    for(let i=0; i<=n; i++) {
        F[i] = 0;
    }

    F[0] = 0;
    F[1] = 1;

    for(let j=2; j<=n; j++) {
        F[j] = F[j - 1] + F[j - 2];
    }

    return F[n];
};

export default FibonacciDP;