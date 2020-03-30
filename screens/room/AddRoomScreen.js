import React, { useState, Component } from "react";
import { View, Text, StyleSheet, Image, ScrollView, TextInput } from "react-native";
import Background from "../components/Background";
import NHSStyle from "../constants/NHSStyle";
import NHSInput from "../components/NHSInput";
import Theme from "../constants/Theme";
import ToggleSwitch from 'toggle-switch-react-native';
// Expo Vector-Icons
import { FontAwesome, EvilIcons, MaterialCommunityIcons, Foundation } from '@expo/vector-icons';

export class AddRoomScreen extends Component {
    render() {
      return (
        <ScrollView>
        <View style={styles.container}>
          <View>
            <Text style={{fontFamily: 'Frutiger', fontSize: 14, color: '#004280', marginLeft: 20, marginTop: 30, alignSelf: 'center'}}>Create Room</Text>
          </View>
          {/* Upload Photo Section */}
          <View style={styles.imageContainer}>
            <FontAwesome name="plus" size={48} color={'gray'} />
            <Text style={{color: 'grey'}}>Add Photo</Text>
          </View>
          
          {/* Enter Room Name and Description */}
          <View style={styles.inputContainer}> 
            <TextInput style={styles.textInput} placeholder="Room Name"/>
          </View>
          <View style={styles.inputContainer}> 
            <TextInput style={styles.textInput} placeholder="Description"/>
          </View>
          
          {/* Room Information  */}
          <View style={styles.featuresContainer}>
            <View style={styles.rowOne}>
              <View style={styles.containerBlue}>
              <FontAwesome name="user" size={20} color={'#1f80b5'} />
              </View>
              <View style={styles.border}>
                <View style={styles.innerTextContainer}>
                  <Text style={styles.innerText}>Number of People</Text>
                  <Text style={styles.innerTextSub}>0 People</Text>
                </View>
              </View>
            </View>
            <View style={styles.rowOne}>
              <View style={styles.containerPink}>
                <EvilIcons name="location" size={20} color={'#ff42a1'}/>
              </View>
              <View style={styles.border}>
                <View style={styles.innerTextContainer}>
                  <Text style={styles.innerText}>Location</Text>
                  <Text style={styles.innerTextSub}>WV1 3EB, Wolverhampton</Text>
                </View>
              </View>
            </View>
            <View style={styles.rowOne}>
              <View style={styles.containerYellow}>
                <MaterialCommunityIcons name="office-building" size={20} color={'#c9c900'} />
              </View>
              <View style={styles.border}>
                <View style={styles.innerTextContainer}>
                  <Text style={styles.innerText}>Office</Text>
                  <Text style={styles.innerTextSub}>Floor 3. Room 505</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
  
        <View style={styles.featureContainerHeader}>
          <Text style={styles.headerStyle}>Room Features</Text>
        </View>
  
          <View style={styles.featureContainer}>
            {/* Icon w/ Background */}
            <View style={styles.iconHolder}>
              <FontAwesome name="wifi" size={20} color={'#004280'}/>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.iconInnerText}>Wifi</Text>
            </View>   
            <ToggleSwitch/>       
          </View>
          <View style={styles.featureContainer}>
            {/* Icon w/ Background */}
            <View style={styles.iconHolder}>
              <FontAwesome name="car" size={20} color={'#004280'}/>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.iconInnerText}>Car Park</Text>
            </View>   
            <ToggleSwitch/>       
          </View>
          <View style={styles.featureContainer}>
            {/* Icon w/ Background */}
            <View style={styles.iconHolder}>
              <FontAwesome name="microphone" size={20} color={'#004280'}/>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.iconInnerText}>Microphone</Text>
            </View>   
            <ToggleSwitch/>       
          </View>
          <View style={styles.featureContainer}>
            {/* Icon w/ Background */}
            <View style={styles.iconHolder}>
              <MaterialCommunityIcons name="air-conditioner" size={20} color={'#004280'}/>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.iconInnerText}>Air Conditioning</Text>
            </View>   
            <ToggleSwitch/>       
          </View>
          <View style={styles.featureContainer}>
            {/* Icon w/ Background */}
            <View style={styles.iconHolder}>
              <Foundation name="projection-screen" size={20} color={'#004280'}/>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.iconInnerText}>Projector</Text>
            </View>   
            <ToggleSwitch/>       
          </View>
        </ScrollView>
      );
    }
  }
    export default AddRoomScreen;

  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff'
    },
    textContainer: {
      flex: 1,
      alignItems: "flex-start",
      marginLeft: 20,
      marginTop: 20,  
    },
    textInput: {
      height: 55,
      width: '90%',
      borderWidth: 1,
      borderColor: '#e6e6e6',
      borderRadius: 5,
      paddingLeft: 5,
      fontFamily: 'Frutiger',
      marginBottom: 5
    },
    imageContainer: {
      backgroundColor: '#e6e6e6',
      alignItems: "center",
      justifyContent: 'center',
      marginTop: 20,
      marginLeft: '5%', 
      marginBottom: 27,   
      height: 180,
      width: '90%'
    },
    headerText: {
      fontSize: 30
    },
    inputContainer: {
      alignItems: "center",
      marginBottom: 15
    },
    rowOne: {
      flexDirection: "row",
      marginBottom: 30, 
      borderBottomWidth: .7,
      borderBottomColor: '#ebeae8',
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
      backgroundColor: "#fff38a",
      alignItems: 'center',
      justifyContent: 'center'
    },
    innerText: {
      color: '#b5b5b5',
      fontSize: 14,
      fontFamily: 'Frutiger',
    },
    innerTextSub: {
      fontFamily: 'Frutiger',
      fontSize: 16,
      marginTop: 4,
      color: '#004280'
    },
    featureContainer: {
      flexDirection: "row",
      backgroundColor: '#fff',
      justifyContent: 'flex-start',
      alignItems: 'center',
      paddingBottom: 15
    },
    iconHolder: {
      height: 45,
      width: 45,
      backgroundColor: '#f5f5f5',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 5,
      marginLeft: 20,
      marginBottom: 10,
      marginRight: 15
    },
    textContainer: {
      width: '45%',
      marginRight: 40
    },
    iconInnerText: {
      fontFamily: 'Frutiger',
      fontSize: 16,
      color: '#004280',
      justifyContent: 'flex-start'
    },
    toggleHolder: {
      marginRight: 20
    },
    featureContainerHeader: {
      backgroundColor: '#fff',
      paddingBottom: 15,
      paddingLeft: 20
    },
    headerStyle: {
      fontSize: 16,
      fontFamily: 'Frutiger',
      color: '#004280'
    }
  });