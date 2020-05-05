
import { checkCardNumber } from './checkCardNumber.js';

document.querySelector('.checkButton').addEventListener('click', () => {
    const resultMessage = document.querySelector('.message');
    document.querySelector('.result').classList.add('show');
    let output = '';

    try {
        output = checkCardNumber(document.querySelector('input').value);
    } catch (e) {
        output = e.message;
    }

    resultMessage.textContent = output;
});