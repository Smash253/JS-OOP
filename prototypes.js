//Constructor
function Book(name, author, year) {
    this.name=name;
    this.author=author;
    this.year=year;    
}

//Summary prototype method
Book.prototype.Summary= function() {
    return `The book ${this.name} was written by ${this.author} in ${this.year}.`;
};

//Years since publishing
Book.prototype.Age= function() {
    let years= new Date().getFullYear() -this.year;
    return `${this.name} is ${years} years old`;
};

//Revise
Book.prototype.Revision= function(newYear) {
    this.year=newYear;
    this.revision= true;
    
}

//Instatiate an Object
let Book2= new Book('The best','Nick', 1543);
let Book1=new Book('Enter','Nick',2018);

console.log(Book2.Age());