//1.create 4 functions:add, subtract, divide, multiply
function add(num1, num2){
    return num1 + num2;
}
function subtract(num1, num2){
    return num1 - num2;
}
function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    let result = num1/num2;
    //rounds decimal number if decimal place is more than 2
    if(result * 100 % 1 !== 0){
        return Math.trunc(result * 100)/100;
    }else{
        return result;
    }
}

function multiply(num1, num2){
    return num1 * num2;

}
console.log(add(1,2))
console.log(subtract(1,2))
console.log(divide(1,2))
console.log(multiply(1,2))