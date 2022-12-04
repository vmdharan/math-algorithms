// Fibonacci algorithm using recursion.
// F(0) = 0; F(1) = 1
// F(n) = F(n-1) + F(n-2), for n > 1

const Fibonacci = (n: number): number => {
    if(n <= 1) {
        return n;
    }
    return Fibonacci(n - 1) + Fibonacci(n - 2);
};

export default Fibonacci;