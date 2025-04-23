import {PropStackNaviation} from "../../interfaces/StackNav";
import viewModel from "./ViewModel";
import {useEffect} from "react";
import {ImageBackground, Text, ToastAndroid, TouchableOpacity, View} from "react-native";
import styles from "./StylesLogin";
import {FormCustomInput} from "../../components/auth/FormCustomInput";
import {ButtonLogin} from "../../components/auth/ButtonLogin";



export function LoginScreen({navigation, route}: PropStackNaviation) {

    const {
        email,
        password,
        onChangeLogin,
        login,
        errorMessage,
        user
    } = viewModel.LoginViewModel();

    useEffect(() => {
        if(errorMessage != "")
            ToastAndroid.show(errorMessage, ToastAndroid.SHORT);
    }, [errorMessage]);

    useEffect(() => {
        if(user && user?.token) {
            navigation.navigate("CategoriasScreen")
        }
    }, [user]);

    return (
        <ImageBackground
            style={styles.container}
            source={require('../../../../assets/imagenesFondo/fondoLogin.png')}
        >
            <View style={styles.formContainer}>

                <Text style={styles.title}>INICIAR SESION</Text>

                <FormCustomInput titulo={"CORREO ELECTRÓNICO"}
                                 keyboardType={"default"}
                                 secureTextEntry={false}
                                 onPressFormInterface={(text: string) => onChangeLogin('email',text)}
                />

                <FormCustomInput titulo={"CONTRASEÑA"}
                                 keyboardType={"default"}
                                 secureTextEntry={true}
                                 onPressFormInterface={(text: string) => onChangeLogin('password',text)}
                />
                
                <ButtonLogin text={"INGRESAR"} onPressFromInterface={() =>{
                    login()
                }}
                />

                <View style={{marginTop:10, alignItems: 'center', marginBottom: 25}}>

                    <TouchableOpacity onPress={() =>{
                        navigation.navigate("RegistroScreen")
                    }}>
                        <Text style={styles.registroText}>Crear cuenta</Text>
                    </TouchableOpacity>

                </View>


            </View>

        </ImageBackground>
    )

}