import React from 'react';
import {View, Text, StyleSheet, Image } from 'react-native';
import { createTopTabNavigator } from 'react-natigation';
import Background from './components/Background';
import Theme from './constants/Theme';
import NHSStyle from './constants/NHSStyle';
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { Searchbar } from 'react-native-elements';


const All = props => {
    return( 

    <ScrollView> 
        <Background>
        <View style = {styles.addmembersContainer}> 

            {/* still need amanding */}
            <View style={styles.alphabetcolumn}>
                <Text style={NHSStyle.smallText}><Text>#</Text><Text>A</Text><Text>B</Text><Text>C</Text><Text>D</Text><Text>E</Text>
                <Text>F</Text><Text>G</Text><Text>H</Text><Text>I</Text><Text>J</Text><Text>K</Text><Text>L</Text><Text>M</Text>
                <Text>N</Text><Text>O</Text><Text>P</Text><Text>Q</Text><Text>R</Text><Text>S</Text><Text>T</Text><Text>U</Text>
                <Text>V</Text><Text>W</Text><Text>X</Text><Text>Y</Text><Text>Z</Text></Text>
            </View> */}


        {/* top section of the page */}
            <View style={styles.topsectiondetail}> 
                <Text style={[NHSStyle.header, {color: Theme.color.blue1}]}>Cancel</Text>

                <View style={styles.AddMemberText}>
                    <Text>Add Members</Text>
                    <Text style={[NHSStyle.smallText, {color: Theme.color.black}]}>1/20</Text>
                </View>

                <Text style={[NHSStyle.header, {color: Theme.color.blue1}]}>Done</Text>
            </View>


        {/* Searchbar */}
            <Searchbar/>


            {/* selected member bubble image */}
            <View style = {styles.addedmembercontainer}>
                <View style={[styles.profilePic2]}>
                        <View style={styles.selected}> 
                            <Ionicons name="close-circle" size={15} color={Theme.color.grey4}/>
                        </View>
                    <Image source={{uri: 'https://randomuser.me/api/portraits/men/11.jpg'}} style={styles.profilePic} />
                </View> 
            </View>

            {/* section a */}
                <View style={styles.contactchar}>
                    <Text style={NHSStyle.header}>A</Text>
                </View>

            {/* individual contact starts here - checked */}
                <View style={styles.containerA}>
                    <View style={styles.contactContainer}>
                        <View>
                            <ion-icon name="checkmark-circle" size={30} color={Theme.color.grey4}></ion-icon>
                        </View>

                            <Image source={{uri: 'https://randomuser.me/api/portraits/men/11.jpg'}} style={styles.profilePic} />

                        <View style={styles.membersDetail}>
                            <View style={style.flexcontact}>
                                <View style={[NHSStyle.header, {lineHeight: 21}]}>Bill Anderson</View>
                            </View>
                        </View> 
                    </View>
            {/* divider between individual contacts - unchecked */}
                    <View style={styles.contactContainer}>
                        <View  style={[styles.statusContainer, styles.statusCancel, style={paddingleft:15}]}>
                            <Text style={styles.uncheckedIcon}></Text>
                        </View>

                            <Image source={{uri: 'https://randomuser.me/api/portraits/men/11.jpg'}} style={styles.profilePic} />
                        <View style={styles.membersDetail}>
                            <View style={style.flexcontact}>
                                <View style={[NHSStyle.header, {lineHeight: 21}]}>Bill Anderson</View>
                            </View>
                        </View> 
                    </View>
            {/* divider - unchecked */}
                    <View style={styles.contactContainer}>
                        <View  style={[styles.statusContainer, styles.statusCancel, style={paddingleft:15}]}>
                            <Text style={styles.uncheckedIcon}></Text>
                        </View>

                            <Image source={{uri: 'https://randomuser.me/api/portraits/men/11.jpg'}} style={styles.profilePic} />
                        <View style={styles.membersDetail}>
                            <View style={style.flexcontact}>
                                <View style={[NHSStyle.header, {lineHeight: 21}]}>Bill Anderson</View>
                            </View>
                        </View> 
                    </View>

                </View>

        {/* section b */}
            <View style={styles.containerA}>
                <View style={styles.contactchar}>
                    <Text style={NHSStyle.header}>B</Text>
                </View>
        {/* checked */}
                <View style={styles.containerA}>
                    <View style={styles.contactContainer}>
                        <View>
                            <ion-icon name="checkmark-circle" size={30} color={Theme.color.grey4}></ion-icon>
                        </View>

                            <Image source={{uri: 'https://randomuser.me/api/portraits/men/11.jpg'}} style={styles.profilePic} />

                        <View style={styles.membersDetail}>
                            <View style={style.flexcontact}>
                                <View style={[NHSStyle.header, {lineHeight: 21}]}>Bill Anderson</View>
                            </View>
                        </View> 
                    </View>
        {/* unchecked */}
                    <View style={styles.contactContainer}>
                        <View style={[styles.statusContainer, styles.statusCancel, style={paddingleft:15}]}>
                            <Text style={styles.uncheckedIcon}></Text>
                        </View>

                            <Image source={{uri: 'https://randomuser.me/api/portraits/men/11.jpg'}} style={styles.profilePic} />
                        <View style={styles.membersDetail}>
                            <View style={style.flexcontact}>
                                <View style={[NHSStyle.header, {lineHeight: 21}]}>Bill Anderson</View>
                            </View>
                        </View> 
                    </View>
        {/* checked */}
                    <View style={styles.contactContainer}>
                        <View>
                            <ion-icon name="checkmark-circle" size={30} color={Theme.color.grey4}></ion-icon>
                        </View>

                            <Image source={{uri: 'https://randomuser.me/api/portraits/men/11.jpg'}} style={styles.profilePic} />

                        <View style={styles.membersDetail}>
                            <View style={style.flexcontact}>
                                <View style={[NHSStyle.header, {lineHeight: 21}]}>Bill Anderson</View>
                            </View>
                        </View> 
                    </View>
                </View>
            </View>



        {/* section c */}
            <View style={styles.containerA}>
                <View style={styles.contactchar}>
                    <Text style={NHSStyle.header}>C</Text>
                </View>
        {/* checked */}
                <View style={styles.containerA}>
                    <View style={styles.contactContainer}>
                        <View>
                            <ion-icon name="checkmark-circle" size={30} color={Theme.color.grey4}></ion-icon>
                        </View>

                            <Image source={{uri: 'https://randomuser.me/api/portraits/men/11.jpg'}} style={styles.profilePic} />

                        <View style={styles.membersDetail}>
                            <View style={style.flexcontact}>
                                <View style={[NHSStyle.header, {lineHeight: 21}]}>Bill Anderson</View>
                            </View>
                        </View> 
                    </View>
        {/* unchecked */}
                    <View style={styles.contactContainer}>
                        <View style={[styles.statusContainer, styles.statusCancel, style={paddingleft:15}]}>
                            <Text style={styles.uncheckedIcon}></Text>
                        </View>

                            <Image source={{uri: 'https://randomuser.me/api/portraits/men/11.jpg'}} style={styles.profilePic} />
                        <View style={styles.membersDetail}>
                            <View style={style.flexcontact}>
                                <View style={[NHSStyle.header, {lineHeight: 21}]}>Bill Anderson</View>
                            </View>
                        </View> 
                    </View>
        {/* checked */}
                    <View style={styles.contactContainer}>
                        <View>
                            <ion-icon name="checkmark-circle" size={30} color={Theme.color.grey4}></ion-icon>
                        </View>

                            <Image source={{uri: 'https://randomuser.me/api/portraits/men/11.jpg'}} style={styles.profilePic} />

                        <View style={styles.membersDetail}>
                            <View style={style.flexcontact}>
                                <View style={[NHSStyle.header, {lineHeight: 21}]}>Bill Anderson</View>
                            </View>
                        </View> 
                    </View>
                </View>
            </View>
        </View>
        </Background>
    </ScrollView>
)}

