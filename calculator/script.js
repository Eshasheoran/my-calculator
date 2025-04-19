let display = document.getElementById('display');

function appendValue(value) {
    if (display.value === '0' && value !== '.') {
        display.value = value;
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    display.value = '0';
}

function calculate() {
    try {
        // Replace × with * and ÷ with / for JavaScript evaluation
        let expression = display.value.replace(/×/g, '*').replace(/÷/g, '/');
        let result = eval(expression);
        
        // Handle division by zero
        if (!isFinite(result)) {
            throw new Error('Division by zero');
        }
        
        // Format the result to avoid floating point issues
        display.value = Number(result.toFixed(8)).toString();
    } catch (error) {
        display.value = 'Error';
        setTimeout(clearDisplay, 1000);
    }
} 