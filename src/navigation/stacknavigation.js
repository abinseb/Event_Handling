import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// login
import Login from "../screens/Login";

// voluntierHome
import VoluntierHome from "../screens/VoluntierHome";

const Stack = createNativeStackNavigator();

export default function MyStack(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="login" component={Login} options={{headerShown:false}} />
                <Stack.Screen name="VHome" component={VoluntierHome} options={{headerShown:false}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}