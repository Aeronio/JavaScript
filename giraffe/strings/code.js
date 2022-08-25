// STRINGS

var greeting = "Hello";

document.write(greeting.length + "<br>");
document.write(greeting.charAt(0) + "<br>");
document.write(greeting.indexOf("llo") + "<br>")
document.write(greeting.indexOf("z") + "<br>")  //Should return -1 since it can't find the character
document.write(greeting.substring(2) + "<br>")
document.write(greeting.substring(1, 4) + "<br>") //non inclusive ending index, just like GO