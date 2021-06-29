import React, { useState } from 'react';
import { StyleSheet, View, Text, StatusBar, ScrollView, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
export default function TermsOfService(props) {
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
            <Text style={styles._heading}>Terms Of Service</Text>
            {/* <==========================> --- <==========================> */}
            <View style={styles._main}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={styles._sub_heading}>Privacy Policy for Company Name</Text>
                    <Text style={styles._data}>
                        At Website Name, accessible at Website.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Website Name and how we use it.{"\n"}{"\n"}

                        If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us through email at {"\n"}Email@Website.com{"\n"}{"\n"}

                        This privacy policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Website Name. This policy is not applicable to any information collected offline or via channels other than this website
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