// arrays
let colorss = ["Black", "Pink", "Blue"];
// console.log(colorss);
console.log(colorss[0]);
console.log(colorss[1]);
console.log(colorss[2]);

// loop through arrays(for loop)
let fruits1 = ["Apple", "Banana", "Mango"];
for(let i = 0; i < fruits1.length; i++){
    console.log(fruits1[i]); // we can also added here index like(i, fruits[i])
}

//for ..of loop: when we only need values not index.
for(let value of colorss){
    console.log(value)
}

//forEach 
let arr = ["Naaz", "Shruti"];
arr.forEach((value, index) => {
    console.log(index, value);
})

// practical examples:

// 1. Prints all elements of array.

let arr1 = [10, 20, 30, 40];
for(let i=0; i<arr1.length;i++){
    console.log(arr1[i])
}

// 2. Print only first 3 colors.
let colors = ["Pink", "Red", "Blue","Green", "Orange"];
for(let i=0; i<3; i++){
    console.log(colors[i])
}

//3.count how many numbers are even.
let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
let even = 0;
for(let i=0; i<numbers.length;i++){
    if(numbers[i] % 2 === 0){
        console.log(numbers[i])
        even++;
    }
}
console.log("Total even numbers: ",even);

// 4. finds the largest value in an array.
 let num = [3, 8, 9, 8, 78, 12, 99];
 let max = num[0];
 for(let i =1; i<num.length;i++){
    if(num[i] > max){
        max = num[i];
    }
 }
 console.log("Maximum number:",max)

 // 5. make a new array of doubled values.

 let nums = [2, 4, 6];
 let doubled = [];
 for(let i=0; i<nums.length;i++){
    doubled.push(nums[i] * 2);
 }

 console.log(doubled);

 // 6. Stores only names that starts with "A".
 let names = ["Anam", "Naaz", "Annu", "Farad"];
 let result = [];
 for(let i=0;i<names.length;i++){
    if(names[i].startsWith("A")){
        result.push(names[i]);
    }
 }

 console.log(result);

 // 7. reverse an array manually

 let n = [1, 2, 3, 4, 5];
 let reversed = [];
 for(let i=n.length-1; i>=0; i--){
    reversed.push(n[i]);
 }

 console.log(reversed);

 // 8. Count how many times "apple" appears.

 let fruits = ["apple", "banana", "mango", "apple", "apple"];
 let count = 0;
 for(let i = 0; i<fruits.length;i++){
    if(fruits[i] == "apple"){
        count++;
    }
 }
 console.log("Apple appears: ",count);

 // 9. find the index of a value without using indeOf.
  let col = ["red", "blue", "purple", "yello"];
  let search = "blue";
  let index = -1;
  for(let i=0;i<col.length;i++){
    if(col[i] === search){
        index = i;
        break;
    }
  }
  console.log("Index of blue color is:",index);

// 10. create an array with only numbers > 50

let marks = [90,10,30,21,50,55,60,80];
let filtered = [];
for(let i=0;i<marks.length;i++){
    if(marks[i]>50){
        filtered.push(marks[i]);
    }
}
console.log(filtered);