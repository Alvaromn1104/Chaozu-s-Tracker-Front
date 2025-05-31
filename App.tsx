import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import {useFonts} from "expo-font";
import {ActivityIndicator} from "react-native";
import {AppColors} from "./app/presentation/theme/AppThemes";
import {LoginScreen} from "./app/presentation/view/auth/Login";
import {RegistroScreen} from "./app/presentation/view/auth/Registro";
import {CategoriasScreen} from "./app/presentation/view/paginaPrincipal/Categorias";
import {CharactersScreen} from "./app/presentation/view/personajes/Characters";
import {CharacterDetailScreen} from "./app/presentation/view/personajes/personajesDetails/CharacterDetails";
import {DlcScreen} from "./app/presentation/view/dlc/Dlcs";
import {NoticiasScreen} from "./app/presentation/view/noticias/Noticias";
import {PerfilUsuarioScreen} from "./app/presentation/view/perfilUsuario/PerfilUsuario";
import {ControlesScreen} from "./app/presentation/view/controles/ControleScreen";
import {HistoriaScreen} from "./app/presentation/view/historia/HistoriaScreen";
import {FrezzerHistoriaScreen} from "./app/presentation/view/historia/Frezzer/FrezzerHistoriaScreen";
import {GohanHistoriaScreen} from "./app/presentation/view/historia/gohan/GohanHistoriaScreen";
import {GokuHistoriaScreen} from "./app/presentation/view/historia/goku/GokuHistoriaScreen";
import {PiccoloHistoriaScreen} from "./app/presentation/view/historia/piccolo/PiccoloHistoriaScreen";
import {VegetaHistoriaScreen} from "./app/presentation/view/historia/Vegeta/VegetaHistoriaScreen";
import {PlatinoScreen} from "./app/presentation/view/platino/PlatinoScreen";
import {FreezerWhatIfInfoScreen} from "./app/presentation/view/historia/Frezzer/FrezzedWhatIf/FezzerWhatIfScreen";
import {GohanWhatIfInfoScreen} from "./app/presentation/view/historia/gohan/GohanWhatIf/GohanWhatIfScreen";
import {GokuWhatIf1InfoScreen} from "./app/presentation/view/historia/goku/GokuWhatIf/GokuWhatIf1InfoScreen";
import {GokuWhatIf2InfoScreen} from "./app/presentation/view/historia/goku/GokuWhatIf/GokuWhatIf2InfoScreen";
import {GokuWhatIf3InfoScreen} from "./app/presentation/view/historia/goku/GokuWhatIf/GokuWhatIf3InfoScreen";
import {PiccoloWhatIfInfoScreen} from "./app/presentation/view/historia/piccolo/PiccoloWhatIf/PiccoloWhatIfInfoScreen";
import {VegetaWhatIf1InfoScreen} from "./app/presentation/view/historia/Vegeta/VegetaWhatIf/VegetaWhatIfI1nfoScreen";
import {VegetaWhatIf2InfoScreen} from "./app/presentation/view/historia/Vegeta/VegetaWhatIf/VegetaWhatIf2InfoScreen";
import {EditarPerfilScreen} from "./app/presentation/view/perfilUsuario/EditarPerfilScreen";
import {PaperProvider} from "react-native-paper";


