import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';

const fetchFonts = () => {
  return Font.loadAsync({
    'Frutiger': require('./assets/fonts/Frutiger-Regular.otf'),
    'Frutiger-Bold': require('./assets/fonts/Frutiger-Bold.otf'),
    'Frutiger-Italic': require('./assets/fonts/Frutiger-Italic.otf'),
    'Frutiger-Light-Bold': require('./assets/fonts/Frutiger-Light-Bold.otf'),
    'Frutiger-Roman-Bold': require('./assets/fonts/Frutiger-Roman-Bold.otf')
  });
}

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);// Do not start the app without loading fonts

  if(!fontsLoaded){
    return <AppLoading startAsync={fetchFonts} onFinish={() => setFontsLoaded(true)} />
  }

  return (
    <View style={styles.container}>
      <Text style={styles.fontTest}>Hello from NHS Meeting Room App</Text>
    </View>
  );
}

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
