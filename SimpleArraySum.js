function simpleArraySum(ar) {
    let sum =0;
    for(let a in ar) sum+=ar[a]
    return sum
}
console.log(simpleArraySum([1, 2, 3, 4, 10, 11]))

