import {calculate} from './components/calculator.js';
import buttonEvents from './helpers/buttonEvents.js';


const initializeApp = () => {
    // calculate(4,2,'multiply');

    // calculate(4,2, 'divide');
    calculate(44,2, 'subtract');
    // sevenButtonEvent();
    buttonEvents();
};
initializeApp();
