//Find the last element of the following arrays.

arr1 = [3,7,34,90,12]
arr2 = [true, "green", "where",12,56]
let arr11 = arr1[arr1.length -1]
let arr22 = arr2[arr2.length -1]
console.log(arr11);
console.log(arr22);

//Write a JS script to sort the following array items
var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
let sortnums = arr3.sort();
console.log(sortnums)

//Write a JS program that will join the following array elements into a string
myPets = ["Cow", "Bird", "Snake", "Dog"];
let joined = myPets.join(',');
console.log(joined);

//Write a program to remove duplicates from the following array.
//Console the array without duplicates, and console another array that only contains the duplicates
var arr = ["apple", "mango", "apple",
            "orange", "mango", "mango"];
const noRepeat = new Set(arr);
console.log(noRepeat);


//Write a JS script to search for the following word in the array,'we'.
//If the word is present, console it else console "the search word was not found"

let arr5 = ["the", "way", "x", 4];
let wordy="we"
 if (arr5.includes(wordy))
 {
    console.log(wordy);
    }
 else{
    console.log("the search word was nor found")
   };




//Write a JS script to sort the following string
let word = "sevink"
let wordsort = word.split("").sort().join("")
console.log(wordsort)

