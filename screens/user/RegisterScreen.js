import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import NHSInputAndroid from "../../components/NHSInputAndroid";
import NHSStyle from "../../constants/NHSStyle";
import Background from "./components/Background";
import Theme from "../../constants/Theme";

export default class App extends Component {
  render() {
    return (
      <Background>
        <View>
          <View>
            <Image
              style={styles.logo}
              source={require("./assets/images/NHSLogo.png")}
            />
            <Image />
          </View>

          <View style={styles.bigHeaderContainer}>
            <Text style={NHSStyle.bigHeader}>Create{"\n"}Account</Text>
          </View>

          <View style={styles.inputContainer}>
            <NHSInputAndroid label="Email" />
            <NHSInputAndroid label="Username" />
            <NHSInputAndroid label="Password" />
            <TouchableOpacity style={styles.signUpBtn}>
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
