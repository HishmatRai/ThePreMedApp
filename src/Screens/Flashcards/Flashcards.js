import React, { useState } from 'react';
import { StyleSheet, View, Text, StatusBar, ScrollView, TouchableOpacity, Image, Modal, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import { BlurView } from "@react-native-community/blur";
import Entypo from 'react-native-vector-icons/dist/Entypo';
export default function Flashcards(props) {
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
            <Text style={styles._heading}>Flashcards</Text>
            {/* <==========================> --- <==========================> */}
            <View style={styles._main}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {/* <==========================> --- <==========================> */}
                    <TouchableOpacity style={styles._card3} >
                        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                            <Ionicons name="md-help-circle" size={30} color="white" style={styles._help_icon} />
                        </TouchableOpacity>
                        <View style={styles._card3_data}>
                            <Text style={styles.card3_title}>Study {"\n"}Flashcards</Text>
                            <Image
                                source={require("./../../img/StudyFlashcards.png")}
                                style={styles.StudyFlashcards}
                            />
                        </View>
                    </TouchableOpacity>

                    {/* <==========================> --- <==========================> */}
                    <TouchableOpacity style={styles._card4} >
                        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                            <Ionicons name="md-help-circle" size={30} color="white" style={styles._help_icon} />
                        </TouchableOpacity>
                        <View style={styles._card3_data}>
                            <Text style={styles.card3_title}>Create {"\n"}Flashcards</Text>
                            <Image
                                source={require("./../../img/CreateFlashcards.png")}
                                style={styles.CreateFlashcards}
                            />
                        </View>
                    </TouchableOpacity>

                    {/* <==========================> --- <==========================> */}
                    <TouchableOpacity style={styles._card5}>
                        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                            <Ionicons name="md-help-circle" size={30} color="white" style={styles._help_icon} />
                        </TouchableOpacity>
                        <View style={styles._card5_data}>
                            <Text style={styles.card3_title}>Decks </Text>
                            <Image
                                source={require("./../../img/Decks.png")}
                                style={styles.Decks}
                            />
                        </View>
                    </TouchableOpacity>

                    {/* <==========================> --- <==========================> */}
                    <TouchableOpacity style={styles._card6}>
                        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                            <Ionicons name="md-help-circle" size={30} color="white" style={styles._help_icon} />
                        </TouchableOpacity>
                        <View style={styles._card5_data}>
                            <Text style={styles.card3_title}>Options </Text>
                            <Image
                                source={require("./../../img/Options.png")}
                                style={styles.Options}
                            />
                        </View>
                    </TouchableOpacity>
                    <View style={{ marginBottom: 20 }}></View>
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
    _card3: {
        backgroundColor: "#54C1FB",
        width: "90%",
        borderRadius: 10,
        padding: 10,
        height: 120,
        marginTop: 30,
        alignSelf: "center"
    },
    _card4: {
        backgroundColor: "#FF817E",
        width: "90%",
        borderRadius: 10,
        padding: 10,
        height: 120,
        marginTop: 30,
        alignSelf: "center"
    },
    _card5: {
        backgroundColor: "#9694FF",
        width: "90%",
        borderRadius: 10,
        padding: 10,
        height: 120,
        marginTop: 30,
        alignSelf: "center"
    },
    _card6: {
        backgroundColor: "#41C188",
        width: "90%",
        borderRadius: 10,
        padding: 10,
        height: 120,
        marginTop: 30,
        alignSelf: "center"
    },
    _help_icon: {
        alignSelf: "flex-end"
    },
    _card3_data: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 25,
        marginTop: -15
    },
    _card5_data: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 25,
    },
    card3_title: {
        fontSize: 24,
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
    StudyFlashcards: {
        width: 50,
        height: 50
    }
});