import React, { useState } from 'react';
import { StyleSheet, View, Text, StatusBar, ScrollView, TouchableOpacity, Modal, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import { BlurView } from "@react-native-community/blur";
export default function OverviewModeOptions(props) {
    const [select, setSelect] = useState(true);
    const [select2, setSelect2] = useState(false);
    const [select3, setSelect3] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.container}>

            {/* <==========================> --- <==========================> */}
            <StatusBar
                barStyle="white"
                hidden={false}
                backgroundColor="#41C188"
                translucent={true}
            />

            {/* <==========================> --- <==========================> */}
            <TouchableOpacity style={styles._back_icon} onPress={() => props.navigation.goBack()}>
                <Ionicons name="chevron-back" size={30} color="white" />
            </TouchableOpacity>
            <Text style={styles._heading}>Options</Text>
            {/* <==========================> --- <==========================> */}
            <View style={styles._main}>
                <ScrollView showsVerticalScrollIndicator={false}>

                    {/* <==========================> --- <==========================> */}
                    <View style={styles._card_main}>
                        <Text style={styles._Card_heading}>Select Your Decks!</Text>
                        <View style={styles._card_list_main}>
                            <Text style={styles._card_list_title}>Science is hard</Text>
                            <View >
                                {select ? (
                                    <TouchableOpacity onPress={() => setSelect(!select)} style={styles._select}>
                                        <Ionicons name="checkmark" size={20} color="#5CCE6B" />
                                    </TouchableOpacity>
                                ) : (
                                    <TouchableOpacity onPress={() => setSelect(!select)} style={styles._select}>
                                        <Ionicons name="checkmark" size={20} color="white" />
                                    </TouchableOpacity>
                                )}
                            </View>
                        </View>
                        <View style={styles._card_list_main}>
                            <Text style={styles._card_list_title}>Master Deck</Text>
                            <View >
                                {select2 ? (
                                    <TouchableOpacity onPress={() => setSelect2(!select2)} style={styles._select}>
                                        <Ionicons name="checkmark" size={20} color="#5CCE6B" />
                                    </TouchableOpacity>
                                ) : (
                                    <TouchableOpacity onPress={() => setSelect2(!select2)} style={styles._select}>
                                        <Ionicons name="checkmark" size={20} color="white" />
                                    </TouchableOpacity>
                                )}
                            </View>
                        </View>

                        <View style={styles._card_list_main}>
                            <Text style={styles._card_list_title}>Hard 1</Text>
                            <View >
                                {select3 ? (
                                    <TouchableOpacity onPress={() => setSelect3(!select3)} style={styles._select}>
                                        <Ionicons name="checkmark" size={20} color="gre#5CCE6Ben" />
                                    </TouchableOpacity>
                                ) : (
                                    <TouchableOpacity onPress={() => setSelect3(!select3)} style={styles._select}>
                                        <Ionicons name="checkmark" size={20} color="white" />
                                    </TouchableOpacity>
                                )}
                            </View>
                        </View>
                    </View>

                    {/* <==========================> --- <==========================> */}
                    <TouchableOpacity style={styles._total_que_count_btn}>
                        <Text style={styles._total_que_count_btn_text}>Total Question Count</Text>
                    </TouchableOpacity>
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
                            <Text style={styles.modalText}>Select which tags you want to add for review</Text>

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
        backgroundColor: "#41C188"
    },
    _main: {
        backgroundColor: "white",
        flex: 1,
        marginTop: 40,
        borderTopEndRadius: 20,
        borderTopLeftRadius: 20,
        paddingLeft: 20,
     paddingTop: 30,
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
    _card_main: {
        backgroundColor: "#41C188",
        borderRadius: 10,
        padding: 20,
    },
    _Card_heading: {
        color: 'white',
        fontSize: 24,
        fontWeight: "bold"
    },
    _select: {
        backgroundColor: "white",
        width: 30,
        height: 30,
        borderRadius: 5,
        elevation: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    _card_list_main: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottomColor: "white",
        borderBottomWidth: 1,
        paddingBottom: 10,
        marginTop: 20
    },
    _card_list_title: {
        fontSize: 16,
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
    _total_que_count_btn: {
        backgroundColor: "#4145D1",
        height: 60,
        marginTop: 100,
        marginBottom:20,
        borderRadius:10,
        alignItems:"center",
        justifyContent:"center"
    },
    _total_que_count_btn_text: {
        fontSize: 16,
        color: "white",
        fontWeight: "bold"
    }
});