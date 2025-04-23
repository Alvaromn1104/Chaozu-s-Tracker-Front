import {useState} from "react";
import {useLocalStorage} from "../../hooks/UseLocalStorage";
import {LoginAuthUseCase} from "../../../domain/useCases/Auth/LoginAuth";
import {UserLogin, UserLoginInterface} from "../../../domain/entities/User";
import {SaveUserUseCase} from "../../../domain/useCases/UserLocal/SaveUser";
import {RegisterAuthUseCase} from "../../../domain/useCases/Auth/RegisterAuth";
import {PropStackNaviation} from "../../interfaces/StackNav";


const LoginViewModel = () => {

    const [errorMessage, setErrorMessage] = useState('');
    const [values, setValues] = useState({
        email: "",
        password: "",
    })

    const {user, getUserSession} = useLocalStorage();

    const onChangeLogin = (property: string, value: any) => {
        setValues({...values, [property]: value});
    }

    const validateForm = () => {

        if (values.email === "") {
            setErrorMessage("El email es obligatorio")
            return false
        }
        if (values.password === "") {
            setErrorMessage("La contraseña es obligatorio")
            return false
        }

        return true
    }

    const login = async () => {

        if(validateForm()) {
            const response = await LoginAuthUseCase(values as UserLoginInterface)
            if(!response.success){
                setErrorMessage(response.message)
            }
            else{
                await SaveUserUseCase(response.data as UserLogin)
                getUserSession()
            }
        }

    }

    return {
        ...values,
        onChangeLogin,
        login,
        errorMessage,
        user,
    }

}

const RegistroViewModel = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [values, setValues] = useState({
        email: "",
        firstName: "",
        lastName: "",
        userName: "",
        password: "",
        confirmPassword: "",
    });
    const [success, setSuccess] = useState(false);

    const onChangeRegistro = (property: string, value: any) => {
        setValues({...values, [property]: value});
    }

    const register = async () => {
        if(validateForm()) {
            const response = await RegisterAuthUseCase(values)
            setSuccess(true);
        }
    }

    const validateForm = () => {
        if(values.email === "") {
            setErrorMessage("El email es obligatorio")
            return false
        }
        if(values.firstName === "") {
            setErrorMessage("El nombre es obligatorio")
            return false
        }
        if(values.lastName === "") {
            setErrorMessage("Los apellidos es obligatorio")
            return false
        }
        if(values.userName === "") {
            setErrorMessage("El nombre de usuario es obligatorio")
            return false
        }
        if(values.password === "") {
            setErrorMessage("La contraseña es obligatora")
            return false
        }
        if(values.confirmPassword === ""){
            setErrorMessage("Confirmar la contraseña es obligatorio")
            return false
        }
        if(values.confirmPassword !== values.password) {
            setErrorMessage("Las contraseñas no coinciden")
            return false
        }
        return true
    }

    return{
        ...values,
        onChangeRegistro,
        register,
        errorMessage,
        success
    }

}

export default {LoginViewModel, RegistroViewModel}