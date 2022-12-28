function setCharAt(str = '', index, chr) {
    if (index > str.length - 1) return str
    return str.substring(0, index) + chr + str.substring(index + 1)
}
function triggerBom(grid, bomTriggerIdx, i, j) {
    const coLen = grid[i].length
    // empty the top value
    if (i > 0) {
        grid[i - 1] = setCharAt(grid[i - 1], j, '.')
        bomTriggerIdx[`${i - 1} ${j}`] = true
    }
    // empty the bottom vaue
    if (grid.length > i + 1 && grid[i + 1][j] != 'O') {
        grid[i + 1] = setCharAt(grid[i + 1], j, '.')
        bomTriggerIdx[`${i + 1} ${j}`] = true
    }
    // empty the left value
    if (j > 0) {
        grid[i] = setCharAt(grid[i], j - 1, '.')
        bomTriggerIdx[`${i} ${j - 1}`] = true
    }
    // empty the right value
    if (coLen > j + 1 && grid[i][j + 1] != 'O') {
        grid[i] = setCharAt(grid[i], j + 1, '.')
        bomTriggerIdx[`${i} ${j + 1}`] = true
    }
}

function bomberMan(n, grid) {
    if (n === 1) return grid
    if (n % 2 === 0) {
        for (let j = 0; j < grid.length; j++) {
            for (let k = 0; k < grid[0].length; k++) {
                grid[j] = setCharAt(grid[j], k, 'O')
            }
        }
        return grid
    }
    let count = 0
    n = n - 1
    while (n > 0) {
        count++
        n = n - 2
    }
    const runTimes = count % 2 === 0 ? 2 : 1
    for (let i = 0; i < runTimes; i++) {
        const bomTriggerIdx = {}
        for (let j = 0; j < grid.length; j++) {
            for (let k = 0; k < grid[0].length; k++) {
                if (grid[j][k] == 'O') {
                    triggerBom(grid, bomTriggerIdx, j, k)
                    grid[j] = setCharAt(grid[j], k, '.')
                    bomTriggerIdx[`${j} ${k}`] = true
                }
                if (!bomTriggerIdx[`${j} ${k}`]) {
                    grid[j] = setCharAt(grid[j], k, 'O')
                }
            }
        }
    }
    return grid
}