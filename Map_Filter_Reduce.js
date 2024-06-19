const { toASCII } = require("punycode");

const myNum = [1, 2, 3, 4, 5, 7, 68, 3, 8];

const newNum = myNum.filter((num) => {

    return num > 4
})

console.log(newNum);


const books = [
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "Fiction",
        yearPublished: 1960,
        ISBN: "978-0-06-112008-4"
    },
    {
        title: "1984",
        author: "George Orwell",
        genre: "Dystopian",
        yearPublished: 1949,
        ISBN: "978-0-452-28423-4"
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Fiction",
        yearPublished: 1925,
        ISBN: "978-0-7432-7356-5"
    },
    {
        title: "Moby Dick",
        author: "Herman Melville",
        genre: "Adventure",
        yearPublished: 1851,
        ISBN: "978-0-14-243724-7"
    },
    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        genre: "Romance",
        yearPublished: 1813,
        ISBN: "978-0-19-953556-9"
    }
];


//   let booksRecord = books.filter((bk)=>{ 
//     return bk.genre ==='Fiction'
// })

booksRecord = books.filter((bk) => {
    return bk.yearPublished < 2000 && bk.genre === 'Romance'
})

console.log(booksRecord);
// USE OF MAP METHOD
const myarr = [10, 202, 93, 393, 193, 2923, 29];

// myarr.forEach((num)=>{           // here perform operation on array using map
//  console.log (num +10);

// })


const newArray = myarr.map((num) => {
    return num + 10;
})
console.log(newArray);

const newValue = myarr
    .map((num) => num *2)
    .map((num)=> num+1)
    .filter((num)=> num >200)

    

    console.log(newValue);


    //REDUCE

    const arr = [1,2,3,4];

    const totalvalue = arr.reduce(function(acc, currentVal){
            return acc += currentVal;
    }, 0)

    console.log(totalvalue);

    const arr2= [1,2,3,4,5,6];

    // const result = arr2.map((num)=>{
    //    return num*2;        
    // })
    // console.log("result "+ result);

    const result = arr2.reduce((acc, currentVal)=>{
        return acc += currentVal;
    },0);

    console.log( result);


    const mixedArray = [0, "hello", false, 42, "", null, "world"];
  
    const truthyValues = mixedArray .filter(Boolean);
    console.log(truthyValues); // Output: ["hello", 42, "world"]
    


