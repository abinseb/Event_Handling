import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Workshop from '../pages/Volunteer/Workshop';
import CollegeList from '../pages/Volunteer/CollegeList';

const Tab = createBottomTabNavigator();

const TapNavigation =({route})=>{
    const {event} = route.params;
    return(
        
            <Tab.Navigator
                screenOptions={{headerShown:false}}
            >
                <Tab.Screen name='workshop' component={Workshop} initialParams={{event}} />
                <Tab.Screen name='Bulk Registration' component={CollegeList} />
            </Tab.Navigator>
    
    )
}

export default TapNavigation;
