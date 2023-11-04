import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MiCuenta from '../../../screen/MiCuenta';
import ChangeName from '../../../screen/Account/ChangeName';
import ChangeEmail from '../../../screen/Account/ChangeEmail';
import ChangeUsername from '../../../screen/Account/ChangeUsername';
import ChangePassword from '../../../screen/Account/ChangePassword';
import Colors from '../../../constant/Color';

export default function StackAccount() {
    const Stack = createNativeStackNavigator();

    return(
        <Stack.Navigator>
            <Stack.Screen
                name="micuenta"
                component={MiCuenta}
                options={{ 
                    title: "Mi cuenta",
                    headerStyle: {
                        backgroundColor: Colors.greenClaroRM,
                    },
            }} />

            <Stack.Screen
                name="ChangeName"
                component={ChangeName}
                options={{ 
                    title: "Cambiar nombre y apellidos",
                    headerStyle: {
                        backgroundColor: Colors.greenClaroRM,
                    },
                }}/>

            <Stack.Screen
                name="ChangeEmail"
                component={ChangeEmail}
                options={{ 
                    title: "Cambiar email",
                }} />

            <Stack.Screen
                name="ChangeUsername"
                component={ChangeUsername}
                options={{ 
                    title: "Cambiar nombre de usuario",
                }} />

            <Stack.Screen
                name="ChangePassword"
                component={ChangePassword}
                options={{ 
                    title: "Cambiar contraseña",
                }} />
        </Stack.Navigator>
    )
}