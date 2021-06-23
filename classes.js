 class Book {
     constructor(title, author, year) {
        this.title=title;
        this.author=author;
        this.year=year;
     }

     Summary() {
        return `The book ${this.name} was written by ${this.author} in ${this.year}.`;

     }


     Age() {
        let years= new Date().getFullYear() -this.year;
        return `${this.name} is ${years} years old`;
     }

     Revise(newYear) {
        this.newYear=new this.year;
        this.revised=true; 
     }

 };


 //Instiatiate Object
 let Book1=new Book('Enter','Nick',2018);


 console.log(Book1);