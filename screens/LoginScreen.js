import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Background from '../components/Background';
import NHSStyle from '../constants/NHSStyle';
import NHSInput from '../components/NHSInput';
import {Checkbox} from 'react-native-paper';
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
                            onPress={() => {
                                setRememberMe(rememberMe === 'checked' ? 'unchecked' : 'checked')
                            }}
                        />
                        <Text style={styles.rememberMeText}>Remember me</Text>
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
        flexDirection: 'row'
    },
    checkBox: {

    },
    rememberMeText: {
        marginTop: 13,
        marginLeft: 2,
        fontFamily: 'Frutiger',
        fontSize: 14,
        color: Theme.color.black
    }
});

export default LoginScreen;