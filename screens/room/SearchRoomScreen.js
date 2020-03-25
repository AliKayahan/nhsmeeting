import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Background from '../../components/Background';
import NHSStyle from '../../constants/NHSStyle';
import Theme from '../../constants/Theme';
import NHSInput from '../../components/NHSInput';
import {Ionicons} from '@expo/vector-icons';
import { TextInput } from 'react-native';
import { Button } from 'react-native-paper';

const SearchRoomScreen = (props) =>{
    return( 
        <Background>
            <View style={styles.headerContainer}>
                <Text style={NHSStyle.mediumHeader}>Find Room</Text>
                <Text style={NHSStyle.subTitle}>Where do you want to host meeting?</Text>
            </View>
            <View style={styles.searchContainer}>
                <View style={styles.inputContainer}>
                    <Ionicons name='ios-calendar' size={36} color={Theme.color.purple2}  />
                    <View style={styles.inputWrapper}>
                        <TextInput style={{...styles.textInput, ...NHSStyle.subTitle}} placeholder='Time - Date' placeholderTextColor={Theme.color.black} />
                    </View>
                </View>
                <View style={{...styles.inputContainer, paddingLeft: 24}}>
                    <Ionicons name='ios-pin' size={36} color={Theme.color.purple2}  />
                    <View style={{...styles.inputWrapper, marginLeft: 22}}>
                        <TextInput style={{...styles.textInput, ...NHSStyle.subTitle}} placeholder='Location' placeholderTextColor={Theme.color.black} />
                    </View>
                </View>
                <View style={{...styles.inputContainer, borderBottomWidth: 0}}>
                    <Ionicons name='ios-people' size={36} color={Theme.color.purple2}  />
                    <View style={styles.inputWrapper}>
                        <TextInput style={{...styles.textInput, ...NHSStyle.subTitle}} placeholder='Capacity' placeholderTextColor={Theme.color.black} />
                    </View>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <Button 
                    mode="contained" 
                    uppercase={false}
                    color={Theme.color.purple1}
                    contentStyle={styles.searchButtonContent}
                    labelStyle={styles.searchButtonLabel}
                    style={styles.searchButton}
                    onPress={() => console.log('Search')}>
                    Find Room
                </Button>
            </View>
            <View style={styles.roomLister}>
                <View style={styles.roomsNearbyHeaderContainer}>
                    <Text style={{...NHSStyle.smallText, color: Theme.color.black}}>Rooms Nearby</Text>
                    <Text style={{...NHSStyle.smallText, color: Theme.color.purple1}}> (8)</Text>
                </View>
                <View>
                    
                </View>
            </View>
        </Background>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        marginTop: 20,
        marginLeft: 15
    },
    searchContainer: {
        width: '93%',
        height: '30%',
        borderRadius: 15,
        marginLeft: 15,
        marginTop: 20,
        backgroundColor: Theme.color.white,
        shadowColor: Theme.color.grey4,
        shadowOpacity: 1,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 10,
    },
    inputContainer:{
        padding: 15,
        paddingLeft: 20,
        borderBottomWidth:1,
        borderBottomColor: Theme.color.grey2,
        flex:1,
        flexDirection: 'row'
    },
    inputWrapper:{
        marginLeft: 15,
        justifyContent: 'center',
        alignContent: 'center'
    },
    textInput: {},
    buttonContainer: {
        width: '93%',
        shadowColor: Theme.color.grey4,
        shadowOpacity: 1,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 10,
        marginTop: 20,
        marginLeft: 15,
    },
    searchButton: {
        height: 55
    },
    searchButtonLabel: {
        fontFamily: 'Frutiger-Light-Bold',
        fontSize: 16,
        paddingTop: 12
    },
    roomLister:{
        marginVertical: 25,
        width: '100%',
        height: 50,
        paddingLeft: 15
    },
    roomsNearbyHeaderContainer: {
        flex: 1,
        flexDirection: 'row'
    }
});

export default SearchRoomScreen;