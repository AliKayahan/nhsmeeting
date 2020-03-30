import React, { memo } from "react";
import { View, StyleSheet, Text } from "react-native";
import { TextInput as Input } from "react-native-paper";
import Theme from "../constants/Theme";
import { ThemeColors } from "react-navigation";

const NHSInputAndroid = ({ color, errorText, ...props }) => (
  <View style={styles.container}>
    <Input
      theme={{
        colors: { primary: Theme.color.teal, underlineColor: "transparent" }
      }}
      style={styles.input}
      mode="outlined"
      {...props}
    />
    {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: 300,
    marginVertical: 12
  },
  error: {
    fontSize: 14,
    paddingHorizontal: 4,
    paddingTop: 4
  }
});

export default memo(NHSInputAndroid);
