//This code has a linear time complexity
function sumUp(n) {
    let result = 0;
    for (let i = 1; i <= n; i++){
        result += i; //Here, the result expression is executed n times (linear) O(n)
    }
    return result;
}

start = performance.now();
num = 10000000;
document.write(sumUp(num));
end = performance.now();

console.log(end - start);