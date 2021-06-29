import React, { useState } from 'react';
import { StyleSheet, View, Text, StatusBar, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
export default function SiriShortcuts(props) {
    const [userName, onChangeUserName] = React.useState("");
    return (
        <View style={styles.container}>

            {/* <==========================> --- <==========================> */}
            <StatusBar
                barStyle="white"
                hidden={false}
                backgroundColor="#03042B"
                translucent={true}
            />

            {/* <==========================> --- <==========================> */}
            <TouchableOpacity style={styles._back_icon} onPress={() => props.navigation.goBack()}>
                <Ionicons name="chevron-back" size={30} color="white" />
            </TouchableOpacity>
            <Text style={styles._heading}>Settings</Text>
            {/* <==========================> --- <==========================> */}
            <View style={styles._main}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={styles._page_heading_main_text}>Siri Shortcuts</Text>
                    {/* <==========================> --- <==========================> */}
                        <View style={styles._input_main}>
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeUserName}
                                value={userName}
                                placeholder="Review MCAT Questions"
                                placeholderTextColor="#7B8085"
                            />
                        </View>
                    {/* <==========================> --- <==========================> */}
                    <TouchableOpacity style={styles._Save_btn} onPress={() => props.navigation.navigate("SettingsMain")}>
                        <Text style={styles._Save_btn_text}>Add To Siri</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#03042B"
    },
    _main: {
        backgroundColor: "white",
        flex: 1,
        marginTop: 40,
        borderTopEndRadius: 20,
        borderTopLeftRadius: 20,
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20
    },
    _heading: {
        color: "white",
        fontSize: 33,
        fontWeight: "bold",
        marginLeft: 20,
        marginRight: 20

    },
    input: {
        fontSize: 16,
        fontWeight: "bold",
        width: "100%"
    },
    _input_main: {
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 5,
        justifyContent: "space-between",
        marginTop:50
    },
    _Save_btn: {
        backgroundColor: "#4145D1",
        borderRadius: 10,
        height: 60,
        alignSelf: "center",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 250,
        marginBottom:10
    },
    _Save_btn_text: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold"
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
    _page_heading_main_text: {
        fontSize: 24,
        color: "#1C295D",
        fontWeight: "bold",
        marginTop: 20
    },
});