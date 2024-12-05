function fibs(n) {
    let fib = []
    for (let i = 0; i < n; i++) {
        if (i < 2) {
            fib.push(i)
        }
        else {
            fib.push(fib[i-1] + fib[i-2])
        }
    }
    return fib;
}

console.log(fibs(2))


function fibsRecursion(n) {
    if(n == 1) {
        return [0]
    }
    else if (n == 2) {
        return [0, 1]
    }
    else {
       return  [...fibsRecursion(n - 1), fibsRecursion(n - 1)[n-2] + fibsRecursion(n - 1)[n - 3]]
    }
}

console.log(fibsRecursion(8))