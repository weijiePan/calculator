import {add, multiply, subtract, divide} from "./functions.js"
class calculator{
    constructor(nksId, oksId, displayTextId){
        this.numberKSect = document.getElementById(nksId);
        this.operatorKSect = document.getElementById(oksId);
        this.displayText = document.querySelector(displayTextId);
        this.num1;
        this.num2;
        this.operator;
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
        
    }
}

//initializes calc obj
calc = new calculator()

function registerInput(event){//processes value of buttons clicked
    if(Number(event.target.id.at(1))){
        if(!calc.calc.num1){
            calc.num1 = event.target.id;
            calc.operate();
            
        }else if(!calc.num2){
            calc.num2 = event.target.id;
            calc.operate();
        }
    }else{
        operator = event.target.id;
        
    }
    
}
calc.numberKSect.addEventListener("mousedown", (e)=>{
    //has to be integer
    let pressed = e.target.id.at(1);
    if(Number(pressed)){
        registerInput(e);
    }
   
})
calc.operatorKSect.addEventListener("mousedown", (e)=>{
    let nArr = operatorsRef.filter((o) => o == e.target.id);
    if(nArr.length != 0){
        registerInput(e);
    }
})