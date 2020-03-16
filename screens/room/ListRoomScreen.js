import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import { useSelector } from 'react-redux';
import RoomCard from '../../components/room/RoomCard';
import CustomHeaderButton from '../../components/ui/HeaderButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

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

export const ListRoomNavOptions = navData => {
    return {
        headerTitle: 'Matching Rooms',
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item 
                    title="Menu" 
                    iconName="ios-menu"
                    onPress={() => {
                        navData.navigation.toggleDrawer();
                    }}
                />
            </HeaderButtons>
        )
    }
}

const styles = StyleSheet.create({

});

export default ListRoomScreen;