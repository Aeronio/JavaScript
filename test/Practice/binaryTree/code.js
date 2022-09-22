//WIP CODE, NON FUNCTIONAL
class Node{
    constructor(data, left, right){
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

//This func has a time complexity of O(n) because it calls the two funtions within the return line
function findSum(root){
    if(root == null){
        return 0;
    }
    return root.data + findSum(root.left) + findSum(root.right);
}

start = performance.now();
nums = [1, 3, 10];
// document.write(arraySum(nums));
document.write(sumNumbers(nums));
end = performance.now();

console.log(end - start);