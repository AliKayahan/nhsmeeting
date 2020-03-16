import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

const RoomDetailScreen = (props) =>{
    const roomId = props.navigation.getParam('roomId');
    const selectedRoom = useSelector(state => 
        state.rooms.availableRooms.find(room => room.id === roomId)
    );

    return(
        <View>
            <Text>{selectedRoom.name}</Text>
        </View>
    );
};

export const RoomDetailNavOptions = navData => {
    return{
        headerTitle: navData.navigation.getParam('roomName')
    };
}


const styles = StyleSheet.create({

});

export default RoomDetailScreen;