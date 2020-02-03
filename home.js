
console.log('hello')
// alert('yo');

var b = "nope"
console.log(b)
var aNumber = 29
console.log(aNumber)



//let age = prompt('What is your age?');
//document.getElementById("someText").innerHTML = age;

//Numbers 
var num1 = 10;
//increment num1 by 1
num1 ++;

//Decrement numb1 by 1
num1 --;
console.log(num1);

//Divide /, multiply*, remainder %
//console.log(num1 % 5) //this equals zero, because there is no remainder when dividing 10 by five, and console.log shows 0.
console.log(num1 % 6); 
//the console shows 4 because 6 goes into 10 one time with a remainder of 4.

//Increment/Decrement by 10
num1 += 10
console.log (num1)
//the console showed 20 because num1 is 10 and it incremented by 10

/*Functions
1. create a function
2 call the function
*/

//nothing will happen here until we call the function
/*function fun(){
    alert('this is a function')
}*/
//create
function fun(){
 //   console.log('this is a function')
}
//call
fun();

//Think of it as naming a dog. And then calling for the dog to come.

/*Let's create a function that takes in a name and then says 'hello' followed by your name.
for example, if your name is Anmaree, it should return hello Anmaree. we will make a prompt, and then turn the prompt into a variable (because we don't yet know the person's name)
*/
function greeting(){
//var name = prompt ('What is your name?');
    var result = "Hello" + ' ' + name; //this is called string concatenation
    console.log(result)
}

//greeting()
//the function relies on what is inside the curly brackets to do something. within the brackets are the instructions that tell the function what to do.
//How do arguments work in functions?
//How do we add two numbers together in a function?

function sumNumbers(num1, num2){
    var result = num1 + num2;
    console.log(result)
}
sumNumbers(10,10)
//notice in the parens at the top, the function is expecting two numbers/parameters, so we gave it two. the first time I called the function I put nothing in the parens and NaN is what the console returned. 
//How this works is that we called the function sumNumbers and within the parens are 10 and 10. It looks above at the function called sumNumbers and sees that we have given values to num1 and num2. Within the braces we are giving instructions to add whatever num1 and num2 are. The console.log said num1 + num2, but we can change the console.log to the variable result, and we will still get 20, because console.log is just a command to print/show whatever is in the parens.

//the parameters don't have to be numbers
function sumNumbers(num1, num2){
    var result = num1 + num2;
//    console.log(result)
}
sumNumbers('yes','no') //this showed in the console as yesno
//be sure to add the quotes around strings. no quotes around numbers unless you want them to appear as a number when combined with a string.

function sumNumbers(num1, num2){
    var result = num1 + num2;
//  console.log(result)
}
sumNumbers(10,10)

//see the function on line 55. Here is a better way to write it. This is cleaner code.


function greeting(yourName){
    
    var result = "Hello" + ' ' + yourName; //this is called string concatenation
    console.log(result)
}
//var name = prompt ('What is your name?');
//greeting(name)

//when we called the function greeting, it took in "name" as input, which is the variable just above. and the variable of name is whatever the answer is to the question asked with the prompt.

//While Loops

var num = 0
while (num < 100) {  //it looks at this part of the code and asks if the number is less than 100. is this true? it is
num += 1  //it reads this part of the code, and since num = 0 it will increment num by one, according to this code.
//console.log (num) //then it reads this part of the code that is just telling it to print the output
}
//now it repeats the process, but since it incremented by one, num is now one, which is still less than 100, so it will perform the next step of incrementing by one. So now num = 2, and so on until it gets to 99. 99 is still less than 100, so it will add one and then console 100. Then num is 100. it will ask is it true that 100 is less than 100? The answer is no, so that becomes false and the instructions of incrementing will no longer apply.

//For Loops do pretty much the same thing.

for(let n = 0; n < 100; n++){
 //   console.log(n)
}
//it is best to use for loops. they are cleaner and there is a smaller chance of letting the loop run forever, because it always has to have that stopping point. Just don't forget to put semicolons after each parameter in the parens or it won't work.

