//This func has a linear time complexity based on n.length
function arraySum(n) {
    result = 0;
    for(i = 0; i < n.length; i++){
        result = result + n[i];
    }
    return result;
}

//This is the same function but similar to python and "range" function in go
function sumNumbers(numbers) {
    let result = 0;
    for(const number of numbers){
        result += number;
    }
    return result;
}

//This is a different way of writing the above code using a built-in javascript function
//because it calls another function, time complexity is still linear O(n)
function altNums(numbers) {
    return numbers.reduce((sum, curNum) => sum + curNum, 0);
}

start = performance.now();
nums = [1, 3, 10];
// document.write(arraySum(nums));
document.write(sumNumbers(nums));
end = performance.now();

console.log(end - start);