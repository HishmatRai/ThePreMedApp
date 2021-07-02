import React, { useState } from 'react';
import { StyleSheet, View, Text, StatusBar, ScrollView, TouchableOpacity, Alert, Modal, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import { BlurView } from "@react-native-community/blur";
export default function Explanation(props) {
    const [modalVisible, setModalVisible] = useState(false);
    let QuestionAnswer = [
        {
            question: '500 Scientists penned an open letter to say there is no "climate emergency." ',
            heading: "Explanation",
            option: "Lorem Ipsum has been the inustry's standard dummy text ever sice the 1500s, when an unknown priter took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into veryyg electronic typesetting, remaining eshsentially unchanged. It was popularised in the 1960s with the relea.",
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
                <TouchableOpacity style={styles._Next_btn}>
                    <Text style={styles._Next_btn_text}>Next</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles._heading}>Explanation</Text>

            {/* <==========================> --- <==========================> */}
            <View style={styles._main}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {QuestionAnswer.map((v, i) => {
                        return (
                            <View style={styles._question_show_main}>
                                <View style={styles._question_main}>
                                    <Text style={styles._question}>{v.question}</Text>
                                </View>
                                <View style={styles._options_main} >
                                    <Text style={styles._options_heading}>{v.heading}</Text>
                                    <Text style={styles._options}>{v.option}</Text>
                                </View>
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
                            <Image
                                source={require("./../../img/correct.png")}
                                style={styles.correct}
                            />
                            <Text style={styles._popup_title}>Correct!</Text>
                            <TouchableOpacity style={styles._Show_Explanation_btn} >
                                <Text style={styles._Show_Explanation_btn_text}>Show Explanation</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles._Bookmark_Question_btn} >
                                <Text style={styles._Bookmark_Question_btn_text}>Bookmark Question</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles._open_email_btn} onPress={() => props.navigation.navigate("Round")}>
                                <Text style={styles._open_email_btn_text}>Next</Text>
                            </TouchableOpacity>
                            <Text style={styles.modalText}>You need x more correct answers
                                to get a badge!</Text>
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
        marginTop: 10

    },
    _haeder_main: {
        marginTop: 50,
        marginHorizontal: 20,
        alignSelf: 'flex-end'
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
        padding: 20
    },
    _options: {
        fontSize: 16,
        color: "#1C295D",
        marginTop: 10
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
        fontSize: 14,
        color: "#C1C1C1",
        marginTop: 10,
        textAlign: "center",
        paddingLeft: 25,
        paddingRight: 25,
        fontWeight: "bold",
        marginBottom: 20
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
        marginTop: 10,
        marginBottom: 20
    },
    _Show_Explanation_btn: {
        backgroundColor: "#FF817E",
        borderRadius: 10,
        height: 60,
        alignSelf: "center",
        width: 250,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
    },
    _Bookmark_Question_btn: {
        backgroundColor: "#41C188",
        borderRadius: 10,
        height: 60,
        alignSelf: "center",
        width: 250,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
    },
    _open_email_btn_text: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold"
    },
    _Show_Explanation_btn_text: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold"
    },
    _Bookmark_Question_btn_text: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold"
    },
    correct: {
        alignSelf: "center",
        width: 223,
        height: 176,
        marginTop: 30
    },
    _popup_title: {
        fontSize: 24,
        color: "#1C295D",
        textAlign: "center",
        fontWeight: "bold"
    },
    _Next_btn: {
        backgroundColor: "#54C1FB",
        borderRadius: 50,
        width: 100,
        height: 30,
        alignItems: "center",
        justifyContent: "center"
    },
    _Next_btn_text: {
        fontSize: 13,
        color: 'white',
        fontWeight: "bold"
    },
    _options_heading: {
        color: "#1C295D",
        fontWeight: "bold",
        fontSize: 16,
        marginTop: 10
    }
});