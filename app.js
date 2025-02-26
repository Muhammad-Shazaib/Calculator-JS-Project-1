const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');


let inputString = '';


buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.innerText;


        if (value === 'AC') {
            inputString = '';
            display.value = inputString;
        }

        else if (value === 'DEL') {
            inputString = inputString.slice(0, -1);
            display.value = inputString;
        }

        else if (value === '=') {
            try {

                if (inputString.includes('%')) {
                    inputString = inputString.replace(/([0-9]+)%/, '($1/100)');
                }

                inputString = Function('return ' + inputString)();
                display.value = inputString;
            } catch (error) {
                display.value = 'Error';
            }
        }

        else {
            inputString += value;
            display.value = inputString;
        }
    });
});
