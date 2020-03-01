import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';

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
  return (
    <View style={styles.container}>
      <Text>Hello Ahmad and Carmi</Text>
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
});
