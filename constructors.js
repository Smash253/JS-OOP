//Constructor
function Book(name, author, year) {
        this.name=name;
        this.author=author;
        this.year=year;    
        this.Summary= function() {
            
                return `The book ${this.name} was written by
                 ${this.author} in ${this.year}.`;
            
        }

}

//Instatiate an Object
let Book2= new Book('The best','Nick', 2012);
let Book1=new Book('Enter','Nick',2018);

console.log(Book2);