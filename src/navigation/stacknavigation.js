import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// login
import Login from "../screens/Login";

// voluntierHome
import VoluntierHome from "../screens/VoluntierHome";
// tab navigation
import TapNavigation from "./tabnavigation";
import qrCodeScan from "../pages/Volunteer/QRCodeScan";
import validateData from "../pages/Volunteer/ValidateData";
import InputData from "../pages/Volunteer/InputForm";


const Stack = createNativeStackNavigator();

export default function MyStack(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="login" component={Login} options={{headerShown:false}} />
                <Stack.Screen name="VHome" component={VoluntierHome} options={{headerShown:false}} />
                {/* <Stack.Screen name="workshop" component={Workshop} /> */}
                <Stack.Screen name= "tab" component={TapNavigation} />
                <Stack.Screen name='QRCode Scan' component={qrCodeScan} />
                <Stack.Screen name="Validate Data" component={validateData} />
                <Stack.Screen name ="Input Data" component={InputData} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}