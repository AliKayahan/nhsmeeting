import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import Background from '../../components/Background';
import PasswordInputText from 'react-native-hide-password-input';
import NHSStyle from '../../constants/NHSStyle';
import NHSInput from '../../components/NHSInput';
import Theme from '../../constants/Theme';

const SignUpScreen = () => {
    const [password, setPassword] = useState(''); 
    return(  
        <Background>
            <View style={nha .bodyContainer}>
                <Text style={NHSStyle.headerBold}>
                    Create{"\n"}Account
                </Text>
                <View style={NHSStyle.smallText}>
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


                    <View>
                            <Text style={NHSStyle.mediumText}>Forgot Password ?</Text>
                        </View>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button 
                            mode="contained" 
                            uppercase={false}
                            color={Theme.color.purple3}
                            contentStyle={styles.signupButton}
                            labelStyle={styles.buttonLabel}
                            style={NHSStyle.mediumText}
                            onPress={() => console.log('Sign-Up')}>
                            Sign Up
                        </Button>
                    </View>
                    <View style={styles.signupTextContainer}>
                        <Text style={NHSStyle.mediumText}>
                            Already got an Account? <Text style={NHSStyle.mediumLightText}> Sign In</Text>
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