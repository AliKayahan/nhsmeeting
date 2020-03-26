import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import Background from '../../components/Background';
import NHSStyle from '../../constants/NHSStyle';
import Theme from '../../constants/Theme';
import { FlatList } from 'react-native-gesture-handler';
import { Header } from 'react-navigation-stack';
import { Button } from 'react-native-paper';

export default class MeetingDetails extends React.Component {
render() {
return (
    <Background>
<View style={styles.container}>
<View style={NHSStyle.h1}> 
    <Header placement='center'
    centercomponent={{text: 'Meeting Details', style: { color: '#fff'} }}
    rightComponent={{icon: 'Edit', color: '#fff'}}
    />
    <Text style={NHSStyle.header2}>Month Planning</Text>
</View>

    
<ScrollView>
<View style={styles.h2}>
    <Text ScrollView style={NHSStyle.header2}> Members </Text>

    <Image>
    </Image>
</View>




<View style={style.h2}>
<Text style={NHSStyle.header2}> Are you going? 
<Button></Button>
</Text>
</View>


<View style={styles.buttons}>
<View style={styles.bnt1}>
<Button> 
    <Text style={NHSStyle.subheader1}>Monday, 10th 2020</Text> 
    <Image/>
    <Text style={NHSStyle.header2}>10:00 AM - 11:00AM</Text>
</Button> 
</View> 
 
<View style={styles.bnt1}>
 <Button>
   <Text style={NHSStyle.subheader1}>Location</Text>
    <Image/>
    <Text>WV1 3EB, Wolverhampton</Text>
</Button> 
</View>

<View style={styles.bnt1}>
<Button>
   <Text style={NHSStyle.subheader1}>Room</Text>
    <Image/>
    <Text styles={NHSStyle.header2}>Room 505, 3rd floor </Text>
</Button> 
</View>
</View>



<View>
    <Text style={NHSStyle.header2}>Description</Text>
    <Text style={styles.description}>
    A paragraph is a series of related sentences developing a central idea, called the topic. 
    Try to think about paragraphs in terms of thematic unity: 
    a paragraph is a sentence or a group of sentences that supports one central, 
    unified idea. 
    Paragraphs add one idea at a time to your broader argument.
    </Text>
</View>


<View>

</View>
</ScrollView>
</View>
</Background>
)}};



const styles=StyleSheet.create({
container: {
    flex: 1,
    },
h1: {
flex: 1,
height: '10%',
    },
h2: {
    flex: 1
    },
descrption: {
    fontSize: 18,
    color: Theme.color.black,
    alignSelf: 'center',
    },
buttons: {
    flex: 1,
    flexDirection: 'column',
    },
bnt1: {
    height: '30%',
},
});



export default MeetingDetails;