// task 1
// celcius to farenheit

// function celToFahrenheit(cel){
//     const fahrenheit = cel * (9 / 5) + 32;
//     return fahrenheit;
// }

// const celcius = celToFahrenheit(37);
// console.log(celcius);

// task 2

// const number = [5, 6, 11, 12, 98, 5, 44, 5, 88, 12];
// const num = 5;
// let count = 0;
// function counting(number){
//     for(let i=0; i<number.length; i++){
//         if(number[i] === num){
//             count = count + 1;
//         }
//     }
//     return count;
// }
// const counte = counting(number)
// console.log(counte);

// task 3

// function vowel(sentence) {
//   let count = 0;
//   let vowels = "aeiou";
//   for (let i = 0; i < sentence.length; i++) {
//     if (vowels.includes(sentence[i])) {
//       count++;
//     }
//   }
//   return count;
// }

// const num = vowel("asdkjcbiawcesdfdsftraaiio");
// console.log(num);


//task 4

// function longest(sentence){
//     let words = sentence.split(" ");
//     let longestWord = '';

//     for(let word of words){
//         if(word.length > longestWord.length){
//             longestWord = word;
//         }
//     }
//     return longestWord;
// }
// console.log(longest("I am learning Programming to become a programmer"));


// task 5
// const rand = Math.round(Math.random()*(20 - 10) + 10);
// console.log(rand); 


// genarate a random number from an array
// const numbers = [44, 55, 48, 98, 75, 66, 11, 12];
// const random = Math.round(Math.random()* numbers.length);
// const randomNumber = numbers[random];

// console.log(randomNumber);



// quiz 
// for (var i = 0; i < 5; i++) {
//     setTimeout(function () {
//    console.log(i);
// }, 100);
// }