import React, { useState } from 'react';
import { StyleSheet, View, Text, StatusBar, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import Entypo from 'react-native-vector-icons/dist/Entypo';
export default function AllFlashcards(props) {
    const [selectInstitution, onChangeSelectInstitution] = React.useState("");
    return (
        <View style={styles.container}>

            {/* <==========================> --- <==========================> */}
            <StatusBar
                barStyle="white"
                hidden={false}
                backgroundColor="#333333"
                translucent={true}
            />
            {/* <==========================> --- <==========================> */}
            <TouchableOpacity style={styles._back_icon} onPress={() => props.navigation.goBack()}>
                <Entypo name="cross" size={30} color="#333333" />
            </TouchableOpacity>
            <Text style={styles._heading}>All Flashcards</Text>
            {/* <==========================> --- <==========================> */}
            <View style={styles._main}>
                <ScrollView showsVerticalScrollIndicator={false}>

                    {/* <==========================> --- <==========================> */}
<View style={styles._Card_main}>
    <TouchableOpacity style={styles._Card2} >
        <View style={styles._card_box}>
        <FontAwesome name="file-o" size={30} color="#57CAEB" />
        </View>
<Text style={styles._Card_heading}>Flashcards 1</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles._Card2}>
        <View style={styles._card_box}>
        <FontAwesome name="file-o" size={30} color="#57CAEB" />
        </View>
<Text style={styles._Card_heading}>Flashcards 2</Text>
    </TouchableOpacity>
</View>

<View style={styles._Card_main}>
    <TouchableOpacity style={styles._Card2}>
        <View style={styles._card_box}>
        <FontAwesome name="file-o" size={30} color="#57CAEB" />
        </View>
<Text style={styles._Card_heading}>Flashcards 3</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles._Card2}>
        <View style={styles._card_box}>
        <FontAwesome name="file-o" size={30} color="#57CAEB" />
        </View>
<Text style={styles._Card_heading}>Flashcards 4</Text>
    </TouchableOpacity>
</View>

<View style={styles._Card_main}>
    <TouchableOpacity style={styles._Card2}>
        <View style={styles._card_box}>
        <FontAwesome name="file-o" size={30} color="#57CAEB" />
        </View>
<Text style={styles._Card_heading}>Flashcards 5</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles._Card2}>
        <View style={styles._card_box}>
        <FontAwesome name="file-o" size={30} color="#57CAEB" />
        </View>
<Text style={styles._Card_heading}>Flashcards 6</Text>
    </TouchableOpacity>
</View>

<View style={styles._Card_main}>
    <TouchableOpacity style={styles._Card2}>
        <View style={styles._card_box}>
        <FontAwesome name="file-o" size={30} color="#57CAEB" />
        </View>
<Text style={styles._Card_heading}>Flashcards 7</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles._Card2}>
        <View style={styles._card_box}>
        <FontAwesome name="file-o" size={30} color="#57CAEB" />
        </View>
<Text style={styles._Card_heading}>Flashcards 8</Text>
    </TouchableOpacity>
</View>

<View style={styles._Card_main}>
    <TouchableOpacity style={styles._Card2}>
        <View style={styles._card_box}>
        <FontAwesome name="file-o" size={30} color="#57CAEB" />
        </View>
<Text style={styles._Card_heading}>Flashcards 9</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles._Card2}>
        <View style={styles._card_box}>
        <FontAwesome name="file-o" size={30} color="#57CAEB" />
        </View>
<Text style={styles._Card_heading}>Flashcards 10</Text>
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
        backgroundColor: "#333333"
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
    _back_icon: {
        marginTop: 50,
        margin: 20,
        width: 40,
        height: 40,
        borderRadius: 40 / 2,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor:'white',
        alignSelf:"flex-end"
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