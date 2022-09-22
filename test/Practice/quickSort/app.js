function quicksort(arr){
    qs(arr, 0, arr.length -1);
}

//This is where the recursion happens 
function qs(arr, l, r){
    if(l >= r){
        return;
    }

    p = partition(arr, l, r);

    qs(arr, l, p-1);
    qs(arr, p+1, r);
}

function partition(arr, l, r){
    let pivot = arr[r];
    let index = l-1;

    for(j = l; j < r; j++){
        if(arr[j] < pivot){
            index += 1;
            //[arr[index], arr[j] = arr[j], arr[index]];
            swapArray(arr, index, j)
        }
    }
    swapArray(arr, index+1, r)
    return index+1;
}

const swapArray = (arr, index1, index2) => {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]]
}


nums1 = [1, 3, 10];
nums2 = [3, 1, -1, 0, 2, 5];
nums3 = [20, 1, -5, 6, 2, -20, 3, 7, 12, -7];

start = performance.now();
numbers = nums3; //change array here
document.write("Unsorted array: " + numbers);
document.write("<br>");
console.assert(quicksort(numbers));
document.write("Sorted array:" + numbers);
end = performance.now();

console.log(end - start);