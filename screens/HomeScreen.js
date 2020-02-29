import React, { memo } from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import Paragraph from '../components/Paragraph';

// ******THIS WILL BE THE SPLASH SCREEN******

const HomeScreen = ({ navigation }) => (
  <Background>
    <Button mode="contained" onPress={() => navigation.navigate('LoginScreen')}>
      Login
    </Button>
  </Background>
);

export default memo(HomeScreen);
