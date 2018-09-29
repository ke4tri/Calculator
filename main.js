

// const calculate = (num1, num2, mathType) => {
//     if(mathType === 'multiply'){
//         num1 * num2;
//     }else if (mathType === 'divide'){
//         num1
//     }
// };

const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += stringToPrint;
};

const multiply = (n1, n2) => {
    return n1 * n2;
}
const divide = (n1,n2) => {
    return n1 / n2;
}

//SWITCH 
const calculate = (num1, num2, mathType) => {
    let answer = 0;
    switch(mathType){
        case 'multiply':
        // answer = num1 * num2
        answer = multiply(num1,num2);
        break;
        case 'divide':
        answer = divide(num1, num2);
        break;
        case 'add':
        answer = num1 + num2 
        break;
        case 'subtract':
        answer =  num1-num2
        break;
        default:
        answer = 'nope';
    }
    // return answer;
    printToDom(answer, 'result');
}
calculate(4,2,'multiply');