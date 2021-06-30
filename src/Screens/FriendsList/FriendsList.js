import React, { useState } from 'react';
import { StyleSheet, View, Text, StatusBar, ScrollView, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
export default function FriendsList(props) {
    const ListData = [
        { heading: "king_of_curve" },
        { heading: "Orlando Diggs" },
        { heading: "Alec Whitten" },
        { heading: "Raymond Atkins" },
        { heading: "Dawson Dixon" },
        { heading: "Chana Hays" },
    ]
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
            <Text style={styles._heading}>Friends List</Text>
            {/* <==========================> --- <==========================> */}
            <View style={styles._main}>
                <ScrollView showsVerticalScrollIndicator={false}>

                    {/* <==========================> --- <==========================> */}
                    {ListData.map((v, i) => {
                        return (

                            <View style={styles._list_main}>
                                <View style={styles._list_heading_main}>
                                    <Text style={styles._list_heading}>{v.heading}</Text>
                                </View>
                                <TouchableOpacity style={styles._challenge_btn}>
                                    <Text style={styles._challenge_btn_text}>Challenge</Text>
                                </TouchableOpacity>
                                <View style={styles._unadd_main}>
                                    <Text style={styles._unadd_text}>Unadd</Text>
                                </View>
                            </View>
                        )
                    })}
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
        padding: 20,
    },
    _heading: {
        color: "white",
        fontSize: 33,
        fontWeight: "bold",
        marginLeft: 20,
        marginRight: 20

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
    _list_main: {
        marginTop: 40,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    _list_heading_main: {
        width: "45%"
    },
    _challenge_btn: {
        backgroundColor: "#EBF9F3",
        width: "30%",
        height: 30,
        alignItems: "center",
        justifyContent: "center"
    },
    _unadd_main: {
        backgroundColor: "#F9EBEB",
        width: "20%",
        height: 30,
        alignItems: "center",
        justifyContent: "center"
    },
    _list_heading: {
        fontSize: 16,
        color: "#1C295D",
        fontWeight: "bold"
    },
    _challenge_btn_text: {
        fontSize: 16,
        color: "#41C188",
        fontWeight: "bold",
        textAlign: "center"
    },
    _unadd_text: {
        color: "#DB4242",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center"
    }
});