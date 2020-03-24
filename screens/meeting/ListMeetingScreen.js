import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CustomHeaderButton from '../../components/ui/HeaderButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import Background from '../../components/Background';

const ListMeetingScreen = (props) =>{
    return(
        <Background>
            <Text>List Meetings!</Text>
        </Background>
    );
};

const styles = StyleSheet.create({

});

export default ListMeetingScreen;