const styles = StyleSheet.create({
    topsectiondetail: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        justifyContent: "center",
    },
    alphabetcolumn: {
        right: 10,
        paddingRight: 15,
        position: 'absolute',
        flexDirection: "column",
    },
    AddMemberText: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    addedmembercontainer: {
        backgroundColor: Theme.color.white,
        shadowColor: Theme.color.grey4,
        shadowOpacity: 1,
        shadowOffset: {width:14, height: 0},
        shadowRadius: 15,
        width: "100%",
        height: "100%",
    },
    contactchar: {
        left: 10,
        paddingleft: 15,
    },
    addmembersContainer: {
       backgroundColor: Theme.color.white,
        width: "100%",
        height: "100%",
        borderRadius: 20,
        shadowColor: Theme.color.grey4,
        shadowOpacity: 1,
        shadowOffset: {width:14, height: 0},
        shadowRadius: 15,
    },
    profilePic: {
        width:25,
        height:25,       
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 10,
    },
    selected: {
        overflow: "hidden",
        width: 20,
        height: 20,
        position: "absolute",
        top: -3,
        left: 40,
        zIndex: 99
    },
    uncheckedIcon: {
        width: 15,
        height: 15,
        borderWidth: 4,
        borderRadius: 3,
        borderColor: Theme.color.blue1,
    },
    profilePic2: {
        flexDirection: 'row',
        shadowColor: Theme.color.grey4,
        shadowOpacity: 1,
        shadowOffset: {width:14, height: 0},
        shadowRadius: 15,
        width: "100%",
        height: "100%",
    },
    contactContainer: {
            backgroundColor: Theme.color.white,
            width: "100%",
            height: "100%",
            borderRadius: 10,
            shadowColor: Theme.color.grey4,
            shadowOpacity: 1,
            shadowOffset: {width:0, height: 3},
            shadowRadius: 4,
            elevation: 6,
            flexDirection: "row",
    },
    flexcontact: {
        flexDirection: "row",
        paddingLeft: 15,
    },
    containerA: {
        flexDirection: 'row',
        paddingLeft: 15,
    },
})

export default AddMembersScreen;