import AsyncStorage from "@react-native-async-storage/async-storage";


export const LocalStorage = () =>{
    const save = async (key: string, value: string) => {
        try{
            await AsyncStorage.setItem(key, value)
        }
        catch (error) {
            console.log("error en local storage" +error)
        }
    }

    const getItem = async (key: string) => {
        try{
            return await AsyncStorage.getItem(key)
        }
        catch (error) {
            console.log("error en getItem local storage" +error)
        }
    }

    const deleteItem = async (key: string) => {
        try{
            return await AsyncStorage.removeItem(key)
        }
        catch (error) {
            console.log("error en delete local storage" +error)
        }
    }

    return{
        save,
        getItem,
        deleteItem,
    }

}