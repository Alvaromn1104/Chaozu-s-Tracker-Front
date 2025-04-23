import {KeyboardType, TextInput, View, Image, StyleSheet, Text} from "react-native";
import {AppColors} from "../../theme/AppThemes";

interface Props {
    titulo: string;
    keyboardType: KeyboardType;
    secureTextEntry: boolean;
    onPressFormInterface: (text: string) => void,
}

export const FormCustomInput = ({titulo, keyboardType, secureTextEntry, onPressFormInterface}: Props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.formInputTitle}>{titulo}</Text>
            <View style={styles.formInputContainer}>
                <TextInput
                    style={styles.formInputText}
                    secureTextEntry={secureTextEntry}
                    keyboardType={keyboardType}
                    onChangeText={(text) => onPressFormInterface(text)}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 15,
    },
    formInputTitle: {
        fontSize: 18,
        marginBottom: 2,
        fontWeight: 'bold',
    },
    formInputContainer: {
        backgroundColor: AppColors.tertiary,
        borderRadius: 30,
        height: 30,
        opacity: 0.43,
        padding: 10,
        justifyContent: 'center',
    },
    formInputText: {
        height: 40,
    },
});