

/**
 * Part I: use any of the looping methods discussed in class
 *
 * 1. for loop,
 * 2. Array.forEach,
 * 3. custom forEach
 *
 * to complete the following problems
 */

// 0. write your own forEach() that takes two arguments: an array, and a callback

function forEach(array, callback){
    for( var i = 0; i < array.length; i++){
      callback(array[i]);
    }
}

// testing your code with console.assert
var total = 1;
forEach([1, 2, 3, 4], function(a){ total *= a; });
// and finally assert; if this fails, the program stops
console.assert(total === 24);


// 1. calculate the sum of numbers (returns the sum (A NUMBER))
var mySum = 0;
function sum(){
    // parse arguments into an array
    var args = [].slice.call(arguments);
    for(var i = 0; i < args.length; i++)
    mySum = mySum +args[i];
  }

    //1. make an array of the arguments
            //args = [arguments]
    //

    // .. do something with each element of args
    // YOUR CODE HERE
}

console.assert( sum(1, 2, 3, 4, 5) === 15 )

// 2. calculate the average of numbers (returns the average (A NUMBER))

var total = 0;
var answer = 0;
function average(){
    // parse arguments into an array
    var args = [].slice.call(arguments);
      for(var i = 0; i < args.length; i++){
        total = total +args[i];
      }
      answer = (total /args.length);
    // .. do something with each element of args
    // YOUR CODE HERE
};

console.assert( average(2, 4, 6, 8) === 5 )

// 3. find the largest number of the inputs (returns the largest input (A NUMBER))

function largest(){
    // parse arguments into an array
    var args = [].slice.call(arguments);


    // .. do something with each element of args
    // YOUR CODE HERE
}

console.assert( largest(2, 4, 6, 8) === 8 )

// 4. find the longest string of the inputs (returns the longest input (A STRING))

var text = "";
function longest(){
    // parse arguments into an array
    var args = [].slice.call(arguments);

    // .. do something with each element of args
    // YOUR CODE HERE
    args.forEach(function(newText){
      if(text.length < newText.length){
      text = newText;
    }
  })
};

 console.assert( longest("this", "is", "a", "awesome", "function") === "function" );

/**
 * PART II
 *
 * For each of the following Array methods,
 *
 * 1. use them in an example
 * 2. write a console.assert to test them
 */

// .sort()
  var cats =["black","brown","tabby", "house","fat"]
  cats.sort();
// .concat()
  var cats =["black","brown","tabby", "house","fat"];
  var dinosours =[" raptor", "T-rex"];
  var combined = cats.concat(dinosours);
// .indexOf()
  var specialArray = [1, 3, 5];
  specialArray.indexOf(3);
// .split()
  var specialString ="hello";
  var newString = specialString.split("");
  console.log(newString);
// .join()
  var specialArray =["h","e","l","l","o"];
  var specialJoin = specialArray.join('');
  console.log(specialJoin);
// .pop()
  var specialArray =["h","e","l","l","o"];
  var poppy = specialArray.pop();
  console.log(poppy);
  console.log(specialArray);
// .push()
  var specialArray =["hello","goodbye"];
  var expantionPack = specialArray.push("man", "dog");
  console.log(specialArray);
  console.log(expantionPack);
// .slice()
  var colors = ['purle', 'banana', 'cats', 'red', 'Mango'];
  var selectColors = colors.slice(2, 4);
  console.log(selectColors);
// .splice()
  var colors = ['purle', 'banana', 'cats', 'red', 'Mango'];
  var selectColors = colors.splice(2, 4);
  console.log(selectColors);
// .shift()
  var colors = ['purle', 'banana', 'cats', 'red', 'Mango'];
  var shiftColors = colors.shift();
  console.log(shiftColors);
// .unshift()
  var colors = ['purle', 'banana', 'cats', 'red', 'Mango'];
  var shiftColors = colors.unshift();
  console.log(shiftColors);
// .filter()
  var colors = ['purle', 'banana', 'cats', 'red', 'Mango'];
  var shiftColors = colors.unshift(0);
  console.log(shiftColors);
// .map()
  var collectiveNumber = [1, 2, 5, 10];
  var squareRoot = collectiveNumber.map(Math.sqrt);
  console.log(squareRoot);
