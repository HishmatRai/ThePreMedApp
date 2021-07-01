import React, { useState } from 'react';
import { StyleSheet, View, Text, StatusBar, ScrollView, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import InstitutionHighScoreTabs from './../../Components/InstitutionHighScoreTabs/InstitutionHighScoreTabs'
export default function GlobalHighScore(props) {
    return (
        <View style={styles.container}>

            {/* <==========================> --- <==========================> */}
            <StatusBar
                barStyle="white"
                hidden={false}
                backgroundColor="#54C1FB"
                translucent={true}
            />
            {/* <==========================> --- <==========================> */}
            <View style={styles._header_main}>
                <TouchableOpacity style={styles._back_icon} onPress={() => props.navigation.goBack()}>
                    <Ionicons name="chevron-back" size={30} color="white" />
                </TouchableOpacity>
                <Text style={styles._heading}>Global High Score</Text>
            </View>
            {/* <==========================> --- <==========================> */}
            <View style={styles._main}>
                <ScrollView showsVerticalScrollIndicator={false}>

                    {/* <==========================> --- <==========================> */}

                    <InstitutionHighScoreTabs />

                </ScrollView>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#54C1FB"
    },
    _main: {
        flex: 1,
        marginTop: 40,
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20
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