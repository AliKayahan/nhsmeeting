import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import { useSelector } from 'react-redux';
import RoomCard from '../../components/room/RoomCard';

// We are planning to list and manage room state within this function
const ListRoomScreen = props => {
    //Select rooms from redux store
    const rooms = useSelector(state => state.rooms.availableRooms);
    return (
        <View style={styles.roomCardContainer}>
            <FlatList 
                data={rooms} 
                renderItem={itemData => (
                    <RoomCard 
                        name={itemData.item.name}
                        building={itemData.item.building}
                        floor={itemData.item.floor}
                        images={itemData.item.images}  
                        features={itemData.item.features}  
                        capacity={itemData.item.capacity}
                    >
                    </RoomCard>
                )} 
            />
        </View>
    );
};

ListRoomScreen.navigationOptions = {
    headerTitle: 'Matching Rooms'
}

const styles = StyleSheet.create({

});

export default ListRoomScreen;