export type RootStackParamList = {
    LoginScreen: undefined,
    RegistroScreen: undefined,
    CategoriasScreen: undefined,
    CharactersScreen: undefined,
    DlcScreen: undefined,
    ControlesScreen: undefined,
    NoticiasScreen: undefined,
    PerfilUsuarioScreen: undefined,
    EditarPerfilScreen: undefined,
    HistoriaScreen: undefined,
    PlatinoScreen: undefined,
    FrezzerHistoriaScreen: undefined,
    GohanHistoriaScreen: undefined,
    GokuHistoriaScreen: undefined,
    PiccoloHistoriaScreen: undefined,
    VegetaHistoriaScreen: undefined,
    CharacterDetailScreen: { id: number },
    FreezerWhatIfInfoScreen: undefined,
    GohanWhatIfInfoScreen: undefined,
    GokuWhatIf1InfoScreen: undefined,
    GokuWhatIf2InfoScreen: undefined,
    GokuWhatIf3InfoScreen: undefined,
    PiccoloWhatIfInfoScreen: undefined,
    VegetaWhatIf1InfoScreen: undefined,
    VegetaWhatIf2InfoScreen: undefined,
}

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {

    const[fontLoaded] = useFonts({
        "Paprika-Regular": require('./assets/fonts/Paprika-Regular.ttf'),
        "Boogaloo-Regular": require('./assets/fonts/Boogaloo-Regular.ttf')
    });

    if(!fontLoaded){
        return <ActivityIndicator size="large" color={AppColors.primary}/>;
    }
    else {
        return (

            <PaperProvider>
                <NavigationContainer>
                    <Stack.Navigator screenOptions={{ headerShown: false }}>
                        <Stack.Screen name={"CategoriasScreen"} options={{headerShown: false, title: "categorias"}} component={CategoriasScreen}></Stack.Screen>
                        <Stack.Screen name={"LoginScreen"} component={LoginScreen}></Stack.Screen>
                        <Stack.Screen name={"RegistroScreen"} options={{headerShown: true, title: "Registro"}} component={RegistroScreen}></Stack.Screen>
                        <Stack.Screen name={"CharactersScreen"} options={{headerShown: false, title: "personajes"}} component={CharactersScreen}></Stack.Screen>
                        <Stack.Screen name={"DlcScreen"} options={{headerShown: false, title: "dlcs"}} component={DlcScreen}></Stack.Screen>
                        <Stack.Screen name={"NoticiasScreen"} options={{headerShown: false, title: "noticias"}} component={NoticiasScreen}></Stack.Screen>
                        <Stack.Screen name={"PerfilUsuarioScreen"} options={{headerShown: false, title: "perfil de usuario"}} component={PerfilUsuarioScreen}></Stack.Screen>
                        <Stack.Screen name={"EditarPerfilScreen"} options={{headerShown: false, title: "Editar perfil de usuario"}} component={EditarPerfilScreen}></Stack.Screen>
                        <Stack.Screen name={"ControlesScreen"} options={{headerShown: false, title: "controles"}} component={ControlesScreen}></Stack.Screen>
                        <Stack.Screen name={"HistoriaScreen"} options={{headerShown: false, title: "historia"}} component={HistoriaScreen}></Stack.Screen>
                        <Stack.Screen name={"PlatinoScreen"} options={{headerShown: false, title: "Platino"}} component={PlatinoScreen}></Stack.Screen>
                        <Stack.Screen name={"FrezzerHistoriaScreen"} options={{headerShown: false, title: "historia de freezer"}} component={FrezzerHistoriaScreen}></Stack.Screen>
                        <Stack.Screen name={"GohanHistoriaScreen"} options={{headerShown: false, title: "historia de gohan"}} component={GohanHistoriaScreen}></Stack.Screen>
                        <Stack.Screen name={"GokuHistoriaScreen"} options={{headerShown: false, title: "historia de goku"}} component={GokuHistoriaScreen}></Stack.Screen>
                        <Stack.Screen name={"PiccoloHistoriaScreen"} options={{headerShown: false, title: "historia de piccolo"}} component={PiccoloHistoriaScreen}></Stack.Screen>
                        <Stack.Screen name={"VegetaHistoriaScreen"} options={{headerShown: false, title: "historia de vegeta"}} component={VegetaHistoriaScreen}></Stack.Screen>
                        <Stack.Screen name={"CharacterDetailScreen"} options={{headerShown: false, title: "Detalles de personajes"}} component={CharacterDetailScreen}></Stack.Screen>
                        <Stack.Screen name={"FreezerWhatIfInfoScreen"} options={{headerShown: false, title: "Frezzer what if details"}} component={FreezerWhatIfInfoScreen}></Stack.Screen>
                        <Stack.Screen name={"GohanWhatIfInfoScreen"} options={{headerShown: false, title: "Gohan what if details"}} component={GohanWhatIfInfoScreen}></Stack.Screen>
                        <Stack.Screen name={"GokuWhatIf1InfoScreen"} options={{headerShown: false, title: "Goku what if 1 details"}} component={GokuWhatIf1InfoScreen}></Stack.Screen>
                        <Stack.Screen name={"GokuWhatIf2InfoScreen"} options={{headerShown: false, title: "Goku what if 2 details"}} component={GokuWhatIf2InfoScreen}></Stack.Screen>
                        <Stack.Screen name={"GokuWhatIf3InfoScreen"} options={{headerShown: false, title: "Goku what if 3 details"}} component={GokuWhatIf3InfoScreen}></Stack.Screen>
                        <Stack.Screen name={"PiccoloWhatIfInfoScreen"} options={{headerShown: false, title: "Piccolo what if details"}} component={PiccoloWhatIfInfoScreen}></Stack.Screen>
                        <Stack.Screen name={"VegetaWhatIf1InfoScreen"} options={{headerShown: false, title: "Vegeta what if 1 details"}} component={VegetaWhatIf1InfoScreen}></Stack.Screen>
                        <Stack.Screen name={"VegetaWhatIf2InfoScreen"} options={{headerShown: false, title: "Vegeta what if 2 details"}} component={VegetaWhatIf2InfoScreen}></Stack.Screen>
                    </Stack.Navigator>
                </NavigationContainer>
            </PaperProvider>
        )
    }

}
