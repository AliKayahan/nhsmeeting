import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
/**
 * The generic background image used during the application
 * @param {*} props
 */
const Background = (props) => {
  return (
    <ImageBackground
      style={{ ...styles.bgImageContainer, ...props.style }} // Lets us to gather further styling via props
      source={require("../assets/images/bg.png")}
      imageStyle={{ resizeMode: "stretch" }}
    >
      {props.children}
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  bgImageContainer: {
    width: "100%", // A width and height is mandatory
    height: "100%",
    flex: 1,
    elevation: 0,
  },
});

export default Background;
