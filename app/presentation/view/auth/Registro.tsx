import viewModel from "./ViewModel";
import {useEffect} from "react";
import {ImageBackground, Text, ToastAndroid, TouchableOpacity, View} from "react-native";
import styles from "./StylesLogin";
import {FormCustomInput} from "../../components/auth/FormCustomInput";
import {ButtonLogin} from "../../components/auth/ButtonLogin";
import {PropStackNaviation} from "../../interfaces/StackNav";


export function RegistroScreen({navigation, route}: PropStackNaviation) {
    const{
        email,
        firstName,
        lastName,
        userName,
        password,
        confirmPassword,
        onChangeRegistro,
        register,
        errorMessage,
        success
    } = viewModel.RegistroViewModel();

    useEffect(() => {
        if(errorMessage != ""){
            ToastAndroid.show(errorMessage, ToastAndroid.SHORT)
        }
    }, [errorMessage]);

    useEffect(() => {
        if (success) {
            navigation.navigate('LoginScreen');
        }
    }, [success]);


    return (

        <ImageBackground style={styles.container} source={require("../../../../assets/imagenesFondo/fondoRegistro.png")}>
            <View style={styles.formContainer}>

                <Text style={styles.title}>REGISTRARSE</Text>

                <FormCustomInput
                    titulo={"Correo Electrónico"}
                    keyboardType={"default"}
                    secureTextEntry={false}
                    onPressFormInterface={(text: string) => onChangeRegistro('email', text)}
                />

                <FormCustomInput
                    titulo={"Nombre"}
                    keyboardType={"default"}
                    secureTextEntry={false}
                    onPressFormInterface={(text: string) => onChangeRegistro('firstName', text)}
                />

                <FormCustomInput
                    titulo={"Apellidos"}
                    keyboardType={"default"}
                    secureTextEntry={false}
                    onPressFormInterface={(text: string) => onChangeRegistro('lastName', text)}
                />

                <FormCustomInput
                    titulo={"Nombre de usuario"}
                    keyboardType={"default"}
                    secureTextEntry={false}
                    onPressFormInterface={(text: string) => onChangeRegistro('userName', text)}
                />

                <FormCustomInput
                    titulo={"Contraseña"}
                    keyboardType={"default"}
                    secureTextEntry={false}
                    onPressFormInterface={(text: string) => onChangeRegistro('password', text)}
                />

                <FormCustomInput
                    titulo={"Confirmar Contraseña"}
                    keyboardType={"default"}
                    secureTextEntry={false}
                    onPressFormInterface={(text: string) => onChangeRegistro('confirmPassword', text)}
                />

                <View style={{paddingVertical: 10}}>
                    <ButtonLogin text={"Registrarse"} onPressFromInterface={
                        () => {
                            register()
                        }
                    }
                    />
                </View>

                <View style={{marginTop:10, alignItems: 'center', marginBottom: 25}}>

                    <TouchableOpacity onPress={() =>{
                        navigation.navigate("LoginScreen")
                    }}>
                        <Text style={styles.registroText}>¿Ya tienes una cuenta?, inicia sesión aqui.</Text>
                    </TouchableOpacity>

                </View>

            </View>
        </ImageBackground>

    );
}

export default RegistroScreen;