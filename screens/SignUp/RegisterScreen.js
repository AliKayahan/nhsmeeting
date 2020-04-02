import React, {useState} from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import {View, Text, StyleSheet, Image} from 'react-native';
=======
import {View, Text, Button, StyleSheet, Image} from 'react-native';
>>>>>>> master
=======
import {View, Text, Button, StyleSheet, Image} from 'react-native';
>>>>>>> master
import Background from '../../components/Background';
import PasswordInputText from 'react-native-hide-password-input';
import NHSStyle from '../../constants/NHSStyle';
import NHSInput from '../../components/NHSInput';
<<<<<<< HEAD
<<<<<<< HEAD
import {FasEye, Button} from 'react-native-paper';
import eyeinput from '../../components/eyeinput';
import Theme from '../../constants/Theme';

const SignUpScreen = () => {
=======
=======
>>>>>>> master
import Theme from '../../constants/Theme';

const SignUpScreen = () => {

    const [Password, setPassword] = useState('');
    return(  //calling the background from the directory
        <Background>
            <View style={styles.logoContainer}>
                <Image 
                    source={require('../assets/images/NHSLogo.png')} 
                    />
            </View>
            <View style={styles.bodyContainer}>
<<<<<<< HEAD
<<<<<<< HEAD
                <Text style={NHSStyle.header1}>
=======
                <Text style={NHSStyle.headerBold}>
>>>>>>> master
=======
                <Text style={NHSStyle.headerBold}>
>>>>>>> master
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
                    <PasswordInputText>
                    <NHSInput 
                        mode='outlined'
                        label='Password' 
                        value={this.StaticRange.password}
                        onChangeText={ (Password) => this.setState({Password})}
                    />
                    </PasswordInputText>

<<<<<<< HEAD
<<<<<<< HEAD

                        <View style={styles.sideTexts}>
                            <Text style={styles.forgotPasswordText}>Forgot Password ?</Text>
                        </View>
=======
>>>>>>> master
=======
>>>>>>> master
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
<<<<<<< HEAD
<<<<<<< HEAD
                        <Text style={styles.signUpText}>
                            Already got an Account? <Text style={styles.signupLink}> Sign In</Text>
=======
                        <Text style={NHSStyle.smallText}>
                            Already got an Account? <Text style={NHSStyle.smallText}> Sign In</Text>
>>>>>>> master
=======
                        <Text style={NHSStyle.smallText}>
                            Already got an Account? <Text style={NHSStyle.smallText}> Sign In</Text>
>>>>>>> master
                        </Text>
                    </View>
                    </View>
                </Background>
    );
                        };

const style = StyleSheet.create({
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
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
    signupButton: {
        height: 50,
    },
>>>>>>> master
=======
    signupButton: {
        height: 50,
    },
>>>>>>> master
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