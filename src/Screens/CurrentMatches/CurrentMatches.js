import React, { useState } from 'react';
import { StyleSheet, View, Text, StatusBar, ScrollView, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
export default function CurrentMatches(props) {
    const ListData = [
        { bgcolor: "#FFEBDC", color: "#FF9912", title: "Player A", days: "2 Days" },
        { bgcolor: "#DCF4FF", color: "#5DACDA", title: "Player B", days: "4 Days" },
        { bgcolor: "#FFDCDC", color: "#FF817E", title: "Player C", days: "6 Days" },
        { bgcolor: "#DCFFEA", color: "#5DDAB4", title: "Player D", days: "10 Days" },
        { bgcolor: "#DCE9FF", color: "#9694FF", title: "Player E", days: "20 Days" },
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
            <Text style={styles._heading}>Current Matches</Text>
            {/* <==========================> --- <==========================> */}
            <View style={styles._main}>
                <ScrollView showsVerticalScrollIndicator={false}>

                    {/* <==========================> --- <==========================> */}
                    {ListData.map((v, i) => {
                        return (

                            <View style={[styles._list_main, { backgroundColor: v.bgcolor }]}>
                                <View style={styles._remanig_time_main}>
                                    <MaterialCommunityIcons name="alarm" size={25} color="#FE6F6F" />
                                    <View>
                                        <Text style={styles._remaing_days}>{v.days}</Text>
                                        <Text style={styles._remaing_days}>Remaining</Text>
                                    </View>
                                </View>
                                <Text style={[styles._Card_tilte, { color: v.color }]}>{v.title}</Text>
                            </View>
                        )
                    })}

                    <View style={{ marginBottom: 30 }}></View>
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
        marginTop: 20,
        height: 120,
        borderRadius: 10,
        padding: 10
    },
    _remanig_time_main: {
        backgroundColor: "white",
        height: 45,
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        alignSelf: "flex-end",
        borderRadius: 5,
        justifyContent: "space-between",
        width: "35%"

    },
    _remaing_days: {
        fontSize: 12,
        color: "#FE6F6F",
        fontWeight: "bold"
    },
    _Card_tilte: {
        fontWeight: "bold",
        fontSize: 24,
        marginLeft: 20,
        marginTop: -10
    }
});