import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';

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
  // Return default app view after loading static assets, we should handle dynamic screens here
  return (
    <View style={styles.container}>
      <Text style={styles.fontTest}>Welcome to NHS Meeting Room App</Text>
    </View>
  );
}
// Do not define styles below, better to manage from Theme.js
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fontTest:{
    fontFamily: 'Frutiger'
  }
});
