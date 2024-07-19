//Activity 1: Oject Creation and Access
//Task1
const book ={
    title: "Half girl friend",
    author: "Chetan Bhagat",
    year: 2017
}
console.log(book);

//Task2
console.log(book.title);
console.log(book.author);

//Activity 2: Object Methods
//Task3
book.getInfo = function(){
    return `${book.title} and ${book.author}`
}
console.log(book.getInfo());

//Task4
book.updateYear = function(new_year){
    this.year = new_year;
}
book.updateYear(2020);

console.log(book);


//Activity 3: Nested Objects
//Task5
const library ={
    name: "NTR Library",
    books: [
        {
            title: "Think and Grow",
            author: "Napoleon Hill",
            year: 2000
        },
        { 
            title: "Rich dad Poor dad",
            author: "Robert Kiyosaki",
            year: 2008

        },
    ]
}
console.log(library);

//Task6
const librayName = library.name;
console.log(librayName);

const title_of_books = library.books.map(book=>book.title);
console.log(title_of_books);

//Activity 4: "this" Keyword
//Task7
book.getInfoTwo = function(){
    return `${this.title} and ${this.year}`
}
console.log(book.getInfoTwo());

//Activity 5: Object Iteration
//Task8
for(let key in book){
    console.log(`${key}:${book[key]}`);
}

//Task9
const keys = Object.keys(book);
console.log(keys);
const values = Object.values(book);
console.log(values);