//Date Types
/*let yourAge = 29 // number
let yourName = 'Anmaree' //string
let you = {first: 'Anmaree', last: 'Osmond'} //Object (with key value pairs. note the use of :) 
//as a side note, in python the object above is called a dictionary.
let trueth = false //boolean - something is just true or false
let groceries = ['pears', 'bread', 'cucumbers'] //array Don't forget the quotes around each item --Data structure
let random = //undefined;
let nada = null//null;*/

//Strings in Javascript (common methods)

let fruit = 'melon';
// you can add a new line and add another fruit on that line by using \n. just be sure nothing else is between the fruits. see below.
let moreFruit = 'melon\nbanana';
console.log(moreFruit);
//the console showed 
//melon
//banana
let moreFruits = 'melon banana'; //if we take out the \n it will show the fruits on the same line
console.log (moreFruits)
//console showed melon banana

//so the \n is called new line functionality.

//we can find out how many characters are in a word with the length functionality
console.log(fruit.length)
//console showed 5 because melon has five letters in it/

//we can also look for things inside of a string
console.log(fruit.indexOf('l'))
//this shows a 2 in the console because l has an index of two because we start counting from 0. m=0, e=1, l=2
console.log(fruit.indexOf('lo'))
//console still shows a two, because l is where the index starts
console.log(fruit.indexOf('q'))
//console here shows -1 because there is no q in the word melon.
//so that is how you can see if something can be found, and what its index is

//we can also use slice to show just certain characters
console.log(fruit.slice(2,4))
//console shows 'lo' because we are telling it to start at index 2 but end before index 4. That means it will show 2 and 3, which is lo. Let's make it say 'lon'
console.log(fruit.slice(2,5))
//we just added the 5 to make the slice end just before 5. So the first param of 2 is including, and the second means upto, but not including. include index to and everything upto but not including five.

//here is the find and replace method. the first param in the parens is what to find, and the second is what to replace it with.
console.log(fruit.replace('on','low'))
//console shows 'mellow'
console.log(fruit.replace('lo',10))
//console shows me10on, so you can replace strings with numbers and vice versa

console.log(fruit.toUpperCase())
//showed MELON
console.log(fruit.toLowerCase())
//this showed melon
console.log(fruit.charAt(4))//this is to find what character is at index 4
//console showed n
console.log(fruit[4]) //this is just another way to do charAt
//console shows n
console.log(fruit[1]) 
//console shows e becasue the fruit is melon. m is 0 and e is 1
console.log(fruit.split('')) //this just tells it to split it into an array by each character
//console shows (5) ["m", "e", "l", "o", "n"]
console.log(fruit.split(','))//this tells it to split by comma, but there is no comma in fruit
//console shows ["melon"]

//but the split function can separate a list into an array

let groceries = 'pears, candy, pie, cookies, butter'
console.log(groceries.split(','))
//console showed (5) ["pears", " candy", " pie", " cookies", " butter"]

//soooo
console.log(fruit.split('')) //split by character (note that in python, this means split by comma)
console.log(fruit.split(','))//split by comma

//Arrays
//an array can be created by doing either of these methods:
let fruits = ['apple','orange','pear','blueberry']
//console.log(fruits)
//console shows (4) ["apple", "orange", "pear", "blueberry"]
//fruity = new Array ('apple','orange','pear','blueberry')
//console.log(fruity)
//console shows (4) ["apple", "orange", "pear", "blueberry"]
//the above two methods do the exact same thing, but the top one is easier
//alert (fruits[2])
//this brought up a window that said pear
//alert (fruity[1])
//this brought up a window that said orange
console.log(fruits[3]) //to access value at index 3rd, which means the fourth in the list, since index starts at zero
//console shows blueberry

//we can also change the values, so if we want to replace the orange...
fruits[1] = 'tangerine'
console.log(fruits)
//console shows (4) ["apple", "tangerine", "pear", "blueberry"]
//let's use the fruit array in a for loop
for(let i = 0; i < fruits.length; i++)
//console.log(fruits[i])
/*console shows
apple
home.js:214 tangerine
home.js:214 pear
home.js:214 blueberry
*/
console.log([i]) //without the fruits. in front it shows
/*[0]
home.js:221 [1]
home.js:221 [2]
home.js:221 [3]
*/

//Array common methods

console.log (fruits.toString())
//apple,tangerine,pear,blueberry

