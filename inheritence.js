//Constructor
function Book(title, author, year) {
    this.title=title;
    this.author=author;
    this.year=year;    
}

//Summary prototype method
Book.prototype.Summary= function() {
    return `The book ${this.title} was written by ${this.author} in ${this.year}.`;
};  

//Magazine Constructor
function Magazine(title, author, year, month) {

    Book.call(this, title, author, year);
    this.month=month;
} 

//Inherit Prototype
Magazine.prototype= Object.create(Book.prototype);

//Instantiate magazine object
let mag1= new Magazine('Bro','Nick',2018,'Nov');

//Magazine Constructor
Magazine.prototype.constructor=Magazine;



console.log(mag1.Summary());