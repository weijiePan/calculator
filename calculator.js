import {add, multiply, subtract, divide, pemdas} from "./functions.js"
class calculator{
    constructor(nksId, oksId, displayTextId){
        this.calculatorContainer = document.getElementById("calculator-container");
        this.displayText = document.querySelector(displayTextId);
        this.canEnterOperator=false;
    }
    update(change){
        this.displayText.innerText += change;
    }
    evaluate() {
        //checks calculation parts form valid expression
        if(Number(this.displayText.innerText.at(this.displayText.innerText.length - 1))){
            let result = pemdas(this.displayText.innerText);
            this.displayText.innerText = result? result:this.displayText.innerText;
        }else{
            alert("invalid input")
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
        calc.canEnterOperator = true;
    }else if(/[\+\-\/\*]/.test(e.target.id)){
        if(calc.canEnterOperator){//checks that operators are only between numbers
            calc.update(e.target.id);
            calc.canEnterOperator = false;
        }else{
            alert("invalid");
        }
        
    }else if(/=/.test(e.target.id)){
        calc.evaluate();
    }
})