
//object literal
let book= {
    name: 'The best',
    author: 'Nick',
    year:2012,
    Summary : function()  {
        return `The book ${this.name} was written by ${this.author} in ${this.year}.`;
    }
};
let book1= {
    name: 'Enter',
    author: 'Nick',
    year:2002,
    Summary : function()  {
        return `The book ${this.name} was written by ${this.author} in ${this.year}.`;
    }
};

console.log(book.Summary());
console.log(book1.Summary());