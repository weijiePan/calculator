import {add, multiply, subtract, divide} from "./functions.js"
let numbers = document.getElementById("numbers");
let operators = document.getElementById("operators");
let displayText = document.querySelector("#display p");
displayText.textContent+="aa";


let num1;
let num2;
let operator;

const operatorsRef = ["+","-","*","/"];

numbers.addEventListener("mousedown", (e)=>{
    //has to be integer
    let pressed = e.target.id.at(1);
    if(Number(pressed)){
        console.log(pressed);
    }
   
})
operators.addEventListener("mousedown", (e)=>{
    let nArr = operatorsRef.filter((o) => o == e.target.id);
    if(nArr.length != 0){
        console.log(e.target.id);
    }
})
function operate(num1, num2, operator){
    switch(operator){
        case "+":
            return add(num1,num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
    }
}