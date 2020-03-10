import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Background from '../components/Background';
import NHSStyle from '../constants/NHSStyle';
import NHSInput from '../components/NHSInput';
import {Checkbox, Button} from 'react-native-paper';
import Theme from '../constants/Theme';

const LoginScreen = () => {
    const [rememberMe, setRememberMe] = useState('checked');
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
                    <View style={styles.rememberMeContainer}>
                        <Checkbox 
                            style={styles.checkBox}
                            status={rememberMe}
                            color={Theme.color.blue1}
                            uncheckedColor={Theme.color.grey4}
                            onPress={() => {
                                setRememberMe(rememberMe === 'checked' ? 'unchecked' : 'checked')
                            }}
                        />
                        <View style={styles.sideTexts}>
                            <Text style={styles.rememberMeText}>Remember me</Text>
                            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                        </View>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button 
                            mode="contained" 
                            uppercase={false}
                            color={Theme.color.purple3}
                            contentStyle={styles.loginButton}
                            labelStyle={styles.buttonLabel}
                            style={styles.loginButtonDefault}
                            onPress={() => console.log('Login')}>
                            Sign In
                        </Button>
                    </View>
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
    },
    rememberMeContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        marginVertical: 15,
        width: 315
    },  
    loginButton: {
        height: 50,
    },
    buttonLabel: {
        fontFamily: 'Frutiger-Bold',
        fontSize: 16,
        paddingTop: 6
    },
    loginButtonDefault:{
        textAlignVertical: 'bottom'
    },
    checkBox: {

    },
    sideTexts: {
        marginTop: 13,
        marginLeft: 2,
        flexDirection: 'row',
        flex: 1
    },
    forgotPasswordText: {
        fontFamily: 'Frutiger',
        fontSize: 14,
        color: Theme.color.grey4,
        marginLeft: 70
    },
    rememberMeText: {
        fontFamily: 'Frutiger',
        fontSize: 14,
        color: Theme.color.black
    }
});

export default LoginScreen;