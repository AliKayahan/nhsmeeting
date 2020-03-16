import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Background from '../components/Background';
import NHSStyle from '../constants/NHSStyle';
import NHSInput from '../components/NHSInput';
import Theme from '../constants/Theme';

const RoomList = () => {
<Vıew>
    <View style={StyleSheet.Title}>
    <Tıtle style={NHSStyle.header1}>
    Month Planning
    </Tıtle>
<Image>

</Image>
</View>

<View>
<Text style={styles.members}>
Members
</Text>
</View>

<View>
<Text style={styles.confirmation}>
    Are you going?
</Text>

<Image>

</Image>
</View>


<View>
    <Image>

    </Image>
<Text>
    Calendar
</Text>
</View>
<View>
    <Text>
        Location
    </Text>
<Image>
    
</Image>
</View>

<View>
    <Image>

    </Image>

    <Text>
        Office
    </Text>
</View>




</Vıew>
}

const styles = StyleSheet.create ({
Title:  {
flex: 1,
},
members: {
  flex: 1,  
},

});



