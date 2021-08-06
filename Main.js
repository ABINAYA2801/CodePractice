var userStr = "";
var finalValue = 0;
let numArr;
let OpArr = [];

// Dimension newD = new Dimension(480,620);
// driver.manage().window().setSize(newD);

// getting input from users
function liveScreen(inputStr){
    let exp;
    if(inputStr == '1/x'){
        exp = this.divide(1,this.userStr);
        displayResult(exp);
    }
    else if(inputStr == '²√'){
        exp = Math.sqrt(this.userStr);
        displayResult(exp);
    }
    else if(inputStr == 'x²'){
        exp = Math.pow(this.userStr,2);
        displayResult(exp);
    }
    else{
        this.userStr += inputStr;
        if(this.userStr[0] != this.userStr.match(/[0-9]/)){
            displayResult("");
            this.userStr = this.userStr.substring(1);
        }
        else{
            displayResult(this.userStr);
        }
    }
};

// function to display output as the user enters
function displayResult(strUser){
    document.getElementById("displayResult").innerHTML = strUser;
};

// function to perform the arithematic operations
function calculateUserInput(){
    numArr = this.userStr.split(/[+*%√ \/ -]/);
    for(let i = 0; i < this.userStr.length; i++){
        if(this.userStr[i].match(/[+*%√ \/ -]/)){
            OpArr.push(this.userStr[i]);
        }
    }
    for(let i = 0; i < numArr.length; i++){
        let num1 = parseFloat(numArr[i]);
        let num2 = parseFloat(numArr[i+1]);
        switch (OpArr[i]) {
            case "+":
                finalValue = this.add(num1, num2);
                swapValues(i);
                break;
            case "-":
                finalValue = this.sub(num1, num2);
                swapValues(i);
                break;
            case "*":
                finalValue = this.mul(num1, num2);
                swapValues(i);
                break;
            case "/":
                finalValue = this.divide(num1, num2);
                swapValues(i);
                break;
            case "%":
                finalValue = this.mul(this.divide(num1,100),num2);
                swapValues(i);
                break;
        }
    }
    
    this.userStr = finalValue.toString();
    displayResult(finalValue);
    
    
    OpArr = [];
}

function add(x,y){
    z = x + y;
    return z;
}
function sub(x,y){
    z = x - y;
    return z;
}
function mul(x,y){
    z = x * y;
    return z;
}
function divide(x,y){
    z = x / y;
    return z;
}
function swapValues(i){
    numArr[i] = 0;
    numArr[i+1] = finalValue;
    return numArr;
}


function cleanStorage(){
    this.numArr;
    this.OpArr = [];
    this.userStr = "";
    displayResult("");
};

function cleanEquation(){
    let tempArr = this.userStr.substring(0, this.userStr.length - 1);
    document.getElementById("displayResult").innerHTML = tempArr;
    this.userStr =  tempArr;
}
