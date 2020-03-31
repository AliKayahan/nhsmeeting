import React, { useState, Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TextInput
} from "react-native";
import Background from "../../components/Background";
import NHSInputAndroid from "../../components/NHSInputAndroid";
import { Checkbox, Button } from "react-native-paper";
import Theme from "../../constants/Theme";
import ToggleSwitch from "toggle-switch-react-native";
// Expo Vector-Icons
import {
  FontAwesome,
  EvilIcons,
  MaterialCommunityIcons,
  Foundation
} from "@expo/vector-icons";

export class AddMeetingScreen extends Component {
  render() {
    return (
      <ScrollView>
        <Background>
          <View style={styles.container}>
            <View>
              <Text
                style={{
                  fontFamily: "Frutiger",
                  fontSize: 16,
                  color: "#004280",
                  marginBottom: 20,
                  marginTop: 30,
                  alignSelf: "center"
                }}
              >
                New Meeting
              </Text>
            </View>

            {/* Enter Room Name and Description */}
            <View style={styles.inputContainer}>
              <NHSInputAndroid label="Month Planning" />
            </View>
            <View style={styles.inputContainer}>
              <NHSInputAndroid label="Subtitles" />
            </View>
            <View
              style={styles.inputContainer}
              style={styles.inputContainerLast}
            >
              <NHSInputAndroid label="Description" />
            </View>

            {/* Room Information  */}
            <View style={styles.featuresContainer}>
              <View style={styles.rowOne}>
                <View style={styles.containerBlue}>
                  <FontAwesome
                    name="calendar"
                    size={20}
                    color={Theme.color.blue2}
                  />
                </View>
                <View style={styles.border}>
                  <View style={styles.innerTextContainer}>
                    <Text style={styles.innerText}>Monday, 10th April</Text>
                    <Text style={styles.innerTextSub}>10:00AM - 11:00AM</Text>
                  </View>
                </View>
              </View>
              <View style={styles.rowOne}>
                <View style={styles.containerPink}>
                  <EvilIcons name="location" size={20} color={"#ff42a1"} />
                </View>
                <View style={styles.border}>
                  <View style={styles.innerTextContainer}>
                    <Text style={styles.innerText}>Location</Text>
                    <Text style={styles.innerTextSub}>
                      WV1 3EB, Wolverhampton
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.rowOne}>
                <View style={styles.containerYellow}>
                  <MaterialCommunityIcons
                    name="office-building"
                    size={20}
                    color={Theme.color.yellow}
                  />
                </View>
                <View style={styles.border}>
                  <View style={styles.innerTextContainer}>
                    <Text style={styles.innerText}>Office</Text>
                    <Text style={styles.innerTextSub}>Floor 3. Room 505</Text>
                  </View>
                </View>
              </View>
              <View style={styles.rowOne}>
                <View style={styles.containerBlue2}>
                  <FontAwesome
                    name="user"
                    size={20}
                    color={Theme.color.blue2}
                  />
                </View>
                <View style={styles.border}>
                  <View style={styles.innerTextContainer}>
                    <Text style={styles.innerText}>Invite Members</Text>
                    <Text style={styles.innerTextSub}>10 People</Text>
                  </View>
                </View>
              </View>
              <View style={styles.rowOne}>
                <View style={styles.containerGrey}>
                  <MaterialCommunityIcons
                    name="square"
                    size={20}
                    color={Theme.color.purple1}
                  />
                </View>
                <View style={styles.border}>
                  <View style={styles.innerTextContainer}>
                    <Text style={styles.innerText}>Color Select</Text>
                    <Text style={styles.innerTextSub}>Default Color</Text>
                  </View>
                </View>
              </View>
              <View style={styles.rowOne}>
                <View style={styles.containerOrange}>
                  <MaterialCommunityIcons
                    name="bell"
                    size={20}
                    color={"#ffa321"}
                  />
                </View>
                <View style={styles.border}>
                  <View style={styles.innerTextContainer}>
                    <Text style={styles.innerText}>Notifications</Text>
                    <Text style={styles.innerTextSub}>Every 30 Minutes</Text>
                    <View style={styles.toggleHolder}>
                      <ToggleSwitch />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </Background>
      </ScrollView>
    );
  }
}

export default AddMeetingScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff"
  },
  textContainer: {
    flex: 1,
    alignItems: "flex-start",
    marginLeft: 20,
    marginTop: 20
  },
  textInput: {
    height: 55,
    width: "90%",
    borderWidth: 1,
    borderColor: "#e6e6e6",
    borderRadius: 5,
    paddingLeft: 5,
    fontFamily: "Frutiger",
    marginBottom: 5
  },
  imageContainer: {
    backgroundColor: "#e6e6e6",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginLeft: "5%",
    marginBottom: 27,
    height: 180,
    width: "90%"
  },
  headerText: {
    fontSize: 30
  },
  inputContainer: {
    alignItems: "center"
  },
  inputContainerLast: {
    alignItems: "center",
    marginBottom: 20
  },
  rowOne: {
    flexDirection: "row",
    marginBottom: 30,
    borderBottomWidth: 0.7,
    borderBottomColor: "#ebeae8",
    paddingBottom: 15
  },
  containerBlue: {
    height: 50,
    width: 50,
    backgroundColor: "pink",
    marginRight: 12,
    marginLeft: 20,
    borderRadius: 5,
    backgroundColor: "aliceblue",
    alignItems: "center",
    justifyContent: "center"
  },
  containerBlue2: {
    height: 50,
    width: 50,
    backgroundColor: "pink",
    marginRight: 12,
    marginLeft: 20,
    borderRadius: 5,
    backgroundColor: "aliceblue",
    alignItems: "center",
    justifyContent: "center"
  },
  containerPink: {
    height: 45,
    width: 45,
    backgroundColor: "pink",
    marginRight: 20,
    marginLeft: 20,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  containerYellow: {
    height: 45,
    width: 45,
    marginRight: 20,
    marginLeft: 20,
    borderRadius: 5,
    backgroundColor: "#fff38a",
    alignItems: "center",
    justifyContent: "center"
  },
  containerGrey: {
    height: 50,
    width: 50,
    marginRight: 12,
    marginLeft: 20,
    borderRadius: 5,
    backgroundColor: "#e0e0e0",
    alignItems: "center",
    justifyContent: "center"
  },
  containerOrange: {
    backgroundColor: "#ffd9a3",
    height: 50,
    width: 50,
    marginRight: 12,
    marginLeft: 20,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  innerText: {
    color: "#b5b5b5",
    fontSize: 14,
    fontFamily: "Frutiger"
  },
  innerTextSub: {
    fontFamily: "Frutiger",
    fontSize: 16,
    marginTop: 4,
    color: "#004280"
  },
  innerTextContainer: {},
  iconHolder: {
    height: 45,
    width: 45,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginLeft: 20,
    marginBottom: 10,
    marginRight: 15
  },
  textContainer: {
    width: "45%",
    marginRight: 40
  },
  iconInnerText: {
    fontFamily: "Frutiger",
    fontSize: 16,
    color: "#004280",
    justifyContent: "flex-start"
  },
  toggleHolder: {
    marginLeft: 200,
    marginTop: -22
  }
});
