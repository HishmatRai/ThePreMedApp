import React, { useState } from 'react';
import { StyleSheet, View, Text, StatusBar, ScrollView, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
export default function Privacy(props) {
    return (
        <View style={styles.container}>

            {/* <==========================> --- <==========================> */}
            <StatusBar
                barStyle="black"
                hidden={false}
                backgroundColor="white"
                translucent={true}
            />

            {/* <==========================> --- <==========================> */}
            <TouchableOpacity style={styles._back_icon} onPress={() => props.navigation.goBack()}>
                <Ionicons name="chevron-back" size={30} color="#03042A" />
            </TouchableOpacity>
            <Text style={styles._heading}>Privacy</Text>
            {/* <==========================> --- <==========================> */}
            <View style={styles._main}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={styles._sub_heading}>Privacy Policy for Company Name</Text>
                    <Text style={styles._data}>King of the Curve is owned, operated, and maintained by King of the Curve LLC. King of the Curve the users’ rights to privacy and security.{"\n"}{"\n"}

                        Your privacy and security is of the utmost importance to us.{"\n"}
                        King of the Curve does not ask for your personal information unless we truly need it.{"\n"}
                        King of the Curve does not store user information at this time on our servers.{"\n"}
                        King of the Curve only uses anonymized analytics.{"\n"}{"\n"}

                        Disclaimer{"\n"}
                        King of the Curve cannot guarantee any information transmitted over the app. Transmitting personal information is done at your own risk.{"\n"}{"\n"}

                        Privacy Policy Changes
                        King of the Curve can make changes to the terms or conditions of the privacy policy. These changes will be posted on the site in a timely manner. King of the Curve reserves the right to modify the privacy policy at any time, so please review this frequently.
                    </Text>
                    {/* <==========================> --- <==========================> */}
                    <View style={{ marginBottom: 20 }}></View>
                </ScrollView>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    _main: {
        backgroundColor: "white",
        flex: 1,
        marginTop: 10,
        paddingLeft: 20,
        paddingRight: 20
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
    _heading: {
        color: "#03042A",
        fontSize: 33,
        fontWeight: "bold",
        marginLeft: 20,
        marginRight: 20

    },
    _sub_heading: {
        fontSize: 18,
        color: "#1C295D",
        fontWeight: "bold",
        marginTop: 20
    },
    _data: {
        fontSize: 18,
        color: "#7B8085",
        marginTop: 20,
    }
});