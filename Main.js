var userStr = "";
var finalValue = 0;
let numArr;
let OpArr = [];

function displayer(inputStr){
    this.userStr += inputStr;
    if(this.userStr[0] != this.userStr.match(/[0-9]/)){
        displayResult("");
        this.userStr = this.userStr.substring(1);
    }
    else{
        displayResult(this.userStr);
    }
};

function displayResult(strUser){
    document.getElementById("displayResult").innerHTML = strUser;
};

function calculateUserInput(){
    numArr = this.userStr.split(/[+*%√ \/ -]/);
    for(let i = 0; i < this.userStr.length; i++){
        if(isNaN(this.userStr[i])){
            OpArr.push(this.userStr[i]);
        }
    }
    for(let i = 0; i < numArr.length; i++){
        let num1 = parseInt(numArr[i]);
        let num2 = parseInt(numArr[i+1]);
        switch (OpArr[i]) {
            case "+":
                finalValue = num1 + num2;
                swapValues(i);
                break;
            case "-":
                finalValue = num1 - num2;
                swapValues(i);
                break;
            case "*":
                finalValue = num1 * num2;
                swapValues(i);
                break;
            case "/":
                finalValue = num1 / num2;
                swapValues(i);
                break;
            case "p":
                finalValue = Math.pow(num1 , num2);
                swapValues(i);
                break;
            case "%":
                finalValue = num1 % num2;
                swapValues(i);
                break;
            case "√":
                finalValue = Math.sqrt(num1);
                swapValues(i);
                break;
            case "√":
                finalValue = (num1 * 100) / 10000;
                swapValues(i);
                break;
        }
    }

    this.userStr = finalValue;
    displayResult(this.userStr);
    OpArr = [];
    function swapValues(i){
        numArr[i] = 0;
        numArr[i+1] = finalValue;
        return numArr;
    }
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
