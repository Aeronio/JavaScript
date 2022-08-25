//Inheritance

class Chef{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    //object function, you do not use the function keyword
    makeChicken(){
        document.write("Making chicken <br>");
    }

    makeSpecialDish(){
        document.write("Non-descript special dish <br>");
    }


}

//Here's what inheritance looks like in Javascript
class ItalianChef extends Chef{
    constructor(name, age, countryOfOrigin){
        super(name, age); //uses the "super" classes constructors to set the name and age
        this.countryOfOrigin = countryOfOrigin;
    }

    makePasta(){
        document.write("Making pasta <br>");
    }

    //overrides the original
    makeSpecialDish(){
        document.write("Chicken Parm special dish");
    }
}

var myChef = new Chef("ChefGuy", 34);
myChef.makeChicken();

var myItalianChef = new Chef("ItalianGuy", 42, "Italy");

myItalianChef.makeChicken();
myItalianChef.makeSpecialDish();
document.write(myItalianChef.age)