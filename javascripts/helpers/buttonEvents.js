const sevenButton = document.getElementById('sevenButton');

const sevenButtonEvent = () => {
    sevenButton.addEventListener('click', () => {
        console.log('you clicked 7');
    })
};

const attachEvents = () => {
    sevenButtonEvent();
}

// export {sevenButtonEvent};
export default attachEvents;