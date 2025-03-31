import {add, multiply, subtract, divide} from "./functions.js"
class calculator{
    constructor(nksId, oksId, displayTextId){
        this.calculatorContainer = document.getElementById("calculator-container");
        this.displayText = document.querySelector(displayTextId);
    }
    update(change){
        this.displayText.innerText += change;
    }
    operate(num1, num2, operator){
        //check if num1, operator, and num2 are filled in order to perform calculation
        if(num1 && operator && num2){
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
        
    }
    reset(){
        this.displayText.innerText = "";

    }
}

//initializes calc obj
let calc = new calculator("numbers", "operators", "#display p")
calc.calculatorContainer.addEventListener("mousedown", function(e){
    if(Number(e.target.id.at(1))){//check if a number or operator key is pressed
        calc.update(e.target.id.at(1))
    }else if(/[\+\-\/\*]/.test(e.target.id)){
        calc.update(e.target.id);
    }
})