import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Background from '../components/Background';
import NHSStyle from '../constants/NHSStyle';
import NHSInput from '../components/NHSInput';

const LoginScreen = () => {
    return(
        <Background>
            <View style={styles.logoContainer}>
                <Image 
                    source={require('../assets/images/NHSLogo.png')} 
                    />
            </View>
            <View style={styles.bodyContainer}>
                <Text style={NHSStyle.header1}>
                    Welcome{"\n"}Back
                </Text>
                <View style={styles.inputContainer}>
                    <NHSInput 
                        mode='outlined'
                        label='E-mail' 
                    />
                    <NHSInput 
                        mode='outlined'
                        label='Password' 
                    />
                </View>
            </View>
        </Background>
    );
};

const styles = StyleSheet.create({
    logoContainer: {
        marginLeft: 41,
        marginTop: 67
    },
    bodyContainer: {
        marginLeft: 41,
        marginTop: 75
    },
    inputContainer:{
        marginTop: 20
    }
});

export default LoginScreen;