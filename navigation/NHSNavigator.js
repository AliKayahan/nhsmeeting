import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import LoginScreen from '../screens/user/LoginScreen';
import ListRoomScreen from '../screens/room/ListRoomScreen';
import RoomDetailScreen from '../screens/room/RoomDetailScreen';
import Theme from '../constants/Theme';

// The default NHSNavigator styling and customization settings goes here
const NHSMainNavOptions = {
    defaultNavigationOptions :{
        headerStyle: {
            backgroundColor: Theme.color.blue1
        },
        cardStyle:{
            backgroundColor: Theme.color.background2
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
    },
    RoomDetailScreen: {
        screen: RoomDetailScreen
    } 
},NHSMainNavOptions);

export default createAppContainer(NHSNavigator);