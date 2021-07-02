import React, { useState } from 'react';
import { Box, Tabs, NativeBaseProvider, Center } from 'native-base';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, Alert, Modal } from 'react-native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import { BlurView } from "@react-native-community/blur";
function PlansCompareTabs2(props) {
    const [modalVisible, setModalVisible] = useState(false);
    const [select, setSelect] = useState(true);
    const [select2, setSelect2] = useState(true);
    const [select3, setSelect3] = useState(true);
    const [select4, setSelect4] = useState(true);
    const [select5, setSelect5] = useState(true);
    const [select6, setSelect6] = useState(true);
    const [select7, setSelect7] = useState(true);
    const [select8, setSelect8] = useState(true);
    const [select9, setSelect9] = useState(true);
    const [select10, setSelect10] = useState(true);
    return (
        <Box width="100%">
            <Tabs isFitted colorScheme="orange">
                <Tabs.Bar>
                    <Tabs.Tab style={{ color: "white" }}>Plans</Tabs.Tab>
                    <Tabs.Tab>Compare</Tabs.Tab>
                </Tabs.Bar>
                <Tabs.Views p={0} >
                    <Tabs.View width="100%" p={0}>
                        <View style={styles._Tab1_main}>
                            <ScrollView showsVerticalScrollIndicator={false}>
                                <Text style={styles._heading}>Choose a Plan</Text>
                                <Text style={styles._basic}>Basic</Text>
                                <Text style={styles._list}>All Test Banks</Text>
                                <Text style={styles._list}>Review Mode</Text>
                                <Text style={styles._list}>No ads</Text>
                                <Text style={styles._list}>Leaderboards</Text>

                                <TouchableOpacity style={styles._select_btn} >
                                    <Text style={styles._select_btn_text}>Select</Text>
                                </TouchableOpacity>

                                <View style={styles._premire_main}>
                                    <Text style={styles._Premier_heading}>Premier</Text>
                                    <Text style={styles._Premier_data}>All Test Banks</Text>
                                    <Text style={styles._Premier_data}>Review Mode</Text>
                                    <Text style={styles._Premier_data}>Flashcards</Text>
                                    <Text style={styles._Premier_data}>Overview Mode</Text>
                                    <Text style={styles._Premier_data}>No ads</Text>
                                    <Text style={styles._Premier_data}>Leaderboards</Text>
                                    <TouchableOpacity style={styles._select_btn2}>
                                        <Text style={styles._select_btn_text2}>Select</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ marginBottom: 150 }}></View>
                            </ScrollView>
                        </View>
                    </Tabs.View>
                    <Tabs.View width="100%" p={0}>
                        <View style={styles._compare_main}>
                            <Text style={styles._compare_heading}>Compare Plans</Text>
                            <View style={styles._compare_Card}>
                                <View style={styles._comapre_p1}>
                                </View>
                                <View style={styles._comapre_p2}>
                                    <Text style={styles._card_heading}>Basic</Text>
                                </View>
                                <View style={styles._comapre_p3}>
                                    <Text style={styles._card_heading}>Premier</Text>
                                </View>
                            </View>

                            <View style={styles._compare_Card}>
                                <View style={styles._comapre_p1}>
                                    <Text style={styles._comapre_card_des}>Access to
                                        3000+ Questions</Text>
                                </View>
                                <View style={styles._comapre_p2}>
                                    <View >
                                        {select ? (
                                            <TouchableOpacity onPress={() => setSelect(!select)} style={styles._select}>
                                                <Ionicons name="checkmark" size={20} color="white" />
                                            </TouchableOpacity>
                                        ) : (
                                            <TouchableOpacity onPress={() => setSelect(!select)} style={styles._select}>
                                                <Ionicons name="checkmark" size={20} color="#54C1FB" />
                                            </TouchableOpacity>
                                        )}
                                    </View>
                                </View>
                                <View style={styles._comapre_p3}>
                                    {select2 ? (
                                        <TouchableOpacity onPress={() => setSelect2(!select2)} style={styles._select}>
                                            <Ionicons name="checkmark" size={20} color="white" />
                                        </TouchableOpacity>
                                    ) : (
                                        <TouchableOpacity onPress={() => setSelect2(!select2)} style={styles._select}>
                                            <Ionicons name="checkmark" size={20} color="#54C1FB" />
                                        </TouchableOpacity>
                                    )}
                                </View>
                            </View>

                            <View style={styles._compare_Card}>
                                <View style={styles._comapre_p1}>
                                    <Text style={styles._comapre_card_des}>Ad-free
                                        Multiplayer Mode</Text>
                                </View>
                                <View style={styles._comapre_p2}>
                                    <View >
                                        {select3 ? (
                                            <TouchableOpacity onPress={() => setSelect3(!select3)} style={styles._select}>
                                                <Ionicons name="checkmark" size={20} color="white" />
                                            </TouchableOpacity>
                                        ) : (
                                            <TouchableOpacity onPress={() => setSelect3(!select3)} style={styles._select}>
                                                <Ionicons name="checkmark" size={20} color="#54C1FB" />
                                            </TouchableOpacity>
                                        )}
                                    </View>
                                </View>
                                <View style={styles._comapre_p3}>
                                    {select4 ? (
                                        <TouchableOpacity onPress={() => setSelect4(!select4)} style={styles._select}>
                                            <Ionicons name="checkmark" size={20} color="white" />
                                        </TouchableOpacity>
                                    ) : (
                                        <TouchableOpacity onPress={() => setSelect4(!select4)} style={styles._select}>
                                            <Ionicons name="checkmark" size={20} color="#54C1FB" />
                                        </TouchableOpacity>
                                    )}
                                </View>
                            </View>

                            <View style={styles._compare_Card}>
                                <View style={styles._comapre_p1}>
                                    <Text style={styles._comapre_card_des}>Access to All
                                        Leaderboards</Text>
                                </View>
                                <View style={styles._comapre_p2}>
                                    <View >
                                        {select5 ? (
                                            <TouchableOpacity onPress={() => setSelect5(!select5)} style={styles._select}>
                                                <Ionicons name="checkmark" size={20} color="white" />
                                            </TouchableOpacity>
                                        ) : (
                                            <TouchableOpacity onPress={() => setSelect5(!select5)} style={styles._select}>
                                                <Ionicons name="checkmark" size={20} color="#54C1FB" />
                                            </TouchableOpacity>
                                        )}
                                    </View>
                                </View>
                                <View style={styles._comapre_p3}>
                                    {select6 ? (
                                        <TouchableOpacity onPress={() => setSelect6(!select6)} style={styles._select}>
                                            <Ionicons name="checkmark" size={20} color="white" />
                                        </TouchableOpacity>
                                    ) : (
                                        <TouchableOpacity onPress={() => setSelect6(!select6)} style={styles._select}>
                                            <Ionicons name="checkmark" size={20} color="#54C1FB" />
                                        </TouchableOpacity>
                                    )}
                                </View>
                            </View>

                            <View style={styles._compare_Card}>
                                <View style={styles._comapre_p1}>
                                    <Text style={styles._comapre_card_des}>Review Mode</Text>
                                </View>
                                <View style={styles._comapre_p2}>
                                    <View >
                                        {select7 ? (
                                            <TouchableOpacity onPress={() => setSelect7(!select7)} style={styles._select}>
                                                <Ionicons name="checkmark" size={20} color="white" />
                                            </TouchableOpacity>
                                        ) : (
                                            <TouchableOpacity onPress={() => setSelect7(!select7)} style={styles._select}>
                                                <Ionicons name="checkmark" size={20} color="#54C1FB" />
                                            </TouchableOpacity>
                                        )}
                                    </View>
                                </View>
                                <View style={styles._comapre_p3}>
                                    {select8 ? (
                                        <TouchableOpacity onPress={() => setSelect8(!select8)} style={styles._select}>
                                            <Ionicons name="checkmark" size={20} color="white" />
                                        </TouchableOpacity>
                                    ) : (
                                        <TouchableOpacity onPress={() => setSelect8(!select8)} style={styles._select}>
                                            <Ionicons name="checkmark" size={20} color="#54C1FB" />
                                        </TouchableOpacity>
                                    )}
                                </View>
                            </View>

                            <View style={styles._compare_Card}>
                                <View style={styles._comapre_p1}>
                                    <Text style={styles._comapre_card_des}>Overview Mode</Text>
                                </View>
                                <View style={styles._comapre_p2}>
      
                                </View>
                                <View style={styles._comapre_p3}>
                                    {select9 ? (
                                        <TouchableOpacity onPress={() => setSelect9(!select9)} style={styles._select}>
                                            <Ionicons name="checkmark" size={20} color="white" />
                                        </TouchableOpacity>
                                    ) : (
                                        <TouchableOpacity onPress={() => setSelect9(!select9)} style={styles._select}>
                                            <Ionicons name="checkmark" size={20} color="#54C1FB" />
                                        </TouchableOpacity>
                                    )}
                                </View>
                            </View>

                            <View style={styles._compare_Card}>
                                <View style={styles._comapre_p1}>
                                    <Text style={styles._comapre_card_des}>Flashcard Mode</Text>
                                </View>
                                <View style={styles._comapre_p2}>
      
                                </View>
                                <View style={styles._comapre_p3}>
                                    {select10 ? (
                                        <TouchableOpacity onPress={() => setSelect10(!select10)} style={styles._select}>
                                            <Ionicons name="checkmark" size={20} color="white" />
                                        </TouchableOpacity>
                                    ) : (
                                        <TouchableOpacity onPress={() => setSelect10(!select10)} style={styles._select}>
                                            <Ionicons name="checkmark" size={20} color="#54C1FB" />
                                        </TouchableOpacity>
                                    )}
                                </View>
                            </View>
                            <View style={{marginBottom:200}}></View>
                        </View>
                    </Tabs.View>
                </Tabs.Views>
            </Tabs>
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
                            <Image
                                source={require("./../../img/thanks.png")}
                                style={styles.thanks}
                            />
                            <Text style={styles._popup_title}>Thanking you</Text>
                            <Text style={styles.modalText}>It was popularised in the 1960s
                                with the release of Letraset
                                sheets containing </Text>
                            <TouchableOpacity style={styles._open_email_btn} >
                                <Text style={styles._open_email_btn_text}>Share Now</Text>
                            </TouchableOpacity>

                        </View>
                    </BlurView>
                </View>
            </Modal>
        </Box>
    );
}
export default function () {
    return (
        <NativeBaseProvider>
            <PlansCompareTabs2 />
        </NativeBaseProvider>
    );
}

