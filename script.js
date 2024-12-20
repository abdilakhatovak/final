var display = document.querySelector('.display'); 
var buttons = document.querySelectorAll('.buttons button'); 

var currentInput = ''; 
var result = 0; 


buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        var value = this.textContent;

        if (value === 'C') {
            
            currentInput = '';
            result = 0;
            display.textContent = '0';
        } else if (value === '=') {
            
            if (currentInput.includes('/0')) {
               
                result = 0;
            } else {
                try {
                    result = eval(currentInput); 
                } catch {
                    result = 0; 
                }
            }
            display.textContent = result; 
            currentInput = ''; 
        } else {
            
            currentInput += value;
            display.textContent = currentInput; 
        }
    });
});
