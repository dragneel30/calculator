import { StyleSheet } from "react-native";
import { colors } from "../../themes/colors";

const styles = StyleSheet.create({
    container: {
      flex: 1,  
    },
    keyboardContainer: {
        flex: 0.8, 
        flexDirection: 'column', 
        backgroundColor: colors.background
    },
    keyboardRow: {
        flex: 1, 
        flexDirection: 'row', 
        marginBottom: 1
    },
    keyboardRowBottom: {
        flex: 1, 
        flexDirection: 'row', 
    },
    buttonOperation: {
        backgroundColor: colors.primary,
        marginLeft: 1
    },
    buttonInputLeft: {
        backgroundColor: colors.secondary
    },
    buttonInput: {
        backgroundColor: colors.secondary,
        marginLeft: 1
    },
    buttonClearRight: {
        backgroundColor: colors.tertiary
    },
    buttonClear: {
        backgroundColor: colors.tertiary,
        marginLeft: 1
    },
    button0: {
        backgroundColor: colors.secondary,
        flex: 2
    },  
    input: {
        flex: 0.2,
        backgroundColor: '#1c191c', 
        alignItems: 'center', 
        justifyContent: 'center'
    }
});

export default styles;