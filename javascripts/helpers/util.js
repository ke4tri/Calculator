
const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += stringToPrint;
};
const monkeyButt = () => {
    console.log('hi');
}

export {printToDom}

// export default{
//     printToDom: printToDom
// }