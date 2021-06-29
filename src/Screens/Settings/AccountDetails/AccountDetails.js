import React, { useState } from 'react';
import { StyleSheet, View, Text, StatusBar, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import Entypo from 'react-native-vector-icons/dist/Entypo';
export default function AccountDetails(props) {
    const [userName, onChangeUserName] = React.useState("simple_snippet");
    const [email, onChangeEmail] = React.useState("s.snippet@example.com");
    const [passwordEyeIcon, setPasswordEyeIcon] = useState(true);
    const [password, onChangePassword] = React.useState("admin@123");
    const [institution, onChangeInstitution] = React.useState("Rutgers University");
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
            <Text style={styles._heading}>Settings</Text>
            {/* <==========================> --- <==========================> */}
            <View style={styles._main}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={styles._page_heading_main_text}>Account Details</Text>
                    {/* <==========================> --- <==========================> */}
                    <View style={styles._label_main}>
                        {userName !== "" ?
                            <Text style={styles._label}>Username</Text>
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
                        {password !== "" ?
                            <Text style={styles._label}>Password </Text>
                            : null}
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
                    <View style={styles._label_main}>
                        {institution !== "" ?
                            <Text style={styles._label}>Institution</Text>
                            : null}
                        <View style={styles._input_main}>
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeInstitution}
                                value={institution}
                                placeholder="institution "
                                placeholderTextColor="#7B8085"
                            />
                        </View>
                    </View>
                    {/* <==========================> --- <==========================> */}

                    <TouchableOpacity onPress={() => props.navigation.navigate("ConfirmYourInstitutionEmail")}>
                        <Text style={styles.Institution_btn_text}>Show My Institution on Leaderboards</Text>
                    </TouchableOpacity>

                    {/* <==========================> --- <==========================> */}
                    <TouchableOpacity style={styles._Save_btn} onPress={() => props.navigation.navigate("SettingsMain")}>
                        <Text style={styles._Save_btn_text}>Save</Text>
                    </TouchableOpacity>
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
    _Save_btn: {
        backgroundColor: "#4145D1",
        borderRadius: 10,
        height: 60,
        alignSelf: "center",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
        marginBottom:10
    },
    _Save_btn_text: {
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
    },
    _page_heading_main_text: {
        fontSize: 24,
        color: "#1C295D",
        fontWeight: "bold",
        marginTop: 20
    },
    inputPassword: {
        fontSize: 16,
        fontWeight: "bold",
        width: "80%"
    },
    Institution_btn_text: {
        fontSize: 14,
        color: "#C1C1C1",
        fontWeight: "bold",
        textAlign: "center",
        marginTop:20
    }
});