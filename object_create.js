//Object of Protos
let BookProtos= {
    summary: function () {
        return `The book ${this.title} was written by ${this.author} in ${this.year}.`;
    },
    Age: function() {
        let years= new Date().getFullYear() -this.year;
    return `${this.name} is ${years} years old`;
    }
};

//Create Object
let book1=Object.create(BookProtos);
book1.title='Love';
book1.author='Nick';
book1.year=2012;

console.log(book1);