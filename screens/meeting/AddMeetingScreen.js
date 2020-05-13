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

export class AddMeetingScreen extends Component {
    render() {
      return (
        <ScrollView>
        <View style={styles.container}>     
          {/* Input Room Name */}
          <View style={styles.inputContainer}> 
            <NHSInput placeholder="Month Planning"/>
            <NHSInput placeholder="Subtitle"/>
            <NHSInput placeholder="Description of Meeting"/> 
   
          </View>
          
          {/* Room Options Settings  */}
          <View style={styles.featuresContainer}>
            <View style={styles.rowOne}>
              <View style={styles.containerBlue}>
              <FontAwesome name="calendar" size={20} color={'#1f80b5'} />
              </View>
              <Text style={styles.innerText}>
                Monday, April 10 {"\n"}10:00AM - 11:00AM
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
              <View style={styles.containerPeopleCount}>
                <MaterialCommunityIcons name="office-building" size={20} color={'#c9c900'} />
              </View>
              <Text style={styles.innerText}>Apple Office{"\n"}Room 505, 3. Floor</Text>
            </View>
            <View style={styles.rowOne}>
              <View style={styles.containerColorSelect}>
                <FontAwesome name="user" size={20} color={'#1f80b5'} backgroundColor={''} />
              </View>
              <Text style={styles.innerText}>Number of People{"\n"}10 People</Text>
            </View>
            <View style={styles.rowOne}>
              <View style={styles.containerNotification} backgroundColor={'#d6d6d6'}>
                <FontAwesome name="square" size={20} color={'#af00b5'} />
              </View>
              <Text style={styles.innerText}>Color Select{"\n"}Default Color</Text>
            </View>
            <View style={styles.rowOne}>
              <View style={styles.containerYellow}>
                <FontAwesome name="bell" size={20} color={'#ffa536'} />
              </View>
              <Text style={styles.innerText}>Notification{"\n"}Every 30 Minutes</Text>
              <ToggleSwitch/>
            </View>
          </View>      
        </View>
        </ScrollView>
      );
    }
  }

export default AddMeetingScreen;

// New Meeting styles
const styles = StyleSheet.create({
    container: {},
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
      backgroundColor: "#ffc680",
      alignItems: 'center',
      justifyContent: 'center'
    },
    innerText: {
      marginTop: 7,
      marginRight: 80,
      color: Theme.color.grey1,
      fontSize: 16,
      
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
     
    },
    containerColorSelect: {
      height: 45,
      width: 45,
      marginRight: 20,
      marginLeft: 20,
      borderRadius: 5,
      backgroundColor: "#96d4fa",
      alignItems: 'center',
      justifyContent: 'center'
    },
    containerPeopleCount: {
      height: 45,
      width: 45,
      marginRight: 20,
      marginLeft: 20,
      borderRadius: 5,
      backgroundColor: "#ffff0a",
      alignItems: 'center',
      justifyContent: 'center'
    },
    containerNotification: {
      height: 45,
      width: 45,
      marginRight: 20,
      marginLeft: 20,
      borderRadius: 5,
      backgroundColor: "#ffff0a",
      alignItems: 'center',
      justifyContent: 'center'
    }
  });