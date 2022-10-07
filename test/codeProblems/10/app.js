/*Code Problem #10:

Implement a job scheduler which takes in a function f and an integer n, and calls f after n milliseconds.
*/

function someScheduler(aFunc, n){
    setTimeout(aFunc, n);
}

function passedFunction(){
    alert("Hello this is passedFunction!");
}



let n = 3000;
const f = function(){
    alert("Hello this is an anonymous Function! Alerting after: " + time + " milliseconds");
};


document.write("The function, it speaks!: <br>");
document.write("The results: " + someScheduler(f, n));