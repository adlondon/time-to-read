

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

  }

}
// testing your code with console.assert
var total = 1;
forEach([1, 2, 3, 4], function(a){ total *= a; });
// and finally assert; if this fails, the program stops
console.assert(total === 24);

// 1. calculate the sum of numbers (returns the sum (A NUMBER))

function sum(){
    // parse arguments into an array
    var args = [].slice.call(arguments);
    var total = 0;
    // .. do something with each element of args
    for (var i = 0; i < args.length; i++) {
      total += args [i];
    }
    return total;
}
console.assert( sum(1, 2, 3, 4, 5) === 15 );

// 2. calculate the average of numbers (returns the average (A NUMBER))

function average(){
    // parse arguments into an array
    var args = [].slice.call(arguments);
    var total = 0;

    // .. do something with each element of args
    for (var i = 0; i < args.length; i++) {
      total += args [i];
    }
    var avg = total / args.length;
    return avg;
  }
console.assert( average(2, 4, 6, 8) === 5 )

// 3. find the largest number of the inputs (returns the largest input (A NUMBER))

function largest(){
    // parse arguments into an array
    var args = [].slice.call(arguments);
    var longest = 0;
    for (var i = 0; i < args.length; i++) {
        if (args[i] > longest){
          longest = args[i];
        }
    }
    return longest;
}

console.assert( largest(2, 4, 6, 8) === 8 )


// 4. find the longest string of the inputs (returns the longest input (A STRING))

function longest(){
    // parse arguments into an array
    var args = [].slice.call(arguments);
    var longest = 0;
    var output = "";

    for (var i = 0; i < args.length; i++){
      if (args[i].length > longest) {
        longest = args[i].length;
        output = args[i];
      }
    }
      return output;
}

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
function sorter(words){
  var args = [].slice.call(arguments);

 return args.sort();
}
 console.log(sorter(2,3,4,2,1,5))
 console.assert(sorter(2,3,1,4,5).lastIndexOf(5) === 4);

// .concat()
var word = "hello ";
console.assert(word.concat("my name is Andrew") === "hello my name is Andrew")

// .indexOf()
var sentence = "choosy moms choose jif";
console.assert(sentence.indexOf("moms"))
// .split()
var sentence = "choosy moms choose jif";

var newString = sentence.split(" ");
console.assert(newString === ["choosy", "moms", "choose", "jif"])

// .join()

// .pop()

// .push()

// .slice()

// .splice()

// .shift()

// .unshift()

// .filter()

// .map()
