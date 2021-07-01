import React, { useState } from 'react';
import { StyleSheet, View, Text, StatusBar, ScrollView, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import PlansCompareTabs from './../../Components/PlansCompareTabs/PlansCompareTabs'
export default function UpgradetoPremium(props) {
    return (
        <View style={styles.container}>

            {/* <==========================> --- <==========================> */}
            <StatusBar
                barStyle="white"
                hidden={false}
                backgroundColor="#05062D"
                translucent={true}
            />
            {/* <==========================> --- <==========================> */}
            <View style={styles._header_main}>
                <TouchableOpacity style={styles._back_icon} onPress={() => props.navigation.navigate("UpgradetoPremium2")}>
                    <Ionicons name="chevron-back" size={30} color="white" />
                </TouchableOpacity>
            </View>
            {/* <==========================> --- <==========================> */}
            <View style={styles._main}>
                {/* <==========================> --- <==========================> */}
                <PlansCompareTabs />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#05062D"
    },
    _main: {
        flex: 1,
        marginTop: 10,
        paddingTop: 20,
    },
    _heading: {
        color: "white",
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 5

    },
    _back_icon: {
        marginTop: 30,
        margin: 20,
        width: 40,
        height: 40,
        borderRadius: 40 / 2,
        alignItems: "center",
        justifyContent: "center",
    },
    _header_main: {
        flexDirection: "row",
        alignItems: "center",
        padding: 0
    },
    _tabs: {
        width: "100%",
        backgroundColor: "red"
    }
});