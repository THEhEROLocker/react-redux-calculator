import { DIGIT_PRESSED, OPERATION_PRESSED, CLEAR } from '../constants'
import evaluateSolution from './evaluateSolution'

const initialState = {
    inputHistory: [],
    lastOperation: "",
    solutionDisplayValue: "0"
};

// This function mutates the copy of the old state. So there 
// cannot be any side effects to doing this
function parseNewDigit(oldState, number) {
    let lastTyped = parseInt(oldState.inputHistory[oldState.inputHistory.length - 1])
    if (isNaN(lastTyped) !== true) {
        oldState.inputHistory[oldState.inputHistory.length - 1] += number
    }
    else {
        oldState.inputHistory.push(number);
    }
    oldState.solutionDisplayValue = oldState.inputHistory[oldState.inputHistory.length - 1]
    return oldState
}

function parseNewOperation(oldState, operation) {
    if (oldState.lastOperation === "") {
        oldState.inputHistory.push(operation);
        oldState.lastOperation = operation;
        return oldState;
    }
    else if (operation === '='){
        oldState.solutionDisplayValue = evaluateSolution(...oldState.inputHistory);
        return oldState;
    }
    else if (operation === "+") {
        
    }
    else if(operation === '-'){

    }
    else if(operation === 'x'){
        
    }
    else if(operation === '÷'){
        
    }
}

export default function SolutionReducer(state = initialState, action) {
    var newState
    switch (action.type) {
        case DIGIT_PRESSED:
            newState = JSON.parse(JSON.stringify(state));
            newState = parseNewDigit(newState, action.event)
            return newState;
        case OPERATION_PRESSED:
            newState = JSON.parse(JSON.stringify(state));
            newState = parseNewOperation(newState,action.event);
            return newState;
        case CLEAR:
            return initialState;
        default:
            return state;
    }
}