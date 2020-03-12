import React from 'react';
import {FlatList, Text} from 'react-native';
import { useSelector } from 'react-redux';

// We are planning to list and manage room state within this function
const ListRoomScreen = props => {
    //Select rooms from redux store
    const rooms = useSelector(state => state.rooms.availableRooms);
    return (
        <FlatList 
            data={rooms} 
            renderItem={itemData => <Text>{itemData.item.name}</Text>} 
        />
    );
};

ListRoomScreen.navigationOptions = {
    headerTitle: 'Matching Rooms'
}


export default ListRoomScreen;