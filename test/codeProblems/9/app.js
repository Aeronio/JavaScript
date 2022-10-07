/*Code Problem #8:

Given a list of integers, write a function that returns the largest sum of non-adjacent numbers. Numbers can be 0 or negative.

For example, [2, 4, 6, 2, 5] should return 13, since we pick 2, 6, and 5. [5, 1, 1, 5] should return 10, since we pick 5 and 5.

Follow-up: Can you do this in O(N) time and constant space?
*/


function nonAdjacents(listArray){

    if(listArray.length == null){
        return 0;
    }

    let allNegative = true;
    for(let i = 0; i < listArray.length; i++){
        if(listArray[i] > 0){
            allNegative = false;
        }
    }

    // console.log("Array length: " + listArray.length)
    // console.log("Negatives count: " + negativesCount)

    console.log("allNegative value: " + allNegative);

    if(allNegative){
        return Math.max(...listArray);
    }

    let firstSum = 0;
    let secondSum = 0;

    for(let i = 0; i < listArray.length; i++){
        // console.log("pass #" + (i));
        // console.log("firstSum: " + firstSum);
        // console.log("secondSum: " + secondSum);
        let tempSum = Math.max(listArray[i] + secondSum, firstSum);
        //console.log("secondSum + listArray[i]: " + (listArray[i]+secondSum));
        secondSum = firstSum;
        firstSum = tempSum;

        // console.log("tempSum: " + tempSum);
    }
    return firstSum;
}


let list1 = [10, 15, 3, 7];
let list2 = [20, 30, 12, 10];
let list3 = [0, 10, 2, 17, 5];
let list4 = [11, 20, -3, 10];
let list5 = [11, 20, -3, 10, 15, 5, 7, 2];
//[-3, 2, 5, 7, 10, 11, 15, 20]
//[-3, 2, 5, 7, 10, 11, 15, 20, 30]
//[-25, -21, -15, -10, -7, 3]
//[-25, -21, -15, -10, -7, -4, 3]
let testList = [-30, -25, -21, -15, -11, -10, -7, -4, 3];
let testList2 = [-30, -25, -21, -15, -11, -10, -7, -4, -3];
let testList3 = [5,1,1,5];

listOfNumbers = list4;

document.write("Greatest sum of non-adjacent numbers?: <br>");
document.write("The results: " + nonAdjacents(list3));