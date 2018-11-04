import { DIGIT_PRESSED, OPERATION_PRESSED, CLEAR } from '../constants'

export const onDigitPress = (value) => {
    return ({
        type: DIGIT_PRESSED,
        event: value 
    });
}

export const onOperationPress = (value) => {
    return ({
        type: OPERATION_PRESSED,
        event: value 
    });
}

export const onClear = () => {
    return ({
        type: CLEAR 
    });
}