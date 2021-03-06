import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, Alert } from "react-native";
import NHSInputAndroid from "../../components/NHSInputAndroid";
import NHSStyle from "../../constants/NHSStyle";
import Background from "../../components/Background";
import Theme from "../../constants/Theme";
import Firebase from '../../components/Firebase';

const RegisterScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [password, setPassword] = useState('');

    const SignUp = (email, password, fullName) => {
      try {
          Firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(user => { 
              Alert.alert(
                "Success",
                "Registration Completed.",
                [
                  { text: "Ok", onPress: () => navigation.navigate('Login') }
                ],
                { cancelable: false }
              );
            });
      } catch (error) {
        console.log(error.toString(error));
      }
    };
    const verifySignUpInfo = () => {      
      SignUp(email, password, fullName);
    }
    return (
      <Background>
        <View>
          <View>
            <Image
              style={styles.logo}
              source={require("../../assets/images/NHSLogo.png")}
            />
            <Image />
          </View>

          <View style={styles.bigHeaderContainer}>
            <Text style={NHSStyle.bigHeader}>Create{"\n"}Account</Text>
          </View>

          <View style={styles.inputContainer}>
            <NHSInputAndroid onChangeText={(fullName) => setFullName(fullName)} label="Full Name" />
            <NHSInputAndroid onChangeText={(email) => setEmail(email)}  label="E-mail" />
            <NHSInputAndroid secureTextEntry={true} onChangeText={(password) => setPassword(password)} label="Password" />
            <TouchableOpacity style={styles.signUpBtn} onPress={verifySignUpInfo}>
              <Text style={styles.btnText}>Sign Up</Text>
            </TouchableOpacity>
            <Text style={styles.signIn}>
              Already have an account? <Text style={styles.link}>Sign In</Text>
            </Text>
          </View>
        </View>
      </Background>
    );
}

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "center"
  },
  logo: {
    marginLeft: 25,
    marginTop: 20
  },
  bigHeaderContainer: {
    marginLeft: 25,
    marginTop: 30,
    marginBottom: 20
  },
  signUpBtn: {
    marginTop: 20,
    backgroundColor: Theme.color.purple1,
    width: 300,
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    fontWeight: "700",
    fontFamily: "Frutiger-Bold"
  },
  btnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold"
  },
  signIn: {
    marginTop: 10,
    color: "gray"
  },
  link: {
    color: "#0072CE",
    fontFamily: "Frutiger-Bold"
  }
});

export default RegisterScreen;
