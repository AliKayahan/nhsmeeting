import React, {useEffect} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import RoomCard from '../../components/room/RoomCard';
import * as RoomActions from '../../store/actions/room';
// We are planning to list and manage room state within this function
const ListRoomScreen = props => {
    //Select rooms from redux store
    const rooms = useSelector(state => state.rooms.availableRooms);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(RoomActions.fetchRooms(''));
    }, [dispatch]);

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
                        onViewDetail={() => {
                            props.navigation.navigate('RoomDetailScreen', {
                                roomId: itemData.item.id,
                                roomName: itemData.item.name
                            })
                        }}
                    >
                    </RoomCard>
                )} 
            />
        </View>
    );
};

export const ListRoomNavOptions = (navData) => {
    return {
        headerTitle: 'Matching Rooms'
    }
}

const styles = StyleSheet.create({

});

export default ListRoomScreen;