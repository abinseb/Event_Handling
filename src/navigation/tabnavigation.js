import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Workshop from '../pages/Volunteer/Workshop';
import CollegeList from '../pages/Volunteer/CollegeList';
import ListView from '../pages/Volunteer/ListViewOfVerification';
import { MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const TapNavigation =({route})=>{
    const {event} = route.params;
    return(
        
            <Tab.Navigator
                screenOptions={{headerShown:false}}
            >
                <Tab.Screen name='workshop' component={Workshop} initialParams={{event}}
                    options={{
                        tabBarIcon:({color,size}) => (
                            <MaterialIcons name="qr-code-scanner" size={24} color='black'/>
                        ),
                    }}  
                 />
                <Tab.Screen name='Bulk Registration' component={CollegeList}
                    options={{
                        tabBarIcon:() =>(
                            <MaterialIcons name='groups' size={24} color="black" />
                        )
                    }}
                />
                <Tab.Screen name='List' component={ListView} 
                    options={{
                        tabBarIcon:() => (
                            <MaterialIcons name="list" size={24} color="black" />
                        )
                    }}
                />
            </Tab.Navigator>
    
    )
}

export default TapNavigation;
