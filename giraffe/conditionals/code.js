// If statements, it's honestly really similar to C and Go

var isStudent = false;
var isSmart = false;

if(isStudent && isSmart){
    document.write("You are a smart student");
} else if(isStudent && !isSmart){
    document.write("You are not a smart student");
} else {
    document.write("nothing else to see here");
}

document.write("<br>");

// >, <, >=, <=, !=, == are all the same