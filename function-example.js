/*
* @Description: This file contains the example of functions in javascript.
*/

export const enterOnlyNumbers = (event) => {
    const valueAllowed = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '8', '9'];
    const keysAllowed = ['Backspace', 'Tab', 'ArrowLeft', 'ArrowRight', 'Tab', 'Enter', 'Escape', 'Delete', 'Shift', 'Control', 'Alt'];
    if (valueAllowed.includes(event.key) || keysAllowed.includes(event.key)) {
        return true;
    } else {
        event.preventDefault();
        return false;
    }
}