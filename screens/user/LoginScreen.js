// Importing dependencies.
import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Background from "../../components/Background";
import NHSStyle from "../../constants/NHSStyle";
import NHSInput from "../../components/NHSInput";
import { Checkbox, Button } from "react-native-paper";
import Theme from "../../constants/Theme";
import { Ionicons, Entypo } from "@expo/vector-icons";

const LoginScreen = () => {
  const [rememberMe, setRememberMe] = useState("checked");
  return (
    <Background>
      {/* Container for the header. */}
      <View style={styles.logoContainer}>
        <Image source={require("../../assets/images/NHSLogo.png")} />
      </View>

      {/* This is the container for the main body. */}
      <View style={styles.bodyContainer}>
        <Text style={NHSStyle.bigHeader}>Welcome{"\n"}Back</Text>
        <View style={styles.inputContainer}>
          <NHSInput mode="outlined" label="E-mail" />
          <NHSInput mode="outlined" label="Password" />
          <View style={styles.icon}>
            <Entypo name="eye" size={28} color={Theme.color.grey1} />
          </View>
          {/* This is the container holding the 'remember me' checkbox. */}
          <View style={styles.rememberMeContainer}>
            <Checkbox
              style={styles.checkBox}
              status={rememberMe}
              color={Theme.color.blue1}
              uncheckedColor={Theme.color.grey1}
              // When the button is pressed, the box becomes checked.
              onPress={() => {
                setRememberMe(
                  rememberMe === "checked" ? "unchecked" : "checked"
                );
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
              color={Theme.color.purple1}
              contentStyle={styles.loginButton}
              labelStyle={styles.buttonLabel}
              style={styles.loginButtonDefault}
              onPress={() => console.log("Login")}
            >
              Sign In
            </Button>
          </View>
          <View style={styles.signupTextContainer}>
            <Text style={styles.signUpText}>
              Don't have an account yet?{" "}
              <Text style={styles.signUpLink}> Sign Up</Text>
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
    marginTop: 67,
  },
  bodyContainer: {
    marginLeft: 41,
    marginTop: 75,
  },
  inputContainer: {
    marginTop: 20,
  },
  rememberMeContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  buttonContainer: {
    marginVertical: 15,
    width: 319,
    alignContent: "center",
    justifyContent: "center",
  },
  signupTextContainer: {
    marginTop: 10,
    width: "85%",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  signUpText: {
    fontFamily: "Frutiger",
    color: Theme.color.grey1,
  },
  signUpLink: {
    color: Theme.color.teal,
  },
  loginButton: {
    height: 50,
  },
  buttonLabel: {
    fontFamily: "Frutiger-Bold",
    fontSize: 16,
    paddingTop: 6,
  },
  loginButtonDefault: {
    textAlignVertical: "bottom",
  },
  checkBox: {},
  sideTexts: {
    marginTop: 13,
    marginLeft: 2,
    flexDirection: "row",
    flex: 1,
  },
  forgotPasswordText: {
    fontFamily: "Frutiger",
    fontSize: 14,
    color: Theme.color.grey1,
    marginLeft: 70,
  },
  rememberMeText: {
    fontFamily: "Frutiger",
    fontSize: 14,
    color: Theme.color.black,
  },
  icon: {
    display: "flex",
    marginTop: -55,
    paddingLeft: 280,
  },
});

export default LoginScreen;
