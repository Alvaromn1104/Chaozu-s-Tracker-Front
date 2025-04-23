import {StyleSheet, Text, ToastAndroid, TouchableOpacity, View} from "react-native";
import {AppColors} from "../../theme/AppThemes";


interface Props {
    text: String,
    onPressFromInterface: () => void,
}

export const ButtonLogin = ({text, onPressFromInterface}: Props) =>{
    return (
        <View style={{alignItems: 'center', justifyContent: 'center', marginBottom: 0}}>
        <TouchableOpacity style={styles.formButton} onPress={() =>onPressFromInterface()} >
            <Text style={styles.formButtonText}>{text}</Text>
        </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    formButton: {
        backgroundColor: AppColors.tertiary,
        opacity: 0.8,
        paddingVertical: 7,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        width: 120
    },
    formButtonText: {
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold',
        paddingVertical: 2
    },
})