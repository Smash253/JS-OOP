class Book {
    constructor(title, author, year) {
       this.title=title;
       this.author=author;
       this.year=year;
    }

    Summary() {
       return `The book ${this.title} was written by ${this.author} in ${this.year}.`;

    }
}

// Magazine subclass
class Magazine extends Book {
    constructor (title, author, year, month) {
        super(title, author, year);
        this.month=month;
    }
}

//Instantiate obj
let mag1=new Magazine('Enter','Nick',2018, 'Aug');

console.log(mag1.Summary());
