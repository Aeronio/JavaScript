//Classes and objects

// You don't even have to declare the variables like C#
class Book{
    constructor(title, author){
        this.title = title;
        this.author = author;
    }

    //object function, you do not use the function keyword
    readBook(){
        document.write("Reading " + this.title + " by " + this.author);
    }
}

//how to make an object
var book1 = new Book("Morgawr", "Terry Brooks");

document.write(book1.title + "<br>");
book1.readBook();