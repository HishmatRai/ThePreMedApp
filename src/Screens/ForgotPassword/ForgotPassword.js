import React, { useState } from 'react';
import { StyleSheet, View, Text, StatusBar, ScrollView, TextInput, Modal, TouchableOpacity, Image, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import { BlurView } from "@react-native-community/blur";
export default function ForgotPassword(props) {
    const [userName, onChangeUserName] = React.useState("");
    const [email, onChangeEmail] = React.useState("");
    const [modalVisible, setModalVisible] = useState(false);


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
            <View style={styles._main}>
                <ScrollView showsVerticalScrollIndicator={false}>

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
                    <TouchableOpacity style={styles._Recover_btn} onPress={() => setModalVisible(!modalVisible)}>
                        <Text style={styles._Recover_btn_text}>Recover My Password</Text>
                    </TouchableOpacity>

                    <View>
                        <Image
                            source={require("./../../img/forgotPasswordImg.png")}
                            style={styles.ForgotPasswordImg}
                        />
                    </View>
                </ScrollView>
            </View>

            {/* <==========================> --- <==========================> */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <BlurView >
                        <View style={styles.modalView}>
                            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={styles._close_btn}>
                                <Entypo name="cross" size={20} color="#707070" />
                            </TouchableOpacity>
                            <View style={styles._popup_email}>
                                <MaterialCommunityIcons name="email-outline" size={50} color="#4145D1" />
                            </View>
                            <Text style={styles.modalText}>Thank you. An email has been sent to your account with a link that will allow you to reset your password</Text>
                            <TouchableOpacity style={styles._open_email_btn} >
                                <Text style={styles._open_email_btn_text}>Open your email app</Text>
                            </TouchableOpacity>
                        </View>
                    </BlurView>
                </View>
            </Modal>
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
    _open_email_btn: {
        backgroundColor: "#4145D1",
        borderRadius: 10,
        height: 60,
        alignSelf: "center",
        width: 250,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30
    },
    _Recover_btn_text: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold"
    },
    _open_email_btn_text: {
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
    },
    modalView: {
        backgroundColor: "white",
        borderRadius: 20,
        padding: 36,
        width: "90%",

    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    _close_btn: {
        width: 36,
        height: 36,
        borderRadius: 36 / 2,
        backgroundColor: "#EFEFEF",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "flex-end"
    },
    _popup_email: {
        width: 118,
        height: 118,
        backgroundColor: "#E8E8FF",
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center"
    },
    modalText: {
        fontSize: 20,
        color: "#7B8085",
        marginTop: 10,
        textAlign: "center"
    }
});