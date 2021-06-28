import React, { useState } from 'react';
import { StyleSheet, View, Text, StatusBar, ScrollView, TextInput, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import Fontisto from 'react-native-vector-icons/dist/Fontisto';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
export default function ForgotPassword(props) {
    const [userName, onChangeUserName] = React.useState("");
    const [passwordEyeIcon, setPasswordEyeIcon] = useState(true);
    const [password, onChangePassword] = React.useState("");

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

                        <View style={styles._input_main}>
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeUserName}
                                value={userName}
                                placeholder="User name"
                                placeholderTextColor="#7B8085"
                            />
                        </View>
                        <View style={styles._input_main}>
                            <TextInput
                                style={styles.inputPassword}
                                onChangeText={onChangePassword}
                                value={password}
                                placeholder="Password"
                                placeholderTextColor="#7B8085"
                                secureTextEntry={passwordEyeIcon}
                            />
                            {passwordEyeIcon ? (
                                <Entypo name="eye" size={24} color="#8290AB"
                                    onPress={() => setPasswordEyeIcon(!passwordEyeIcon)} />
                            ) : (
                                <Entypo name="eye-with-line" size={24} color="#8290AB"
                                    onPress={() => setPasswordEyeIcon(!passwordEyeIcon)} />
                            )}
                        </View>

                        {/* <==========================> --- <==========================> */}
                        <TouchableOpacity style={styles._Recover_btn}>
                            <Text style={styles._Recover_btn_text}>Recover My Password</Text>
                        </TouchableOpacity>
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
    inputPassword: {
        fontSize: 16,
        fontWeight: "bold",
        width: "80%"
    },
    _input_main: {
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 5,
        padding: 10,
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
        marginTop: 3
    },
    _Recover_btn_text: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold"
    },
    _back_icon: {
        marginTop: 50,
        margin: 20,
        width: 40,
        height: 40,
        borderRadius: 40 / 2,
        alignItems: "center",
        justifyContent: "center"
    }
});