import React, { useState } from 'react';
import { StyleSheet, View, Text, StatusBar, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
export default function ConfirmYourInstitutionEmail(props) {
    const [email, onChangeEmail] = React.useState("");
    const [selectInstitution, onChangeSelectInstitution] = React.useState("");
console.log(email)
    return (
        <View style={styles.container}>

            {/* <==========================> --- <==========================> */}
            <StatusBar
                barStyle="white"
                hidden={false}
                backgroundColor="#0A3180"
                translucent={true}
            />
            {/* <==========================> --- <==========================> */}
            <TouchableOpacity style={styles._back_icon} onPress={() => props.navigation.goBack()}>
                <Ionicons name="chevron-back" size={30} color="white" />
            </TouchableOpacity>
            <Text style={styles._heading}>Confirm Your{"\n"}Institution Email</Text>
            <View style={styles._search_input_main}>
                <TextInput
                    style={styles._Search_input}
                    onChangeText={onChangeSelectInstitution}
                    value={selectInstitution}
                    placeholder="Select your institution "
                    placeholderTextColor="#7B8085"
                />
                <MaterialIcons name="search" size={30} color="#8290AB" />
            </View>
            {/* <==========================> --- <==========================> */}
            <View style={styles._main}>
                <ScrollView showsVerticalScrollIndicator={false}>

                    {/* <==========================> --- <==========================> */}
                    <View style={styles._label_main}>
                        {email !== "" ?
                            <Text style={styles._label}>Email</Text>
                            : null}
                        <View style={styles._input_main}>
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeEmail}
                                value={email}
                                placeholder="Enter your institution email "
                                placeholderTextColor="#7B8085"
                            />
                        </View>
                    </View>
                    {/* <==========================> --- <==========================> */}
                    <TouchableOpacity style={styles._Confirm_btn}>
                        <Text style={styles._Confirm_btn_text}>Confirm!</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0A3180"
    },
    _main: {
        backgroundColor: "white",
        flex: 1,
        marginTop: 40,
        borderTopLeftRadius: 50,
        paddingTop: 20,
        paddingLeft:20,
        paddingRight:20
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
    _Confirm_btn: {
        backgroundColor: "#4145D1",
        borderRadius: 10,
        height: 60,
        alignSelf: "center",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 100,
    },
    _Confirm_btn_text: {
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
    _label: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#7B8085",
        marginBottom: -10
    },
    _label_main: {
        borderBottomColor: "#EFEFEF",
        borderBottomWidth: 1,
        marginTop: 10
    }
});