const styles = StyleSheet.create({
    _Tab1_main: {
        backgroundColor: "white",
        borderRadius: 10,
        padding: 20,
        marginTop: 20,
        borderTopRightRadius:30,
        borderTopLeftRadius:30
    },
    _heading: {
        fontSize: 33,
        color: "#333333"
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
    thanks: {
        alignSelf: "center"
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
    _popup_title: {
        fontSize: 24,
        color: "#1C295D",
        textAlign: "center",
        fontWeight: "bold",
        marginTop: 20
    },
    _basic: {
        fontSize: 24,
        color: "#1C295D",
        textAlign: "center",
        marginTop: 20
    },
    _list: {
        fontSize: 18,
        color: "#707070",
        textAlign: "center",
        fontWeight: "bold"
    },
    _select_btn: {
        borderWidth: 1,
        borderColor: "#4145D1",
        borderRadius: 10,
        width: "80%",
        alignSelf: "center",
        height: 52,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20
    },
    _select_btn2: {
        borderWidth: 1,
        borderColor: "#4145D1",
        borderRadius: 10,
        width: "80%",
        alignSelf: "center",
        height: 52,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        backgroundColor: "#4145D1"
    },
    _select_btn_text: {
        fontSize: 16,
        color: "#4145D1",
        fontWeight: "bold",
        letterSpacing: 1
    },
    _select_btn_text2: {
        fontSize: 16,
        color: "white",
        fontWeight: "bold",
        letterSpacing: 1
    },
    _premire_main: {
        backgroundColor: "#54C1FB",
        borderRadius: 10,
        marginTop: 20,
        padding: 20
    },
    _Premier_heading: {
        color: "white",
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center"
    },
    _Premier_data: {
        color: "white",
        fontSize: 18,
        textAlign: "center"
    },
    _compare_main: {
        backgroundColor: "white",
        borderRadius: 10,
        padding: 20,
        marginTop: 20,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30
    },
    _compare_heading: {
        fontSize: 33,
        color: "#333333"
    },
    _compare_Card: {
        borderBottomWidth: 1,
        borderBottomColor: "#C1C1C1",
        paddingBottom: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 10
    },
    _comapre_p1: {
        width: "40%",
    },
    _comapre_p2: {
        width: "30%",
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center"
    },
    _comapre_p3: {
        width: "30%",
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center"
    },
    _card_heading: {
        fontSize: 18,
        color: "#1C295D",
        fontWeight: "bold"
    },
    _comapre_card_des: {
        fontSize: 14,
        color: "#707070",
        fontWeight: "bold"
    },
    _select: {
        backgroundColor: "#54C1FB",
        width: 30,
        height: 30,
        borderRadius: 5,
        elevation: 1,
        alignItems: "center",
        justifyContent: "center"
    },
})