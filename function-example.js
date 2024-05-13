export const enterOnlyNumbers = (event) => {
    const valueAllowed = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '8', '9'];
    const keysAllowed = ['Backspace', 'Tab', 'ArrowLeft', 'ArrowRight', 'Tab', 'Enter', 'Escape', 'Delete', 'Shift', 'Control', 'Alt'];
    if (valueAllowed.includes(event.key) || keysAllowed.includes(event.key)) {
        return true;
    } else {
        // adding some lines
        console.log("Cambios inesperados")
        const value = "Soy nuevo"
        console.log("Este es el valor: ", value)
        event.preventDefault();
        return false;
    }
}