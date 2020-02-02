
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
    console.log('this is a function')
}
//call
fun();

//Think of it as naming a dog. And then calling for the dog to come.

/*Let's create a function that takes in a name and then says 'hello' followed by your name.
for example, if your name is Anmaree, it should return hello Anmaree. we will make a prompt, and then turn the prompt into a variable (because we don't yet know the person's name)
*/
function greeting(){
    var name = prompt ('What is your name?');
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
    console.log(result)
}
sumNumbers('yes','no') //this showed in the console as yesno
//be sure to add the quotes around strings. no quotes around numbers unless you want them to appear as a number when combined with a string.

function sumNumbers(num1, num2){
    var result = num1 + num2;
    console.log(result)
}
sumNumbers(10,10)

//see the function on line 55. Here is a better way to write it. This is cleaner code.


function greeting(yourName){
    
    var result = "Hello" + ' ' + yourName; //this is called string concatenation
    console.log(result)
}
var name = prompt ('What is your name?');
greeting(name)

//when we called the function greeting, it took in "name" as input, which is the variable just above. and the variable of name is whatever the answer is to the question asked with the prompt.

//While Loops

var num = 0
while (num < 100) {  //it looks at this part of the code and asks if the number is less than 100. is this true? it is
num += 1  //it reads this part of the code, and since num = 0 it will increment num by one, according to this code.
console.log (num) //then it reads this part of the code that is just telling it to print the output
}
//now it repeats the process, but since it incremented by one, num is now one, which is still less than 100, so it will perform the next step of incrementing by one. So now num = 2, and so on until it gets to 99. 99 is still less than 100, so it will add one and then console 100. Then num is 100. it will ask is it true that 100 is less than 100? The answer is no, so that becomes false and the instructions of incrementing will no longer apply.

//For Loops do pretty much the same thing.

for(let n = 0; n < 100; n++){
    console.log(n)
}
//it is best to use for loops. they are cleaner and there is a smaller chance of letting the loop run forever, because it always has to have that stopping point. Just don't forget to put semicolons after each parameter in the parens or it won't work.