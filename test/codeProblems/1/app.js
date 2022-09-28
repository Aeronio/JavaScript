/*Code Problem #1:

Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

Bonus: Can you do this in one pass?
*/

function isThere(list, k){
    for(let i = 0; i < list.length; i++){
        for(let j = i+1; j < list.length; j++){
            if(list[i]+list[j] == k){
                console.log(list[i] + " and " + list[j]);
                return true;
            }
        }
    }
    return false;
}

// function testThere(list, k){
    
//     masterArray = list;
//     var tempArray = new Array();
//     for (let i = 0; i < masterArray.length; i++){
//         tempArray.push(k-masterArray[i]);
//     }

//     console.log(tempArray);

// }



let list1 = [10, 15, 3, 7];
let list2 = [20, 30, 12, 10];
let list3 = [0, 10, 2, 17, 5];
let list4 = [11, 20, -3, 10];
let k = 17;
listOfNumbers = list4;

document.write("anything in the array add up to " + k + "? <br>");
document.write("The results: " + isThere(listOfNumbers, k));

testThere(list1, k);