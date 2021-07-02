import React, { useState } from 'react';
import { StyleSheet, View, Text, StatusBar, ScrollView, TouchableOpacity, Alert, Modal, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import { BlurView } from "@react-native-community/blur";
import Entypo from 'react-native-vector-icons/dist/Entypo';
import VideoPlayer from '../../Components/Video'
export default function BehavioralScienceTest(props) {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);
    const [modalVisible3, setModalVisible3] = useState(false);
    let QuestionAnswer = [
        {
            question: '500 Scientists penned an open letter to say there is no "climate emergency." ',
            option1: "It is an old photo not taken in Russia (C)",
            option2: "It is an old photo not taken in Russia (I)",
            option3: "It is an old photo not taken in Russia (I)",
            option4: "It is an old photo not taken in Russia (I)",
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
            <Text style={styles._heading}>Behavioral {"\n"}Science</Text>

            <View style={styles._time_main}>
                <Ionicons name="alarm-outline" size={30} color="white" />
                <Text style={styles._time}>02:08</Text>
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
                                <TouchableOpacity style={styles._options_main} onPress={() => setModalVisible2(!modalVisible2)}>
                                    <Text style={styles._options}>{v.option2}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles._options_main} onPress={() => setModalVisible2(!modalVisible2)}>
                                    <Text style={styles._options}>{v.option3}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles._options_main} onPress={() => setModalVisible2(!modalVisible2)}>
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
                            <Image
                                source={require("./../../img/correct.png")}
                                style={styles.correct}
                            />
                            <Text style={styles._popup_title}>Correct!</Text>
                            <TouchableOpacity style={styles._Show_Explanation_btn} onPress={() => props.navigation.navigate("Explanation")}>
                                <Text style={styles._Show_Explanation_btn_text}>Show Explanation</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles._Bookmark_Question_btn} >
                                <Text style={styles._Bookmark_Question_btn_text}>Bookmark Question</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles._open_email_btn} onPress={() => props.navigation.navigate("ChooseYourBadge")}>
                                <Text style={styles._open_email_btn_text}>Choose a badge!</Text>
                            </TouchableOpacity>
                            <Text style={styles.modalText}>You need x more correct answers
                                to get a badge!</Text>
                        </View>
                    </BlurView>
                </View>
            </Modal>
            {/* <==========================> --- <==========================> */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible2}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible2(!modalVisible2);
                }}
            >
                <View style={styles.centeredView}>
                    <BlurView >
                        <View style={styles.modalView}>
                            <Image
                                source={require("./../../img/correct.png")}
                                style={styles.correct}
                            />
                            <Text style={styles._popup_title}>That is incorrect!!</Text>
                            <TouchableOpacity style={styles._Show_Explanation_btn} onPress={() => props.navigation.navigate("Explanation")}>
                                <Text style={styles._Show_Explanation_btn_text}>Show Explanation</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles._Bookmark_Question_btn} >
                                <Text style={styles._Bookmark_Question_btn_text}>Bookmark Question</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles._open_email_btn} onPress={() => setModalVisible3(!modalVisible3)}>
                                <Text style={styles._open_email_btn_text}>Next</Text>
                            </TouchableOpacity>

                        </View>
                    </BlurView>
                </View>
            </Modal>
            {/* <==========================> --- <==========================> */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible3}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible3(!modalVisible3);
                }}
            >
                <View style={styles.centeredView}>
                    <BlurView >
                        <View style={styles.modalView}>
                            <TouchableOpacity onPress={() => setModalVisible3(!modalVisible3)} style={styles._close_btn}>
                                <Entypo name="cross" size={20} color="#707070" />
                            </TouchableOpacity>
                            <Text style={styles._popup_title2}>That is incorrect!</Text>
                            <View style={styles._video}>
                                <VideoPlayer />
                            </View>
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
        marginTop: 60

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
    _popup_title2: {
        fontSize: 24,
        color: "#1C295D",
        textAlign: "center",
        fontWeight: "bold",
        marginBottom:20
    },
    _time_main: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 20,
        alignSelf: "flex-end",
        marginRight: 20
    },
    _time: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        marginLeft: 10
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    _video:{
        width:250,
        paddingBottom:20
    }
});