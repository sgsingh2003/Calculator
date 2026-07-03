// logic in calculator
//User clicks a number → append to display.
//User clicks an operator → append operator to display.
//User clicks another number → append to display.
//User clicks = → evaluate the expression and update display.
//User clicks C → clear display.

const display = document.getElementById('display');
const buttons = document.querySelectorAll(".btn,.btn-op,.btn-equal");

let expression = ' ';
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        const value = event.target.innerText;

        if(value === '=') {
            try{
                expression = eval(expression) || '0';
                display.value = expression;
            } catch {
                 display.value='Error';
                 expression =' ';
            }
        } else if (value === 'AC'){
            expression=' ';
            display.value = expression;
        } else if (value === 'DEL') {
            expression = expression.slice(0,-1);
            display.value = expression;
        } else {
            expression +=value;
            display.value = expression;
        }

    });
});

