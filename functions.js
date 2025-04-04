
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
    return Math.round(num1/num2 * 100)/100;
}

function pemdas(s){
    if(s.search(/\*/) != -1){
        return(retResult(s.search(/\*/), "m", s));
    }else if(s.search(/\//) != -1){
        return(retResult(s.search(/\//), "d", s));
    }else if(s.search(/\+/) != -1){
        return(retResult(s.search(/\+/), "a", s));
    }else if(s.search(/\-/) != -1){
        return(retResult(s.search(/\-/), "s", s));
    }
}
function retResult(i, mode, s){// m *, a + , s -, d /
    let l = i - 1, r = i + 1 
    while (l > 0 && !/[\+\-\*\/]/.test(s[l])){//find start of left number
        l -= 1;
    }
    while (r < s.length && !/[\+\-\*\/]/.test(s[r])){//find end of right number
        r += 1;
    }
    switch(mode){
        case "m":
            return s.slice(0, l) + multiply(Number(s.slice(l,i)), Number(s.slice(i+1, r))) + s.slice(r);
        case "d":
            return s.slice(0, l) + divide(Number(s.slice(l, i)), Number(s.slice(i+1, r))) + s.slice(r);
        case "a":
            return s.slice(0, l) + add(Number(s.slice(l, i)), Number(s.slice(i+1,r))) + s.slice(r);
        case "s":
            return s.slice(0, l) + subtract(Number(s.slice(l,i)), Number(s.slice(i+1,r))) + s.slice(r);
    }
}

export {add, subtract, multiply, divide, pemdas}