import React, { useState, Component } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import Background from "../components/Background";
import NHSStyle from "../constants/NHSStyle";
import NHSInput from "../components/NHSInput";
import { Checkbox, Button } from "react-native-paper";
import Theme from "../constants/Theme";
import ToggleSwitch from 'toggle-switch-react-native';
// Expo Vector-Icons
import { FontAwesome, EvilIcons, MaterialCommunityIcons, Foundation } from '@expo/vector-icons';

// Create Room
export class AddRoomScreen extends Component {
  render() {
    return (
      <ScrollView>
      <View style={styles.container}>
        {/* Upload Photo Section */}
        <View style={styles.imageContainer}>
          <FontAwesome name="plus" size={48} color={'gray'} />
          <Text style={{color: 'grey'}}>Add Photo</Text>
        </View>
        
        {/* Enter Room Name and Description */}
        <View style={styles.inputContainer}> 
          <NHSInput placeholder="Room 505"/>
          <NHSInput placeholder="Description"/> 
        </View>
        
        {/* Room Information  */}
        <View style={styles.featuresContainer}>
          <View style={styles.rowOne}>
            <View style={styles.containerBlue}>
            <FontAwesome name="user" size={20} color={'#1f80b5'} />
            </View>
            <Text style={styles.innerText}>
              Number of People {"\n"}0 People
            </Text>
          </View>
          <View style={styles.rowOne}>
            <View style={styles.containerPink}>
              <EvilIcons name="location" size={20} color={'#ff42a1'}/>
            </View>
            <Text style={styles.innerText}>
              Location {"\n"}WV1 3EB, Wolverhampton
            </Text>
          </View>
          <View style={styles.rowOne}>
            <View style={styles.containerYellow}>
              <MaterialCommunityIcons name="office-building" size={20} color={'#c9c900'} />
            </View>
            <Text style={styles.innerText}>Room 505 {"\n"}3. Floor</Text>
          </View>
        </View>
        <Text style={{ marginLeft: 20, marginTop: 20, fontSize: 16 }}>
          Room Features
        </Text>

        {/* Room Features Toggle */}
        <View style={styles.roomFeatures}>
          <View style={styles.wifi}>
            <FontAwesome name ="wifi"  style={styles.icon}/>
            <Text style={styles.featuresInnerText}>Wifi</Text>
            <ToggleSwitch />
          </View>
          <View style={styles.wifi}>
          <FontAwesome name ="car" style={styles.icon}/>
            <Text style={styles.featuresInnerText}>Car Park</Text>
            <ToggleSwitch />
          </View>
          <View style={styles.wifi}>
          <FontAwesome name ="microphone" style={styles.icon}/>
            <Text style={styles.featuresInnerText}>Microphone</Text>
            <ToggleSwitch />
          </View>
          <View style={styles.wifi}>
            <MaterialCommunityIcons name="air-conditioner" style={styles.icon} />
            <Text style={styles.featuresInnerText}>Air Conditioning</Text>
            <ToggleSwitch />
          </View>
          <View style={styles.wifi}>
          <Foundation name ="projection-screen" style={styles.icon} />
            <Text style={styles.featuresInnerText}>Projector</Text>
            <ToggleSwitch />
          </View>
        </View>
      </View>
      </ScrollView>
    );
  }
}

export default AddRoomScreen;

// Create room styles
const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    marginTop: 15,
    alignItems: "flex-start",
    marginLeft: 20,
    marginTop: 20,
    
  },
  imageContainer: {
    backgroundColor: '#e6e6e6',
    alignItems: "center",
    justifyContent: 'center',
    marginTop: 20,
    marginLeft: '5%',    
    height: 180,
    width: '90%'
  },
  headerText: {
    fontSize: 30
  },
  inputContainer: {
    alignItems: "center",
    marginTop: 40,
    marginBottom: 30
  },
  roomHeading: {
    marginLeft: 30,
    marginTop: 20,
    fontFamily: "Frutiger"
  },
  featuresContainer: {
    width: "100%"
  },
  rowOne: {
    flexDirection: "row",
    marginBottom: 30
  },
  containerBlue: {
    height: 45,
    width: 45,
    backgroundColor: "pink",
    marginRight: 20,
    marginLeft: 20,
    borderRadius: 5,
    backgroundColor: "#96d4fa",
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerPink: {
    height: 45,
    width: 45,
    backgroundColor: "pink",
    marginRight: 20,
    marginLeft: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerYellow: {
    height: 45,
    width: 45,
    marginRight: 20,
    marginLeft: 20,
    borderRadius: 5,
    backgroundColor: "#ffff0a",
    alignItems: 'center',
    justifyContent: 'center'
  },
  innerText: {
    marginTop: 7,
    color: Theme.color.grey1,
    fontSize: 16
  },
  roomFeatures: {
    marginLeft: 20,
    marginBottom: 15
  },
  wifi: {
    marginTop: 20,
    flexDirection: 'row'
  },
  featuresInnerText: {
    fontSize: 16,
    width: 160,  
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 70
  },
  icon : {
    marginTop: 5,
    marginRight: 5,
    width: 20,

    
  }
});