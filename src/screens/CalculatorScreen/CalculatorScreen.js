import { useState } from "react";
import { View } from "react-native"
import styles from "./styles";
import CalculatorButton from "../../components/CalculatorButton";
import CalculatorInput from "../../components/CalculatorInput";
import { toFixedString } from "../../utils/helpers";

const CalculatorScreen = () => {
    const [isOperator, setIsOperator] = useState(false);
    const [currentInput, setCurrentInput] = useState('0'); // right operand
    const [previousInput, setPreviousInput] = useState(null); // left operand
    const [previousOperator, setPreviousOperator] = useState(null);
    
    const changeSign = () => {
        // ± sign
        setCurrentInput(prevState => (parseFloat(prevState)*-1).toString());
    };

    const computePercent = () => {
        setCurrentInput(prevState => (parseFloat(prevState)/100).toString());
    };

    const clear = () => {
        if ( currentInput == '0' ) { 
            // clear AC
            setCurrentInput('0');
            setIsOperator(false);
            setPreviousInput(null);
            setPreviousOperator(null);
        } else { 
            // clear C
            setCurrentInput('0');
        }
    };

    const pushInput = (newInput) => {
        console.log(currentInput)
        if ( isOperator ) {
            // if the last input is an operator, reset the CalculatorInput with newInput
            setIsOperator(false);
            setCurrentInput(newInput);
            return 
        }
        currentInput == '0' ? setCurrentInput(newInput) : setCurrentInput(prevstate => toFixedString(prevstate.concat(newInput)))
    };

    const pushDecimal = () => {
        let hasDecimal = currentInput.indexOf(".") != -1;
        if ( !hasDecimal ) {
            setCurrentInput(prevstate => prevstate.concat('.'));
            setIsOperator(false);
        }
    };
    
    const pushOperation = (operation) => {
        const isOperationEqual = operation == '=';
        if ( previousInput == null ) {
            if ( !isOperationEqual ) {
                setPreviousInput(currentInput);
                setPreviousOperator(operation);
            }
        } else {
            let result = toFixedString(calculateResult());
            console.log(result)
            if ( isOperationEqual ) {
                setPreviousInput(null);
                setPreviousOperator(null);
            } else {
                setPreviousInput(result);
                setPreviousOperator(operation);
            }
            setCurrentInput(result);
        }
        setIsOperator(true);
    };

    const calculateResult = () => {
        switch(previousOperator) {
            case '+': 
                return parseFloat(previousInput) + parseFloat(currentInput);
            case '÷': 
                return parseFloat(previousInput) / parseFloat(currentInput);
            case '-': 
                return parseFloat(previousInput) - parseFloat(currentInput);
            case 'x': 
                return parseFloat(previousInput) * parseFloat(currentInput);
            default: 
                return;
        }
    };
    return (
        <View style={styles.container}>
            <CalculatorInput containerStyle={styles.input} input={currentInput}/>
            <View style={styles.keyboardContainer}>
                <View style={styles.keyboardRow}>
                    <CalculatorButton onPress={clear} style={styles.buttonClearRight}>{currentInput == '0' ? 'AC' : 'C'}</CalculatorButton>
                    <CalculatorButton onPress={changeSign} style={styles.buttonClear}>±</CalculatorButton>
                    <CalculatorButton onPress={computePercent} style={styles.buttonClear}>%</CalculatorButton>
                    <CalculatorButton onPress={() => {pushOperation('÷')}} style={styles.buttonOperation}>÷</CalculatorButton>
                </View>
                <View style={styles.keyboardRow}>
                    <CalculatorButton onPress={() => {pushInput('7')}} style={styles.buttonInputLeft}>7</CalculatorButton>
                    <CalculatorButton onPress={() => {pushInput('8')}} style={styles.buttonInput}>8</CalculatorButton>
                    <CalculatorButton onPress={() => {pushInput('9')}} style={styles.buttonInput}>9</CalculatorButton>
                    <CalculatorButton onPress={() => {pushOperation('x')}} style={styles.buttonOperation}>X</CalculatorButton>
                </View>
                <View style={styles.keyboardRow}>
                    <CalculatorButton onPress={() => {pushInput('4')}} style={styles.buttonInputLeft}>4</CalculatorButton>
                    <CalculatorButton onPress={() => {pushInput('5')}} style={styles.buttonInput}>5</CalculatorButton>
                    <CalculatorButton onPress={() => {pushInput('6')}} style={styles.buttonInput}>6</CalculatorButton>
                    <CalculatorButton onPress={() => {pushOperation('-')}} style={styles.buttonOperation}>-</CalculatorButton>
                </View>
                <View style={styles.keyboardRow}>
                    <CalculatorButton onPress={() => {pushInput('1')}} style={styles.buttonInputLeft}>1</CalculatorButton>
                    <CalculatorButton onPress={() => {pushInput('2')}} style={styles.buttonInput}>2</CalculatorButton>
                    <CalculatorButton onPress={() => {pushInput('3')}} style={styles.buttonInput}>3</CalculatorButton>
                    <CalculatorButton onPress={() => {pushOperation('+')}} style={styles.buttonOperation}>+</CalculatorButton>
                </View>
                <View style={styles.keyboardRowBottom}>
                    <CalculatorButton onPress={() => {pushInput('0')}} style={styles.button0}>0</CalculatorButton>
                    <CalculatorButton onPress={pushDecimal} style={styles.buttonInput}>.</CalculatorButton>
                    <CalculatorButton onPress={() => {pushOperation('=')}} style={styles.buttonOperation}>=</CalculatorButton>
                </View>
            </View>
        </View>
    );
};

export default CalculatorScreen;