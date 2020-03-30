import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableWithoutFeedback} from 'react-native';
import Background from '../../components/Background';
import NHSStyle from '../../constants/NHSStyle';
import Theme from '../../constants/Theme';
import {Ionicons} from '@expo/vector-icons';
import { TextInput } from 'react-native';
import { Button } from 'react-native-paper';
import {useSelector} from 'react-redux';
import RoomCardThumb from '../../components/room/RoomCardThumb';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { useColorScheme } from 'react-native-appearance';

let flatListRef;

const SearchRoomScreen = (props) =>{
    const rooms = useSelector(state => state.rooms.availableRooms);  
    const [modalIsOn, setModalIsOn] = useState(false);

    const handleDatePickerConfirm = () => {
        setModalIsOn(false);
    }

    const handleDatePickerCancel = () => {
        setModalIsOn(false);
    }

    const colorScheme = useColorScheme();
    const isDark = colorScheme === 'dark';

    useEffect(() => {
        flatListRef.scrollToIndex({animated: true, index:2});   
    }, []);
    // array of variables that can trigger an update if they change. Pass an
    // an empty array if you just want to run it once after component mounted. 

    return( 
        <Background>
            <View style={styles.headerContainer}>
                <Text style={NHSStyle.mediumHeader}>Find Room</Text>
                <Text style={NHSStyle.subTitle}>Where do you want to host meeting?</Text>
            </View>
            <View style={styles.searchContainer}>
                <TouchableWithoutFeedback onPress={() => {
                                    setModalIsOn(true)
                                }}>
                    <View style={styles.inputContainer}>
                        <Ionicons name='ios-calendar' size={36} color={Theme.color.purple2}  />
                            <View style={styles.inputWrapper}>
                                {/* TODO: fix keyboard for android https://github.com/facebook/react-native/issues/14045 */}
                                <TextInput 
                                    editable={isDark} 
                                    style={{...styles.textInput, ...NHSStyle.subTitle}} 
                                    placeholder='Time - Date' 
                                    placeholderTextColor={Theme.color.black} />
                            </View>
                    </View>
                </TouchableWithoutFeedback>
                <View style={{...styles.inputContainer, paddingLeft: 24}}>
                    <Ionicons name='ios-pin' size={36} color={Theme.color.purple2}  />
                    <View style={{...styles.inputWrapper, marginLeft: 22}}>
                        <TextInput style={{...styles.textInput, ...NHSStyle.subTitle}} placeholder='Location' placeholderTextColor={Theme.color.black} />
                    </View>
                </View>
                <View style={{...styles.inputContainer, borderBottomWidth: 0}}>
                    <Ionicons name='ios-people' size={36} color={Theme.color.purple2}  />
                    <View style={styles.inputWrapper}>
                        <TextInput 
                            style={{...styles.textInput, ...NHSStyle.subTitle}} 
                            placeholder='Capacity' 
                            placeholderTextColor={Theme.color.black} 
                            keyboardType='number-pad'
                            maxLength={2}
                        />
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
            <View>
                <DateTimePickerModal
                    isVisible={modalIsOn}
                    mode="datetime"
                    onConfirm={handleDatePickerConfirm}
                    onCancel={handleDatePickerCancel}
                    isDarkModeEnabled={isDark}
                />     
            </View>
            <View style={styles.roomLister}>
                <View style={styles.roomsNearbyHeaderContainer}>
                    <Text style={{...NHSStyle.smallText, color: Theme.color.black}}>Rooms Nearby</Text>
                    <Text style={{...NHSStyle.smallText, color: Theme.color.purple1}}> ({rooms.length})</Text>
                </View>
                <View style={styles.roomCardThumbs}>
                    <FlatList 
                        data={rooms} 
                        horizontal={true}
                        getItemLayout={(data, index) => { return {length: 33, index, offset: 33 * index} }}
                        ref={(ref) => { flatListRef = ref; }}
                        renderItem={itemData => (
                            <RoomCardThumb 
                                name={itemData.item.name}
                                building={itemData.item.building}
                                floor={itemData.item.floor}
                                images={itemData.item.images}  
                                features={itemData.item.features}  
                                capacity={itemData.item.capacity}
                                onViewDetail={() => {
                                    props.navigation.navigate('RoomDetailScreen', {
                                        roomId: itemData.item.id,
                                        roomName: itemData.item.name
                                    })
                                }}
                            >
                            </RoomCardThumb>
                        )} 
                    />
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
        height: 278,
        paddingLeft: 15
    },
    roomsNearbyHeaderContainer: {
        flexDirection: 'row'
    },
    roomCardThumbs: {
        marginLeft: -18
    },
    modalBottom: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    modalButton: {
        width: '100%',
        height: 50,
        borderRadius: 15,
        backgroundColor: Theme.color.white
    },
});

export default SearchRoomScreen;