console.log ('to string', fruits.toString()) //console log can have multiple arguments
//shows to string apple,tangerine,pear,blueberry

console.log (fruits.join('-')) //method to join
//shows apple-tangerine-pear-blueberry

console.log (fruits.join('***')) //method to join
//shows apple***tangerine***pear***blueberry
//so you can put anything in between the items of an array using the join method

//the pop method, "pops" the last item off the list and returns it to you.
console.log (fruits, fruits.pop(), fruits) //removes last item
//showed (3) ["apple", "tangerine", "pear"] "blueberry" (3) ["apple", "tangerine", "pear"]

//you can add an item to the end of the array by using the push method
console.log (fruits.push('raspberries'), fruits) //appends
//shows (4) ["apple", "tangerine", "pear", "raspberries"]
//below is another way to add an item, we can put it in a specific spot in the index, but if we don't know how long the list of items in the index is, then we can use fruits.length
fruits[fruits.length] = 'new fruit' //same as push
console.log(fruits)
//shows (5) ["apple", "tangerine", "pear", "raspberries", "new fruit"]

//since we know there are five fruits on the list (but an index of 4), we know we can just add one to index 5
fruits[5] = 'pineapple'
console.log(fruits)
//shows (6) ["apple", "tangerine", "pear", "raspberries", "new fruit", "pineapple"]

//the opposite of pop (removing and returning the last item) is shift. it will remove the first item.
console.log(fruits, fruits.shift(), fruits) //here we are asking the console to pring the list, then the removed item, and then the revised list/array.
//list showed (5) ["tangerine", "pear", "raspberries", "new fruit", "pineapple"] "apple" (5) ["tangerine", "pear", "raspberries", "new fruit", "pineapple"] ---so it removed the first item of apple
//so shift removes the first element from an array, but it is best NOT TO USE SHIFT if you can avoid it
//You can add an element to the beginning of an array by using the unshift method.
console.log(fruits.unshift('kiwi'), fruits) //add first element to an array fruits.shift removes first item from array
//showed 6 (6) ["kiwi", "tangerine", "pear", "raspberries", "new fruit", "pineapple"]

//Combining Arrays
//we can use "concat" to combine arrays by creating a new variable for the combined array
let vegetables = ['spinach', 'carrots', 'kale']
let allGroceries = fruits.concat(vegetables) //combine arrays
console.log(allGroceries)
//shows (9) ["kiwi", "tangerine", "pear", "raspberries", "new fruit", "pineapple", "spinach", "carrots", "kale"]
console.log(allGroceries.slice(2,7))
//shows (5) ["pear", "raspberries", "new fruit", "pineapple", "spinach"]
console.log(allGroceries.slice(4,9))
//shows (5) ["new fruit", "pineapple", "spinach", "carrots", "kale"]
console.log (allGroceries.reverse()); //reverse an array
//shows (9) ["kale", "carrots", "spinach", "pineapple", "new fruit", "raspberries", "pear", "tangerine", "kiwi"]
console.log (allGroceries.sort()) //sorts alphabetically
//shows(9) ["carrots", "kale", "kiwi", "new fruit", "pear", "pineapple", "raspberries", "spinach", "tangerine"]

//we need to sort numbers differently because numbers that start with the same first digit will be placed together instead of inascending or descending order. See the example below.
let someNumbers = [3,5,12,0,4,78,90,43,56]
console.log(someNumbers.sort())
//shows (9) [0, 12, 3, 4, 43, 5, 56, 78, 90] 
//this would work fine for single digit numbers

//to sort numbers correctly, we need to pass it a filter, or a simple function.
console.log(someNumbers.sort(function(a ,b) {return a-b})) //sort numbers in ascending order.
//shows (9) [0, 3, 4, 5, 12, 43, 56, 78, 90] this sorted in ascending order.
console.log(someNumbers.sort(function(a ,b) {return b-a})) //sort numbers in descending order.
//shows (9) [90, 78, 56, 43, 12, 5, 4, 3, 0]




//creating empty arrays will be a very important thing to learn. keep this pattern in mind. It will be very useful

let emptyArray = new Array();
for(let nbr=0; nbr<10; nbr++) {
    emptyArray.push(nbr)
}
console.log(emptyArray)
//shows (10) [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
