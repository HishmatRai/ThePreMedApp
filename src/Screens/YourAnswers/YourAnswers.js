import React, { useState } from 'react';
import { StyleSheet, View, Text, StatusBar, ScrollView, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import Entypo from 'react-native-vector-icons/dist/Entypo';
export default function YourAnswers(props) {
    let QuestionOptions = [
        { Questionnumber: "Question 1", aPer: "10%", bPer: "20%", cPer: "50%", dper: "20%" },
        { Questionnumber: "Question 2", aPer: "10%", bPer: "20%", cPer: "50%", dper: "20%" },
        { Questionnumber: "Question 3", aPer: "10%", bPer: "20%", cPer: "50%", dper: "20%" },
        { Questionnumber: "Question 4", aPer: "10%", bPer: "20%", cPer: "50%", dper: "20%" },
        { Questionnumber: "Question 5", aPer: "10%", bPer: "20%", cPer: "50%", dper: "20%" },
        { Questionnumber: "Question 6", aPer: "10%", bPer: "20%", cPer: "50%", dper: "20%" },
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
            <Text style={styles._heading}>Your Answers</Text>
            {/* <==========================> --- <==========================> */}
            <View style={styles._main}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {QuestionOptions.map((v, i) => {
                        return (
                            <View style={styles._questions_list_main}>
                                <View style={styles._questions_list_header}>
                                    <Text style={styles._questions_list_title}>{v.Questionnumber} </Text>
                                    <View style={styles._flag_main}>
                                        <Entypo name="bookmark" size={20} color="#8290AB" />
                                        <FontAwesome name="flag-o" size={20} color="#8290AB" />
                                    </View>
                                </View>
                                <View style={styles._optionAB_main}>
                                    <View style={styles._incorrect_option_main}>
                                        <Text style={styles._options_A_text}>Answer A</Text>
                                        <Text style={styles._options_A_text}>{v.aPer}</Text>
                                    </View>
                                    <View style={styles._option_b_main}>
                                        <Text style={styles._options_B_text}>Answer B</Text>
                                        <Text style={styles._options_B_text}>{v.bPer}</Text>
                                    </View>
                                </View>
                                <View style={styles._optionAB_main}>
                                    <View style={styles._correct_option_main}>
                                        <Text style={styles._options_C_text}>Answer C</Text>
                                        <Text style={styles._options_C_text}>{v.cPer}</Text>
                                    </View>
                                    <View style={styles._option_b_main}>
                                        <Text style={styles._options_B_text}>Answer D</Text>
                                        <Text style={styles._options_B_text}>{v.dper}</Text>
                                    </View>
                                </View>
                                <Text style={styles._Explanation}>Explanation etc etc</Text>
                            </View>
                        )
                    })}
                    <View style={{ marginBottom: 20 }}></View>
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
        paddingBottom: 0,
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
    _questions_list_main: {
        marginTop: 10
    },
    _questions_list_header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 30
    },
    _flag_main: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "15%"
    },
    _questions_list_title: {
        fontSize: 16,
        color: "#4145D1",
        fontWeight: "bold"
    },
    _optionAB_main: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 15
    },
    _incorrect_option_main: {
        flexDirection: "row",
        alignItems: "center",
        height: 40,
        width: "49%",
        borderRadius: 5,
        paddingHorizontal: 10,
        justifyContent: "space-between",
        backgroundColor: "#FFD9D8"
    },
    _correct_option_main: {
        flexDirection: "row",
        alignItems: "center",
        height: 40,
        width: "49%",
        borderRadius: 5,
        paddingHorizontal: 10,
        justifyContent: "space-between",
        backgroundColor: "#A7FFD8"
    },
    _option_b_main: {
        flexDirection: "row",
        alignItems: "center",
        height: 40,
        width: "49%",
        borderRadius: 5,
        paddingHorizontal: 10,
        justifyContent: "space-between",
        backgroundColor: "#EFEFEF"
    },
    _options_A_text: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#FF0606"
    },
    _options_B_text: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#7B8085"
    },
    _options_C_text: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#41C188"
    },
    _Explanation: {
        fontSize: 14,
        color: "#7B8085",
        fontWeight: "bold",
        marginTop: 20
    }
});