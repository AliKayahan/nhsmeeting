import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';
import NHSNavigator from './navigation/NHSNavigator';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import userReducer from './store/reducers/user';
import { enableScreens } from 'react-native-screens';

enableScreens(); // Pre-load screens during app load.

/**
 * We are merging different reducers 
 */
const rootReducer = combineReducers({
  users: userReducer
});

 const store = createStore(rootReducer);

/**
 * This Async method loads the app-wide fonts.
 * AppLoading component of react-native expects an Async method to trigger
 * onFinish
 */
const fetchFonts = () => {
  return Font.loadAsync({
    'Frutiger': require('./assets/fonts/Frutiger-Regular.otf'), // The key value pair represents 'FontName': 'FontPath' structure
    'Frutiger-Bold': require('./assets/fonts/Frutiger-Bold.otf'),// Make sure that we are loading local fonts
    'Frutiger-Italic': require('./assets/fonts/Frutiger-Italic.otf'),
    'Frutiger-Light-Bold': require('./assets/fonts/Frutiger-Light-Bold.otf'),
    'Frutiger-Roman-Bold': require('./assets/fonts/Frutiger-Roman-Bold.otf')
  });
}
/**
 * App-wide operations should be handled here
 */
export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);// Do not start the app without loading fonts
  // Checks if the static assets (fonts) are loaded and ready to use.
  if(!fontsLoaded){
    return <AppLoading startAsync={fetchFonts} onFinish={() => setFontsLoaded(true)} />
  }
  // Return default app view after loading static assets
  return (
    <Provider store={store}>
      <NHSNavigator />
    </Provider>
  );
}
// Do not define styles below, better to manage from Theme.js
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fontTest:{
    fontFamily: 'Frutiger'
  }
});
