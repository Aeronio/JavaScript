//Getters and Setters
//The way we access attributes and the getters/setters is exactly the same,we don't need to use getters/setters until we need to

class Book{
    constructor(title, author){
        this.title = title;
        this.author = author;
    }

    // for the gets/sets, syntax is "get attribute(){}"
    get title(){
        document.write("<p>Getting </p>");
        return this._title; // _title (the underscore) means that it's refering to the actual object attribute and NOT the getter/setter
    }

    set title(title){
        document.write("<p>Setting </p>");
        this._title = title;
    }

    //object function, you do not use the function keyword
    readBook(){
        document.write("Reading " + this.title + " by " + this.author);
    }
}

//how to make an object
var book1 = new Book("Morgawr", "Terry Brooks");

document.write(book1.title + "<br>"); //This actually goes through the getter now
book1.readBook();