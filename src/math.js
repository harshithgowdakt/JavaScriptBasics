// math static function exmaples


// cool things in JS

console.log(Math.floor(null)); //0
console.log(Math.floor(undefined)); // NaN
console.log(Math.floor(true)); //1
console.log(Math.floor(false)); //0
console.log(Math.floor("1.2")) //1
console.log(Math.floor("someRandomString")); //NaN
console.log(Math.floor(-0)); //-0


/*
  The Math.floor() function returns the largest integer less than or equal to a given number
*/
console.log(Math.floor(5.95));//5
console.log(Math.floor(5.05));//5


/*
  The Math.ceil() function always rounds a number up to the next largest integer.

  Note: Math.ceil(null) / Math.flooreturns integer 0 and does not give a NaN error.
 */

console.log(Math.ceil(.95));//1
console.log(Math.ceil(4));//4
console.log(Math.ceil(7.004));//8


/**
 The Math.random() function returns a floating-point, pseudo-random number in 
 the range 0 to less than 1 (inclusive of 0, but not 1) with approximately uniform 
 distribution over that range — which you can then scale to your desired range. The 
 implementation selects the initial seed to the random number generation algorithm; 
 it cannot be chosen or reset by the user.
 */
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
console.log(getRandomInt(3));//0, 1 or 2
console.log(getRandomInt(1));//0
console.log(Math.random());//a number from 0 to <1


// Math.max returns max number

console.log(Math.max(1, 3, 2)); // 3
console.log(Math.max(-1, -3, -2)); // -1

const arr = [1, 3, 2, 10];
console.log(Math.max(...arr)); // 10

function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}
console.log(getMaxOfArray([1, 2, 3, 4, 5, 6, 7])) //7


// The Math.round() function returns the value of a number rounded to the nearest integer.
console.log(Math.round(0.9)); // 1
console.log(Math.round(5.4),); // 5


//Math.sqrt 
console.log(Math.sqrt("16")) //4