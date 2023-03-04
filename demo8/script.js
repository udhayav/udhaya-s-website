
var userInput = document.getElementById("user_input");
console.log(userInput);
var expression = "";

function enter(num){
  expression += num;
  userInput.value = expression;
}
function equal(){
  userInput.value = eval(expression); 
 expression="";  
}
function deleted(){
  expression = "";
  userInput.value = expression;
}
function erase(){
  var length = expression.length;
  expression = expression.slice(0,length -1);
  userInput.value = expression;
}
