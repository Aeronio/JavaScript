//This code has a constant time complexity
//This is returns the eacact same result as the linear line, but is more performant
//It forgoes a loop (each loop adds time complexity)
//For time complexity in a func, count the number of times an expression is executed 
function sumUp(n) {
    return (n/2) * (1 + n); //Here, one expression is executed one time (constant) O(1)
}

start = performance.now();
num = 100000000000000;
document.write(sumUp(num));
end = performance.now();

console.log(end - start);