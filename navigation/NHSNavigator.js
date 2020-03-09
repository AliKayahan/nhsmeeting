import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import LoginScreen from '../screens/LoginScreen';

// The default NHSNavigator styling and customization settings goes here
const NHSMainNavOptions = {
    defaultNavigationOptions :{

    }
}

// This stack navigator is the app-wide main navigation
const NHSNavigator = createStackNavigator({
    Login: {
        screen: LoginScreen,
        navigationOptions: { // Hides headerbar in login screen
            headerShown: false
        }
    }
},NHSMainNavOptions);

export default createAppContainer(NHSNavigator);