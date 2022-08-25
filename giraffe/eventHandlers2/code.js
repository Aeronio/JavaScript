//HTML EVENT HANDLERS
//Modifies programmatically without having to add to the HTML file

//The events you can respond to: https://www.w3schools.com/jsref/dom_obj_event.asp

var header = document.getElementById("myHeader");

//This is what programatically adding a listener function looks like
//the parameters for this func are (Event you want to listen for, function to call)
//You drop the "on" when using it through javascript
//The second argument is a function, we just declared it right within the func

header.addEventListener("click", function(){
    alert("You clicked " + header.id);
});