import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Background from '../../components/Background';
import NHSStyle from '../../constants/NHSStyle';
import Theme from '../../constants/Theme';
import NHSInput from '../../components/NHSInput';
import {Ionicons} from '@expo/vector-icons';
import { TextInput } from 'react-native';
import { Button } from 'react-native-paper';
import {useSelector} from 'react-redux';
import RoomCardThumb from '../../components/room/RoomCardThumb';
import DateTimePicker from '@react-native-community/datetimepicker';
import Modal from 'react-native-modal';

let flatListRef;

const SearchRoomScreen = (props) =>{
    const rooms = useSelector(state => state.rooms.availableRooms);  
    const [modalIsOn, setModalIsOn] = useState(false);

    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showMode = currentMode => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

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
                <View style={styles.inputContainer}>
                    <Ionicons name='ios-calendar' size={36} color={Theme.color.purple2}  />
                    <View style={styles.inputWrapper}>
                        {/* <RNDateTimePicker display="spinner" /> */}
                        {/* <TextInput style={{...styles.textInput, ...NHSStyle.subTitle}} placeholder='Time - Date' placeholderTextColor={Theme.color.black} /> */}
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
                <Modal isVisible={modalIsOn}>
                    <View style={{ flex: 1 , ...styles.modalBottom}}>
                        <View style={{backgroundColor: 'white', width:'100%', height: 200, borderRadius:20}} >
                            <DateTimePicker
                                testID="dateTimePicker"
                                timeZoneOffsetInMinutes={0}
                                value={date}
                                mode={mode}
                                is24Hour={true}
                                swipeDirection={['up', 'left', 'right', 'down']}
                                onChange={onChange}
                            />
                        </View>
                    </View>
                </Modal>
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
});

export default SearchRoomScreen;