// Catalan numbers using recursive method.

const Catalan = (n: number): number => {
    if(n <= 1) {
        return 1;
    }

    let result = 0;
    for(let i=0; i<n; i++) {
        result += Catalan(i) * Catalan(n - i -1);
    }

    return result;
};

export default Catalan;