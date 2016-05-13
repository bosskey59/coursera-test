// *******************************
// START HERE IF YOU WANT A MORE CHALLENGING STARTING POINT FOR THIS ASSIGNMENT
// *******************************
//
// Module 4 Assignment Instructions.
//
// The idea of this assignment is to take an existing array of names
// and then output either Hello 'Name' or Good Bye 'Name' to the console.
// The program should say "Hello" to any name except names that start with a "J"
// or "j", otherwise, the program should say "Good Bye". So, the final output
// on the console should look like this:
/*
Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim

WARNING!!! WARNING!!!
The code does NOT currently work! It is YOUR job to make it work
as described in the requirements and the steps in order to complete this
assignment.
WARNING!!! WARNING!!!

*/

// STEP 1:
// Wrap the entire contents of script.js inside of an IIFE
// See Lecture 52, part 2
// (Note, Step 2 will be done in the SpeakHello.js file.)

(function (){

  
  var words = ["", "Poop"];
  var wordA = words[0].toLowerCase();
  var wordB = words[1].toLowerCase()
  var arrayA = letterCount(wordA);
  var arrayB = letterCount(wordB);
  
  // console.log(arrayA);
  // console.log(arrayB);

  // console.log(alaphabet.length);
  // console.log(letterCount_Total.length);

   if (arrayA.toString() === arrayB.toString()){
    console.log("Words are Anagrams!");  
   }
   else{
    console.log("Words are NOT anagrams!");
   }


  function letterCount(string){
  var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var letterCount_Total =[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

    for (var i=0; i<string.length;i++){

      for (var j=0; j<alphabet.length; j++){
        if (alphabet[j] == string[i]){         
          letterCount_Total[j]++;
        }
      }
      // console.log(letterCount_Total);
    }
    return letterCount_Total;
  }






})();


