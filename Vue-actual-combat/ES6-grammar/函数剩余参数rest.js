function count(action, ...data) {
    if (action === '+') {
        let result = 0;
        for (const i of data) {
            result += i;
        }
        return result
    } else if (action === '*') {
        let result = 1;
        for (const j of data) {
            result *= j;
        }
        return result;
    }
}

console.log(count('+', 1, 2, 3, 4, 5));
console.log(count('*', 1, 2, 3, 4, 5));
