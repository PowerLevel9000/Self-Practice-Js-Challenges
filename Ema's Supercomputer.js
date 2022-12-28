function twoPluses(grid) {
    const B = grid.map(e => e.split('').map(v => v == 'G'))
    const n = B.length, m = B[0].length
    let M = 1, W = null
    
    const getL = (i, j, original) => {
        const b = original ? B : W, r = [1]
        let max = Math.min(i, j, n-i-1, m-j-1)
        for (let l=1; l <= max; l++)
            if (b[i-l][j] & b[i+l][j] & b[i][j-l] & b[i][j+l]) r.push(2*l+1)
            else return original ? r : r?.[r.length-1]
        return original ? r : r?.[r.length-1]
    }
    
    for (let i=0; i < n; i++) for (let j=0; j < m; j++) {
            let L = getL(i, j, true);
            for (let k=0; k < L.length; k++) {
                W = B.map(r => r.slice())
                W[i][j] = 0
                for (let l=1; l <= (L[k]-1)/2; l++)
                    W[i+l][j] = W[i-l][j] = W[i][j+l] = W[i][j-l] = 0
                for (let i=0; i < n; i++) for (let j=0; j < m; j++)
                        M = Math.max(M, (2 * L[k] - 1) * (2 * getL(i, j) - 1));
            }
        }
    return M
}
