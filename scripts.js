

//1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
let ages = [3, 9, 23, 64, 2, 8, 28, 93];

// a.Programmatically subtract the value of the first element in the array from the value in the last element of the array.

let firstElement = ages[0];
let lastElement = ages[ages.length - 1];
console.log(lastElement - firstElement);


//b. Add a new age to your array 

  ages.push(29);

  // Subtract first element from last element (dynamic)
  
    firstElement = ages[0];
    lastElement = ages[ages.length - 1];
    console.log(lastElement - firstElement);


  
  
// C.Use a loop to iterate through the array and calculate the average age.

let sum = 0;
for (let i = 0; i < ages.length; i++) {
  sum += ages[i];
}
let averageAge = sum / ages.length;
console.log(averageAge);

 // 2 Create an array called names:
  
 let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
 
  // a. Use a loop to iterate through the array and calculate the average number of letters per name.

  let totalLetters = 0;
  for (let i = 0; i < names.length; i++) {
    totalLetters += names[i].length;
  }
  let averageLetters = totalLetters / names.length;
  console.log(`Average letters per name: ${averageLetters}`);

// b.Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
 
let fullName = '';
for (let name of names) {
  fullName += name + ' ';
}
console.log(`Full name: ${fullName.trim()}`);

//3. How do you access the last element of any array?
 
let lastName = names[names.length - 1];

// 4.How do you access the first element of any array?

let firstName = names[0];

// 5.Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
 
let name = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];    
let namelenghts = [];

 

 //6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.

 for (let i = 0; i < names.length; i++) {
  namelenghts.push(names[i].length);


let sum = 0; 
 
for (let i = 0; i < namelenghts.length; i++) 
  sum += namelenghts[i]; 
 }

console.log(sum); 

//7.Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').

function repeatWord(word, n) {
  let result = '';
  for (let i = 0; i < n; i++) {
    result += word;
  }
  return result;
}
console.log(repeatWord('Hello', 3));

//8.Write a function that takes two parameters, firstName and lastName, and returns a full name. 
 //The full name should be the first and the last name separated by a space.


 function getFullName(firstName, lastName) {
  return firstName + " " + lastName;
}

console.log("Abdelkrim","Mrabouli");

//9.Write a function that takes an array of numbers and 
//returns true if the sum of all the numbers in the array is greater than 100.

function sumGreaterThan100(numbers) {
  let sum =0;

for (let i = 0; i < numbers.length; i++){
  sum += numbers[i]
}
return sum > 100
}
 console.log(sumGreaterThan100([101, 200, 300, 400, 500]));
  
 //10.Write a function that takes an array of numbers and returns the average of all the elements in the array.

  function calculateAverage(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
  }
  console.log(calculateAverage([1, 2, 3, 4, 5]));

  //11.Write a function that takes two arrays of numbers and returns true 
  //if the average of the elements in the first array is greater than the average of the elements in the second array.

  function averageCompare(array1, array2) {
    let sum1 = 0;
    let sum2 = 0;
    
    for (let i = 0; i < array1.length; i++) {
      sum1 += array1[i];
    }
    
    for (let i = 0; i < array2.length; i++) {
      sum2 += array2[i];
    }
    
    let average1 = sum1 / array1.length;
    let average2 = sum2 / array2.length;
    
    return average1 > average2;
  }
  console.log(averageCompare([7, 8, 9], [1, 2, 3])); 

  //12 . Write a function called willBuyDrink that takes a boolean isHotOutside, and a number 
   //  moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50

   function willBuyDrink(isHotOutside,moneyInPocket) {
     
      return isHotOutside && moneyInPocket > 10.50;

   }
    console.log(willBuyDrink(true, 12.00)); 

    // 13. Create a function of your own that solves a problem. 
       //In comments, write what the function does and why you created it.
    //
     // write a fuction called willsurfeInTheBeach that takes a boolean 
     //  watertemperature , And returns true if it is watertemperture is greater than 60 degree.

     function willSurfInTheBeach(waterTemperature) {
      return waterTemperature > 60;
    }
      console.log(willSurfInTheBeach(65));