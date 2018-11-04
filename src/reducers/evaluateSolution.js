export default function evaluateSolution(number1, operation, number2){
    let num1 = parseInt(number1);
    let num2 = parseInt(number2);

    switch(operation){
        case '+':
            return (num1 + num2).toString();
        case '-':
            return (num1 - num2).toString();
        case 'x':
            return (num1 * num2).toString();
        case '÷':
            return (num1 / num2).toString();
        default:
            return (num1 + num2).toString();
    }
}