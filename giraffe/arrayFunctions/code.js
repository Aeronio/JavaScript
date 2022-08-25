// ARRAY FUNCTIONS

var friendos = new Array(); //Another way to declare an array
friendos.push("Dude1");
friendos.push("Dude2");
friendos.push("Dude3");

//friends.pop();
document.write(friendos + "<br>");
document.write(friendos[1] + "<br>");
document.write(friendos.length + "<br>");
document.write(friendos.indexOf("Dude1") + "<br>");
document.write(friendos.indexOf("Buggo") + "<br>");
document.write(friendos.reverse() + "<br>");
document.write(friendos.sort() + "<br>"); //Sort may not work if you have a bunch of different element types
document.write(friendos.pop());