import {printToDom} from './helpers/util.js';
import {multiply} from './helpers/maths.js'
// object destructuring 

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