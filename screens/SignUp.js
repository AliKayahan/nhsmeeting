import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Background from '../components/Background';
import NHSStyle from '../constants/NHSStyle';
import NHSInput from '../components/NHSInput';
import {FasEye, Button} from 'react-native-paper';
import Theme from '../constants/Theme';

const SignUpScreen = () => {
    const ; //fa's eye
    return(
        <Background>
            <View style={styles.logoContainer}>
                <Image 
                    source={require('../assets/images/NHSLogo.png')} 
                    />
            </View>
            <View style={styles.bodyContainer}>
                <Text style={NHSStyle.header1}>
                    Create{"\n"}Account
                </Text>
                <View style={styles.inputContainer}>
                <NHSInput 
                        mode='outlined'
                        label='First and Last Name' 
                    />
                    <NHSInput 
                        mode='outlined'
                        label='E-mail' 
                    />
                    <NHSInput 
                        mode='outlined'
                        label='Password' 
                    />
                    <View style={styles.rememberMeContainer}>
                        <FasEye 
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
                            <Text style={styles.forgotPasswordText}>Forgot Password ?</Text>
                        </View>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button 
                            mode="contained" 
                            uppercase={false}
                            color={Theme.color.purple3}
                            contentStyle={styles.signupButton}
                            labelStyle={styles.buttonLabel}
                            style={styles.signupButtonDefault}
                            onPress={() => console.log('Sign-Up')}>
                            Sign Up
                        </Button>
                    </View>
                    <View style={styles.signupTextContainer}>
                        <Text style={styles.signUpText}>
                            Already got an Account? <Text style={styles.signupLink}> Sign In</Text>
                        </Text>
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
    buttonContainer: {
        marginVertical: 15,
        width: 319,
        alignContent: 'center',
        justifyContent: 'center'
    },  
    signupTextContainer: {
        marginTop: 10,
        width: '85%',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    signUpText: {
        fontFamily: 'Frutiger',
        color: Theme.color.grey4
    },
    signUpLink: {
        color: Theme.color.blue2
    },
    signupButton: {
        height: 50,
    },
    buttonLabel: {
        fontFamily: 'Frutiger-Bold',
        fontSize: 16,
        paddingTop: 6
    },
    signupButtonDefault:{
        textAlignVertical: 'bottom'
    },
    sideTexts: {
        marginTop: 13,
        marginLeft: 2,
        flexDirection: 'row',
        flex: 1
    }
});

export default SignUpScreen;