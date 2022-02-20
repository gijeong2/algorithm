const number = '4177252841';
const k = 4;

const solution = (number, k) => {
    let count = 0;
    const stack = [];
    for (let i of number) {
        while (k > count && stack[stack.length - 1] < i) {
            stack.pop();
            count++;
        }
        stack.push(i);
    }
    while (count < k) {
        stack.pop();
        count++
    }
    return stack.join('')
}

console.log(solution(number, k))