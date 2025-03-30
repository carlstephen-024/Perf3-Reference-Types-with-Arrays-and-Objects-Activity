/*
let arr1 = ["Cecile", "Lone"];let arr2 = ["Emil", "Tobias", "Linus"];
//Usage of concat()
let arr1and2 = arr1.concat(arr2);//the contents of arr2 is concatinated after the last index in arr1
console.log(arr1and2);
*/
let fruits = ["Banana", "Orange", "Apple", "Mango"];
//Usage of push()
fruits.push("Kiwi");
console.log(fruits); // ["Banana", "Orange", "Apple", "Mango", "Kiwi"]
//Usage of  pop()
console.log(fruits.pop()); // Kiwi
//Usage of slice()
console.log(fruits.slice(1, 3)); // ["Orange", "Apple"]
//Usage of sort()
console.log(fruits.sort()); // ["Apple", "Banana", "Mango", "Orange"]

let array1 = [1, 2, 3];
//Usage of unshift()
array1.unshift(4, 5);
console.log(array1);//[4, 5, 1, 2, 3]

let months = ['January', 'February', 'March'];
//Usage of splice()
months.splice(3, 0, 'April');//adds April in the index 3
console.log(months);//['January', 'February', 'March', 'April']
