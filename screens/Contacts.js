import React from 'react';
import { Text, View, } from 'react-native';
import { Footer, Footertab, Button, Icon} from 'native-base';
import { TabNavigator } from 'react-nativigation';
import ComeIn from './ComeIn';
import NotComeIn from './NotComeIn';


import Background from "../components/Background";
import NHSStyle from "../constants/NHSStyle";
import NHSInput from "../components/NHSInput";

const App = TabNavigator({
    Contact: { screen: Contacts },
    ComeIn: { screen: ComIn },git 
    NotComeIn: { screen: NotComeIn},
}, {
    tabBarPosition: 'bottom',
    tabBarComponent: props => { 
        return (
            <Footer> 
                <Footertab>
                    <Button
                    vertical
                    active = { props.nativationState.index == 0 }
                    onPress = {() => props.nativation.navigate('Contacts')}>
                    <Icon name="Contacts"/>
                    <Text>Contacts</Text>
                    </Button>

                    <Button
                    vertical
                    active = { props.nativationState.index == 1 }
                    onPress = {() => props.nativation.navigate('ComeIn')}>
                    <Icon name="Available"/>
                    <Text>Available</Text>
                    </Button>

                    <Button
                    vertical
                    active = { props.nativationState.index == 2 }
                    onPress = {() => props.nativation.navigate('NotComeIn')}>
                    <Icon name="Awaiting"/>
                    <Text>Awaiting</Text>
                    </Button>
                </Footertab>
            </Footer>
        )
    }
})

const styes = StyleSheet.create({
    container: {
        flex: 1,
        alignItem: 'center',
        justifyContent: 'center',

    },

    Button: {
        alignTop: 'top',
    },
});

export default Contact;