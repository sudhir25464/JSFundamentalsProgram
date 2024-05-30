const MyArray = [2,23,,34,5,2,4,2,43,5,4,6,5,656,67,6,4,4];
const myset = new Set(MyArray);
// console.log(myset)

const newArray = [...myset];
console.log(newArray);