import React, { useState } from 'react';
import { StyleSheet, View, Text, StatusBar, ScrollView, TouchableOpacity, Alert, Modal, Image } from 'react-native';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import { BlurView } from "@react-native-community/blur";
export default function EndlessModePlay(props) {
    const [modalVisible, setModalVisible] = useState(false);
    let QuestionAnswer = [
        {
            question: '500 Scientists penned an open letter to say there is no "climate emergency." ',
            option1: "It is an old photo not taken in Russia",
            option2: "It is an old photo not taken in Russia",
            option3: "It is an old photo not taken in Russia",
            option4: "It is an old photo not taken in Russia",
        }
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
            <View style={styles._haeder_main}>
                <View style={styles._heart_main}>
                    <AntDesign name="heart" size={20} color="white" />
                    <AntDesign name="heart" size={20} color="white" />
                    <AntDesign name="heart" size={20} color="white" />
                    <AntDesign name="heart" size={20} color="white" />
                    <AntDesign name="heart" size={20} color="white" />
                </View>
                <TouchableOpacity style={styles._end_round_btn} onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={styles._end_round_btn_text}>End Round</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles._title}>General Chemistry</Text>
            <Text style={styles._heading}>Subtopic</Text>

            <View style={styles._question_counter__show_main}>
                <View style={styles._help}>
                    <Ionicons name="md-help-outline" size={20} color="white" />
                </View>
                <View style={styles._question_counter__main}>
                    <Text style={styles._active_question}>05</Text>
                    <Text style={styles._active_question}>/</Text>
                    <Text style={styles._total_counter}>10</Text>
                </View>
            </View>
            {/* <==========================> --- <==========================> */}
            <View style={styles._main}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {QuestionAnswer.map((v, i) => {
                        return (
                            <View style={styles._question_show_main}>
                                <View style={styles._question_main}>
                                    <Text style={styles._question}>{v.question}</Text>
                                </View>

                                <TouchableOpacity style={styles._options_main} onPress={() => setModalVisible(!modalVisible)}>
                                    <Text style={styles._options}>{v.option1}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles._options_main} onPress={() => setModalVisible(!modalVisible)}>
                                    <Text style={styles._options}>{v.option2}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles._options_main} onPress={() => setModalVisible(!modalVisible)}>
                                    <Text style={styles._options}>{v.option3}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles._options_main} onPress={() => setModalVisible(!modalVisible)}>
                                    <Text style={styles._options}>{v.option4}</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    })}
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
                            <TouchableOpacity onPress={() => props.navigation.navigate("GameOver")} style={styles._close_btn}>
                                <Entypo name="cross" size={20} color="#707070" />
                            </TouchableOpacity>
                            <Image
                                source={require("./../../img/PremiumPopup.png")}
                                style={styles.PremiumPopup}
                            />
                            <Text style={styles._popup_title}>Go Premium Now!</Text>
                            <Text style={styles.modalText}>Unlock over 3000 questions, explanations for all questions, and more!</Text>
                            <TouchableOpacity style={styles._open_email_btn} >
                                <Text style={styles._open_email_btn_text}>Buy now</Text>
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
        paddingBottom: 0,
        paddingHorizontal: 20
    },
    _heading: {
        color: "white",
        fontSize: 33,
        fontWeight: "bold",
        marginLeft: 20,
        marginRight: 20,
        textAlign: "center",
        marginTop: 10

    },
    _haeder_main: {
        marginTop: 40,
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 20,
        justifyContent: "space-between"
    },
    _heart_main: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "40%"
    },
    _end_round_btn: {
        backgroundColor: "#54C1FB",
        height: 40,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        width: "30%"
    },
    _end_round_btn_text: {
        fontSize: 13,
        color: "white",
        fontWeight: "bold",
    },
    _title: {
        textAlign: "center",
        fontSize: 24,
        fontWeight: "bold",
        color: 'white',
        marginTop: 20
    },
    _question_counter__show_main: {
        marginRight: 20,
        alignSelf: "flex-end",
        flexDirection: "row",
        alignItems: "center"
    },
    _help: {
        borderColor: "white",
        borderWidth: 2,
        borderRadius: 5,
        width: 30,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 20
    },
    _question_counter__main: {
        flexDirection: "row",
        alignItems: "center"
    },
    _active_question: {
        color: 'white',
        fontSize: 14,
        fontWeight: "bold"
    },
    _total_counter: {
        color: "#4D4D4D",
        fontWeight: "bold",
        fontSize: 14
    },
    _question_show_main: {
        marginTop: 20
    },
    _question_main: {
        backgroundColor: "#FFE6AC",
        borderRadius: 10,
        padding: 20
    },
    _question: {
        color: "#03042B",
        fontSize: 20,
        fontWeight: "bold"
    },
    _options_main: {
        backgroundColor: "#EFEFEF",
        marginTop: 20,
        borderRadius: 5,
        padding: 10
    },
    _options: {
        fontSize: 16,
        color: "#1C295D",
        fontWeight: "bold"
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
    modalText: {
        fontSize: 19,
        color: "#C1C1C1",
        marginTop: 10,
        textAlign: "center",
        paddingLeft: 25,
        paddingRight: 25,
        fontWeight: "bold"
    },
    modalView: {
        backgroundColor: "white",
        borderRadius: 20,
        padding: 10,
        width: "90%",

    },
    _open_email_btn: {
        backgroundColor: "#4145D1",
        borderRadius: 10,
        height: 60,
        alignSelf: "center",
        width: 250,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
        marginBottom: 20
    },
    _open_email_btn_text: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold"
    },
    PremiumPopup: {
        alignSelf: "center",
        width: 242,
        height: 216
    },
    _popup_title: {
        fontSize: 24,
        color: "#1C295D",
        textAlign: "center",
        fontWeight: "bold"
    }
});