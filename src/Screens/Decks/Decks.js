import React, { useState } from 'react';
import { StyleSheet, View, Text, StatusBar, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
export default function Decks(props) {
    const [selectInstitution, onChangeSelectInstitution] = React.useState("");
    return (
        <View style={styles.container}>

            {/* <==========================> --- <==========================> */}
            <StatusBar
                barStyle="white"
                hidden={false}
                backgroundColor="#9694FF"
                translucent={true}
            />
            {/* <==========================> --- <==========================> */}
            <TouchableOpacity style={styles._back_icon} onPress={() => props.navigation.goBack()}>
                <Ionicons name="chevron-back" size={30} color="white" />
            </TouchableOpacity>
            <Text style={styles._heading}>Decks</Text>
            <View style={styles._search_input_main}>
                <TextInput
                    style={styles._Search_input}
                    onChangeText={onChangeSelectInstitution}
                    value={selectInstitution}
                    placeholder="Search decks"
                    placeholderTextColor="#7B8085"
                />
                <MaterialIcons name="search" size={30} color="#8290AB" />
            </View>
            {/* <==========================> --- <==========================> */}
            <View style={styles._main}>
                <ScrollView showsVerticalScrollIndicator={false}>

                    {/* <==========================> --- <==========================> */}
<View style={styles._Card_main}>
    <TouchableOpacity style={styles._Card} onPress={() => props.navigation.navigate("DecksTags")}>
        <View style={styles._card_box}>
        <Ionicons name="add-sharp" size={30} color="#9694FF" />
        </View>
<Text style={styles._Card_heading}>New Deck</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles._Card2}>
        <View style={styles._card_box}>
        <FontAwesome name="file-o" size={30} color="#57CAEB" />
        </View>
<Text style={styles._Card_heading}>Deck example</Text>
    </TouchableOpacity>
</View>

<View style={styles._Card_main}>
    <TouchableOpacity style={styles._Card2}>
        <View style={styles._card_box}>
        <FontAwesome name="file-o" size={30} color="#57CAEB" />
        </View>
<Text style={styles._Card_heading}>Deck example</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles._Card2}>
        <View style={styles._card_box}>
        <FontAwesome name="file-o" size={30} color="#57CAEB" />
        </View>
<Text style={styles._Card_heading}>Deck example</Text>
    </TouchableOpacity>
</View>

<View style={styles._Card_main}>
    <TouchableOpacity style={styles._Card2}>
        <View style={styles._card_box}>
         <FontAwesome name="file-o" size={30} color="#57CAEB" />
        </View>
<Text style={styles._Card_heading}>Deck example</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles._Card2}>
        <View style={styles._card_box}>
        <FontAwesome name="file-o" size={30} color="#57CAEB" />
        </View>
<Text style={styles._Card_heading}>Deck example</Text>
    </TouchableOpacity>
</View>

<View style={styles._Card_main}>
    <TouchableOpacity style={styles._Card2}>
        <View style={styles._card_box}>
        <FontAwesome name="file-o" size={30} color="#57CAEB" />
        </View>
<Text style={styles._Card_heading}>Deck example</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles._Card2}>
        <View style={styles._card_box}>
        <FontAwesome name="file-o" size={30} color="#57CAEB" />
        </View>
<Text style={styles._Card_heading}>Deck example</Text>
    </TouchableOpacity>
</View>

<View style={styles._Card_main}>
    <TouchableOpacity style={styles._Card2}>
        <View style={styles._card_box}>
        <FontAwesome name="file-o" size={30} color="#57CAEB" />
        </View>
<Text style={styles._Card_heading}>Deck example</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles._Card2}>
        <View style={styles._card_box}>
        <FontAwesome name="file-o" size={30} color="#57CAEB" />
        </View>
<Text style={styles._Card_heading}>Deck example</Text>
    </TouchableOpacity>
</View>

<View style={styles._Card_main}>
    <TouchableOpacity style={styles._Card2}>
        <View style={styles._card_box}>
        <FontAwesome name="file-o" size={30} color="#57CAEB" />
        </View>
<Text style={styles._Card_heading}>Deck example</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles._Card2}>
        <View style={styles._card_box}>
        <FontAwesome name="file-o" size={30} color="#57CAEB" />
        </View>
<Text style={styles._Card_heading}>Deck example</Text>
    </TouchableOpacity>
</View>

<View style={styles._Card_main}>
    <TouchableOpacity style={styles._Card2}>
        <View style={styles._card_box}>
        <FontAwesome name="file-o" size={30} color="#57CAEB" />
        </View>
<Text style={styles._Card_heading}>Deck example</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles._Card2}>
        <View style={styles._card_box}>
        <FontAwesome name="file-o" size={30} color="#57CAEB" />
        </View>
<Text style={styles._Card_heading}>Deck example</Text>
    </TouchableOpacity>
</View>

<View style={{marginBottom:20}}></View>
                </ScrollView>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#9694FF"
    },
    _main: {
        backgroundColor: "white",
        flex: 1,
        marginTop: 40,
        borderTopLeftRadius: 30,
        paddingTop: 20,
        paddingLeft:20,
        paddingRight:20,
        borderTopEndRadius:30
    },
    _heading: {
        color: "white",
        fontSize: 33,
        fontWeight: "bold",
        marginLeft: 20,
        marginRight: 20

    },
    _Search_input: {
        fontSize: 16,
        fontWeight: "bold",
        width: "90%",
    },
    _input_main: {
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 5,
        justifyContent: "space-between",
    },
    _search_input_main: {
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 5,
        justifyContent: "space-between",
        backgroundColor: "white",
        margin: 20,
        paddingHorizontal: 10
    },
    _back_icon: {
        marginTop: 30,
        margin: 20,
        width: 40,
        height: 40,
        borderRadius: 40 / 2,
        alignItems: "center",
        justifyContent: "center"
    },
    _Card_main:{
flexDirection:"row",
alignItems:"center",
justifyContent:"space-between",
marginTop:20
    },
    _Card:{
backgroundColor:"#9694FF",
width:"48%",
borderRadius:10,
padding:20,
height:135,
alignItems:"center"
    },
    _Card2:{
        backgroundColor:"#57CAEB",
        width:"48%",
        borderRadius:10,
        padding:20,
        height:135,
        alignItems:"center"
            },
    _card_box:{
width:60,
height:60,
backgroundColor:"white",
borderRadius:10,
alignItems:"center",
justifyContent:"center"
    },
    _Card_heading:{
color:"white",
fontSize:16,
fontWeight:"bold",
marginTop:15
    }
});