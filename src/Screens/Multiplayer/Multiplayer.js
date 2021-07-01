import React, { useState } from 'react';
import { StyleSheet, View, Text, StatusBar, ScrollView, TouchableOpacity, ImageBackground, Image, Modal, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import { BlurView } from "@react-native-community/blur";
import Entypo from 'react-native-vector-icons/dist/Entypo';
export default function Multiplayer(props) {
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
            <Text style={styles._heading}>Multiplayer</Text>
            {/* <==========================> --- <==========================> */}
            <View style={styles._main}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <ImageBackground
                        source={require("./../../img/singlePlayerBg.png")}
                        style={styles._image}
                    >
                        {/* <==========================> --- <==========================> */}
                        <View style={styles._card_main}>
                            <TouchableOpacity style={styles._card} onPress={() => props.navigation.navigate("FriendsList")}>
                                <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                                    <Ionicons name="md-help-circle" size={30} color="white" style={styles._help_icon} />
                                </TouchableOpacity>
                                <Image
                                    source={require("./../../img/FriendsList.png")}
                                    style={styles.FriendsList}
                                />
                                <Text style={styles.card_title}>Friends List</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles._card2} onPress={() => props.navigation.navigate("AddFriends")}>
                                <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                                    <Ionicons name="md-help-circle" size={30} color="white" style={styles._help_icon} />
                                </TouchableOpacity>
                                <Image
                                    source={require("./../../img/AddFriends.png")}
                                    style={styles.AddFriends}
                                />
                                <Text style={styles.card_title}>Add Friends</Text>
                            </TouchableOpacity>
                        </View>

                        {/* <==========================> --- <==========================> */}
                        <TouchableOpacity style={styles._card3} onPress={() => props.navigation.navigate("Leaderboard")}>
                            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                                <Ionicons name="md-help-circle" size={30} color="white" style={styles._help_icon} />
                            </TouchableOpacity>
                            <View style={styles._card3_data}>
                                <Text style={styles.card3_title}>Leaderboard</Text>
                                <Image
                                    source={require("./../../img/Leaderboards.png")}
                                    style={styles.Leaderboards}
                                />
                            </View>
                        </TouchableOpacity>

                        {/* <==========================> --- <==========================> */}
                        <TouchableOpacity style={styles._card4} onPress={() => props.navigation.navigate("CurrentMatches")}>
                            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                                <Ionicons name="md-help-circle" size={30} color="white" style={styles._help_icon} />
                            </TouchableOpacity>
                            <View style={styles._card3_data}>
                                <Text style={styles.card3_title}>Current Matches</Text>
                                <Image
                                    source={require("./../../img/OverviewMode.png")}
                                    style={styles.OverviewMode}
                                />
                            </View>
                        </TouchableOpacity>

                        {/* <==========================> --- <==========================> */}
                        <TouchableOpacity style={styles._card5} onPress={() => props.navigation.navigate("Round")}>
                            <TouchableOpacity onPress={() => setModalVisible2(!modalVisible2)}>
                                <Ionicons name="md-help-circle" size={30} color="white" style={styles._help_icon} />
                            </TouchableOpacity>
                            <View style={styles._card3_data}>
                                <Text style={styles.card3_title}>Random Opponent</Text>
                                <Image
                                    source={require("./../../img/RandomOpponent.png")}
                                    style={styles.RandomOpponent}
                                />
                            </View>
                        </TouchableOpacity>
                        <View style={{ marginBottom: 20 }}></View>
                    </ImageBackground>
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
                            <TouchableOpacity onPress={() => setModalVisible2(!modalVisible2)} style={styles._close_btn}>
                                <Entypo name="cross" size={20} color="#707070" />
                            </TouchableOpacity>
                            <Image
                                    source={require("./../../img/singlePlayerpopup.png")}
                                    style={styles.singlePlayerpopup}
                                />
                            <Text style={styles.modalText}>Get Five Lives And See How Long You Last Against The Onslaught Of Questions!</Text>
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
    _image: {
        flex: 1,
        resizeMode: "cover",
        height: "100%",
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20
    },
    _card_main: {
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    _card: {
        backgroundColor: "#9694FF",
        width: "45%",
        borderRadius: 10,
        padding: 10,
        height: 135
    },
    _card2: {
        backgroundColor: "#57CAEB",
        width: "45%",
        borderRadius: 10,
        padding: 10,
        height: 135
    },
    _card3: {
        backgroundColor: "#435EBE",
        width: "100%",
        borderRadius: 10,
        padding: 10,
        height: 120,
        marginTop: 30
    },
    _card4: {
        backgroundColor: "#5DDAB4",
        width: "100%",
        borderRadius: 10,
        padding: 10,
        height: 120,
        marginTop: 30
    },
    _card5: {
        backgroundColor: "#FF817E",
        width: "100%",
        borderRadius: 10,
        padding: 10,
        height: 120,
        marginTop: 30
    },
    _help_icon: {
        alignSelf: "flex-end"
    },
    FriendsList: {
        alignSelf: "center",
        marginVertical: 10
    },
    AddFriends: {
        alignSelf: "center",
        marginVertical: 10
    },
    card_title: {
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
        color: "white",
        marginBottom: 20
    },
    _card3_data: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 20
    },
    card3_title: {
        fontSize: 18,
        color: "white",
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
    singlePlayerpopup:{
        alignSelf:"center"
    }
});