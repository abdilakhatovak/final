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
document.addEventListener('keydown', function (event) {
    var key = event.key;

    if (!isNaN(key) || ['+', '-', '*', '/'].includes(key)) {
        currentInput += key;
        display.textContent = currentInput;
    } else if (key === 'Enter') {
        
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
    } else if (key === 'Backspace') {
        
        currentInput = currentInput.slice(0, -1);
        display.textContent = currentInput || '0';
    } else if (key === 'Escape') {
        
        currentInput = '';
        result = 0;
        display.textContent = '0';
    }
});
