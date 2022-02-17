const n = 11;

// 에라토스테네스의 체
const solution = n => {
    const prime = [];
    const isPrime = [true, true];
    for (let i = 2; i <= n; i++) {
        if (isPrime[i]) {
            continue;
        }
        for (let j = 2 * i; j <= n; j+=i) {
            isPrime[j] = true;
        }
        isPrime[i] = false;
        prime.push(i)
    }
    return prime
}

