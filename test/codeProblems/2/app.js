/*Code Problem #2:

Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

Follow-up: what if you can't use division?
*/

function bigMultiply(list){
    console.log("Start Array: " + list);
    const bigArray = new Array();

    for(let i = 0; i < list.length; i++){
        // let multiplyValue = list[i];
        // let tempArray = list.splice(i, 1);
        var tempArray = new Array();
        let multiplyValue = 1;
        for(let j = 0; j < list.length; j++){
            tempArray.push(list[j]);
        }
        let checkSplice = tempArray.splice(i, 1);


        console.log("pass #" + (i+1) + ": ");
        console.log("list: " + list);
        console.log("Spliced Value: " + checkSplice);
        console.log("tempArray: " + tempArray);

        for(let j = 0; j < tempArray.length; j++){
            multiplyValue *= tempArray[j];
        }

        console.log("Pushed multiplyValue: " + multiplyValue);
        bigArray.push(multiplyValue);
    }

    console.log("End Array: " + bigArray);
    return bigArray;
}

//The same function but using slice() instead of a for loop for neatness
function altBigMultiply(list){
    console.log("Start Array: " + list);
    const bigArray = new Array();

    for(let i = 0; i < list.length; i++){
        const tempArray = list.slice();
        let multiplyValue = 1;
        let checkSplice = tempArray.splice(i, 1);


        console.log("pass #" + (i+1) + ": ");
        console.log("list: " + list);
        console.log("Spliced Value: " + checkSplice);
        console.log("tempArray: " + tempArray);

        for(let j = 0; j < tempArray.length; j++){
            multiplyValue *= tempArray[j];
        }

        console.log("Pushed multiplyValue: " + multiplyValue);
        bigArray.push(multiplyValue);
    }

    console.log("End Array: " + bigArray);
    return bigArray;
}

const testExample = [1, 2, 3, 4, 5];
const testExample2 = [3, 2, 1];

let list1 = [10, 15, 3, 7];
let list2 = [20, 30, 12, 10];
let list3 = [0, 10, 2, 17, 5];
let list4 = [11, 20, -3, 10];

listOfNumbers = list4;

document.write("What if we took every integer in an array and multiplied it against everything else in the array? Wouldn't that be funny? <br>");
document.write("The results: " + altBigMultiply(testExample));