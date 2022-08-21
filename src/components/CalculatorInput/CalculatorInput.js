
import { Text, View } from "react-native"
import { toDisplayFormat } from "../../utils/helpers"
import styles from "./styles"

const CalculatorInput = ({
    containerStyle,
    contentStyle,
    input,
}) => {
    return (
        <View style={{...containerStyle}}>
            <Text 
                numberOfLines={1}
                adjustsFontSizeToFit
                style={{...styles.input, ...contentStyle}}>
                    {toDisplayFormat(input)}
            </Text>
        </View>
    );
};

export default CalculatorInput;