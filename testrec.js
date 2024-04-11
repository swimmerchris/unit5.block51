function power(a, b) {
    if (b === 1) {
        return b
    } else {
        console.log("1")
        return a * power(a, b - 1)
    }
}

console.log(power(5, 2))