import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {TextInput} from 'react-native-paper';
import Background from '../components/Background';
import NHSStyle from '../constants/NHSStyle';
import Theme from '../constants/Theme';

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
                    <TextInput 
                        style={NHSStyle.input}
                        theme={{
                            colors: {
                                primary: Theme.color.blue2,
                                background: Theme.color.background,
                                placeholder: Theme.color.grey5,
                                text: Theme.color.black
                            }
                        }}
                        mode='outlined'
                        label='E-mail'
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