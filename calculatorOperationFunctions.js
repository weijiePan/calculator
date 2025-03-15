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
        registerInput(e);
    }
   
})
operators.addEventListener("mousedown", (e)=>{
    let nArr = operatorsRef.filter((o) => o == e.target.id);
    if(nArr.length != 0){
        registerInput(e);
    }
})

function registerInput(event){
    if(Number(event.target.id.at(1))){
        if(!num1){
            num1 = event.target.id;
            moveToOutput();
            
        }else if(!num2){
            num2 = event.target.id;
            moveToOutput();
        }
    }else{
        operator = event.target.id;
        
    }
    
}
function moveToOutput(){

}
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