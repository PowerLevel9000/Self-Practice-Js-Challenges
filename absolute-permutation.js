function absolutePermutation(n, k) {
    const D = {}
    for (let i=1; i <= n; i++)
        if (i-k > 0 && !D[i-k]) D[i-k] = i
        else if (i+k <= n && !D[i+k]) D[i+k] = i
        else return [-1]
    return Object.values(D)
}

console.log(absolutePermutation(3, 2))