
import { Text, TouchableOpacity } from "react-native"
import styles from './styles'

const CalculatorButton = ({
    style, 
    children, 
    onPress
}) => {
    return (
        <TouchableOpacity style={{...styles.button, ...style}} onPress={onPress}>
            <Text style={styles.text}>
                {children}
            </Text>
        </TouchableOpacity>
    )

};

export default CalculatorButton;