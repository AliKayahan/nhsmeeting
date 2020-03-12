import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import LoginScreen from '../screens/user/LoginScreen';
import ListRoomScreen from '../screens/room/ListRoomScreen';
import Theme from '../constants/Theme';

// The default NHSNavigator styling and customization settings goes here
const NHSMainNavOptions = {
    defaultNavigationOptions :{
        headerStyle: {
            backgroundColor: Theme.color.blue1
        },
        headerTintColor: Theme.color.white
    }
}

// This stack navigator is the app-wide main navigation
const NHSNavigator = createStackNavigator({
    // Login: {
    //     screen: LoginScreen,
    //     navigationOptions: { // Hides headerbar in login screen
    //         headerShown: false
    //     }
    // },
    ListRoom: {
        screen: ListRoomScreen
    } 
},NHSMainNavOptions);

export default createAppContainer(NHSNavigator);