import React, { useState } from 'react';
import { StyleSheet, View, Text, StatusBar, ScrollView, TouchableOpacity, ImageBackground, Image, Modal, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import { BlurView } from "@react-native-community/blur";
import Entypo from 'react-native-vector-icons/dist/Entypo';
import RoundCircle from './../../Components/RoundWheel/RoundWheel'
export default function Round(props) {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);
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
            <Text style={styles._heading}>Round 1</Text>
            {/* <==========================> --- <==========================> */}
            <View style={styles._main}>
                <ImageBackground
                    source={require("./../../img/singlePlayerBg.png")}
                    style={styles._image}
                >
                    <View style={styles._vs_main}>
                        <View style={styles._Opponent1}>
                            <Text style={styles._Opponent1_heading}>Opponent 1</Text>
                            <Text style={styles._Opponent1_sub_heading}>University</Text>
                            <View style={styles._Opponent_card_main}>
                                <View style={styles._Opponent_card}>
                                    <Image
                                        source={require("./../../img/Opponent1.png")}
                                        style={styles.Opponent1_ionc}
                                    />
                                </View>
                                <View style={styles._Opponent_card}>
                                    <Image
                                        source={require("./../../img/Opponent2.png")}
                                        style={styles.Opponent1_ionc}
                                    />
                                </View>
                                <View style={styles._Opponent_card}>
                                    <Image
                                        source={require("./../../img/Opponent3.png")}
                                        style={styles.Opponent1_ionc}
                                    />
                                </View>
                            </View>
                            <View style={styles._Opponent_card_main}>
                                <View style={styles._Opponent_card}>
                                    <Image
                                        source={require("./../../img/Opponent4.png")}
                                        style={styles.Opponent1_ionc}
                                    />
                                </View>
                                <View style={styles._Opponent_card}>
                                    <Image
                                        source={require("./../../img/Opponent5.png")}
                                        style={styles.Opponent1_ionc}
                                    />
                                </View>
                                <View style={styles._Opponent_card}>
                                    <Image
                                        source={require("./../../img/Opponent6.png")}
                                        style={styles.Opponent1_ionc}
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={styles._Opponent2}>
                            <Text style={styles._Opponent1_heading}>Opponent 2</Text>
                            <Text style={styles._Opponent1_sub_heading}>University</Text>
                            <View style={styles._Opponent_card_main}>
                                <View style={styles._Opponent_card}>
                                    <Image
                                        source={require("./../../img/Opponent1.png")}
                                        style={styles.Opponent1_ionc}
                                    />
                                </View>
                                <View style={styles._Opponent_card}>
                                    <Image
                                        source={require("./../../img/Opponent2.png")}
                                        style={styles.Opponent1_ionc}
                                    />
                                </View>
                                <View style={styles._Opponent_card}>
                                    <Image
                                        source={require("./../../img/Opponent3.png")}
                                        style={styles.Opponent1_ionc}
                                    />
                                </View>
                            </View>
                            <View style={styles._Opponent_card_main}>
                                <View style={styles._Opponent_card}>
                                    <Image
                                        source={require("./../../img/Opponent4.png")}
                                        style={styles.Opponent1_ionc}
                                    />
                                </View>
                                <View style={styles._Opponent_card}>
                                    <Image
                                        source={require("./../../img/Opponent5.png")}
                                        style={styles.Opponent1_ionc}
                                    />
                                </View>
                                <View style={styles._Opponent_card}>
                                    <Image
                                        source={require("./../../img/Opponent6.png")}
                                        style={styles.Opponent1_ionc}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                    <Image
                        source={require("./../../img/VS.png")}
                        style={styles.VS_img}
                    />
                    <ScrollView showsVerticalScrollIndicator={false} >
                        <TouchableOpacity style={styles._round_box}>
                            <RoundCircle />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles._Spin_btn} onPress={() => setModalVisible2(!modalVisible2)}>
                            <Text style={styles._Spin_btn_text}>Spin</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </ImageBackground>
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
                            <Text style={styles.modalText}>Get five lives and see how long you last against the onslaught of questions!</Text>
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
                            <Text style={styles._BehavioralScience}>Behavioral Science</Text>
                            <Image
                                source={require("./../../img/RandomOpponentmind.png")}
                                style={styles.singlePlayerpopup}
                            />
                            <TouchableOpacity style={styles._Play_btn} onPress={() => props.navigation.navigate("BehavioralScienceTest")}>
                                <Text style={styles._Play_btn_text}>Play</Text>
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
        marginTop: 100,
        borderTopEndRadius: 20,
        borderTopLeftRadius: 20,
        paddingTop: 20,
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
    modalView: {
        backgroundColor: "white",
        borderRadius: 20,
        padding: 10,
        width: "90%",

    },
    modalText: {
        fontSize: 16,
        color: "#7B8085",
        textAlign: "center",
        paddingRight: 30,
        paddingLeft: 30,
        paddingBottom: 40
    },
    singlePlayerpopup: {
        alignSelf: "center"
    },
    _heading: {
        color: "white",
        fontSize: 33,
        fontWeight: "bold",
        marginLeft: 20,
        marginRight: 20

    },
    _image: {
        flex: 1,
        resizeMode: "cover",
        height: "100%",
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20
    },
    _Opponent1: {
        backgroundColor: "#EF8E2A",
        width: "45%",
        height: 145,
        borderRadius: 10,
        padding: 10,

    },
    _Opponent2: {
        backgroundColor: "#743250",
        width: "45%",
        height: 145,
        borderRadius: 10,
        padding: 10
    },
    _vs_main: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: -120
    },
    VS_img: {
        alignSelf: "center",
        marginTop: -100,
        width: 70,
        height: 70
    },
    _Opponent1_heading: {
        color: "white",
        fontWeight: "bold",
        fontSize: 18,
        textAlign: "center"
    },
    _Opponent1_sub_heading: {
        color: "white",
        fontSize: 14,
        textAlign: "center"
    },
    _Opponent_card_main: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 10
    },
    _Opponent_card: {
        backgroundColor: "white",
        width: "30%",
        borderRadius: 5,
        height: 30,
        alignItems: "center",
        justifyContent: "center"
    },
    _round_box: {
        borderColor: "black",
        width: 250,
        height: 250,
        marginTop: 70,
        alignSelf: "center"
    },
    _Spin_btn: {
        backgroundColor: "#4145D1",
        height: 60,
        marginTop: 100,
        marginBottom: 20,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    _Spin_btn_text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white'
    },
    _BehavioralScience: {
        fontSize: 26,
        color: "#04052B",
        fontWeight: 'bold',
        textAlign: "center",
        marginTop: 20,
        marginBottom: 20
    },
    _Play_btn: {
        backgroundColor: '#4145D1',
        height: 40,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10
    },
    _Play_btn_text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white'
    }
});