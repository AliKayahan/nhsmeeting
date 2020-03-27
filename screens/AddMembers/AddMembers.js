import React from 'react';
import {View, Text, StyleSheet, Image, FlatList, ActivityIndicator } from 'react-native';
import Contacts from '../Contacts/Contacts';
import Background from '../../components/Background';
import NHSStyle from '../../constants/NHSStyle';
import Theme from '../../constants/Theme';
import { SafeAreaView } from 'react-navigation';
import { TextInput } from 'react-native-paper';


export default class AddMembers extends React.Component {
    constructor() {
        super()
        this.state={
            isLoading: false,
            contacts: []
        }
    }


async componentDidMount() {
    this.setState({ isLoading: true})
    this.loadContact()
}
loadContact = async()=> {
    const {data} = await Contacts.getContactsAsync({
        fields:[Contacts.Fields.FirstName, 
        Contacts.Fields.LastName]
    })
    this.setState({contacts:data,isLoading: false})
}

renderItem = ({ item }) => (
    <View style={styles.contacts}>
<Text>
        {item.firstname}
        {item.firstname}
    </Text>
    <Text>
        {item.phonenumbers[0].digits}
    </Text>
    </View>
)

    render() {
        return (
            <Background>
            <View style={styles.container}>
            <TextInput 
            placeholder="Search"
            placeholderTextColor= {Theme.color.grey3}
            />

            <View style={styles.body}>
            </View>

            {this.state.isLoading?
            <View style={{...NHSStyle.absoluteFill, alignItems: 'center', justifyContent: 'center'}}>
            <ActivityIndicator size='large' color= {Theme.color.black} />
            </View>
        ) : null 
        }

        <FlatList
        data={this.state.contacts}
        renderItem={this.renderItem}
        ListEmptyComponent={()=>
        <View>
        <Text style={NHSStyle.black}>No Contacts Found</Text>
        </View>
        }
        />
            
            </View>
            </Background>
        )
    }
};

const styles = StyleSheet.Create({
    container:{
        flex: 1,
    },
    body: {
        flex: 1,
    },
    contacts:{
        flex: 1,
        flexDirection: 'column',
    },
});