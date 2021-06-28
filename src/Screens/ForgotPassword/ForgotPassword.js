import React, { useState } from 'react';
import { StyleSheet, View, Text, StatusBar, ScrollView, TextInput, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
export default function ForgotPassword(props) {
    const [userName, onChangeUserName] = React.useState("");
    const [email, onChangeEmail] = React.useState("");

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
            <Text style={styles._heading}>Forgot Password</Text>
            {/* <==========================> --- <==========================> */}
            <SafeAreaView>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles._main}>

                        {/* <==========================> --- <==========================> */}
                        <View style={styles._label_main}>
                            {userName !== "" ?
                                <Text style={styles._label}>Enter your username</Text>
                                : null}
                            <View style={styles._input_main}>
                                <TextInput
                                    style={styles.input}
                                    onChangeText={onChangeUserName}
                                    value={userName}
                                    placeholder="Enter your username: "
                                    placeholderTextColor="#7B8085"
                                />
                            </View>
                        </View>
                        <View style={styles._label_main}>
                            {email !== "" ?
                                <Text style={styles._label}>Email</Text>
                                : null}
                        <View style={styles._input_main}>
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeEmail}
                                value={email}
                                placeholder="Email "
                                placeholderTextColor="#7B8085"
                            />
                        </View>
                        </View>
                        {/* <==========================> --- <==========================> */}
                        <TouchableOpacity style={styles._Recover_btn}>
                            <Text style={styles._Recover_btn_text}>Recover My Password</Text>
                        </TouchableOpacity>

                        <View>
                            <Image
                                source={require("./../../img/forgotPasswordImg.png")}
                                style={styles.ForgotPasswordImg}
                            />
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
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
        padding: 20
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
        justifyContent: "space-between"
    },
    _Recover_btn: {
        backgroundColor: "#4145D1",
        borderRadius: 10,
        height: 60,
        alignSelf: "center",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30
    },
    _Recover_btn_text: {
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
    ForgotPasswordImg: {
        width: "100%",
        height: 238,
        marginTop: 20
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