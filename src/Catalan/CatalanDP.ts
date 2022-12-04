// Catalan numbers using Dynamic Programming (iterative) method.

const CatalanDP = (n: number): number => {
    const C = [];

    // Guard
    if(n <= 1) {
        return 1;
    }

    // Initialise
    for(let i=0; i<=n; i++) {
        C[i] = 0;
    }

    C[0] = 1;
    C[1] = 1;

    for(let j=2; j<=n; j++) {
        C[j] = 0;
        
        for(let k=0; k<j; k++) {
            C[j] += C[k] * C[j - k - 1];
        }
    }

    return C[n];
};

export default CatalanDP;