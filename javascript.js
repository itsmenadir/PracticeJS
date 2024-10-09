
function multiply() {
    const num1 = parseFloat(document.getElementById('firstdigit').value);
    const num2 = parseFloat(document.getElementById('seconddigit').value);
   
    document.getElementById('result').innerText = num1 * num2;
    
   
}


function divide() {
    const num1 = parseFloat(document.getElementById('firstdigit').value);
    const num2 = parseFloat(document.getElementById('seconddigit').value);
    
    document.getElementById('result').innerText = num1 / num2;
    
     
}


