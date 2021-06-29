import React, { useState } from 'react';
import { StyleSheet, View, Text, StatusBar, ScrollView, TouchableOpacity, ImageBackground, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
export default function SinglePlayer(props) {
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
            <Text style={styles._heading}>Single Player</Text>
            {/* <==========================> --- <==========================> */}
            <View style={styles._main}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <ImageBackground
                        source={require("./../../img/singlePlayerBg.png")}
                        style={styles._image}
                    >
                        {/* <==========================> --- <==========================> */}
                        <View style={styles._card_main}>
                            <TouchableOpacity style={styles._card}>
                                <Ionicons name="md-help-circle" size={30} color="white" style={styles._help_icon} />
                                <Image
                                    source={require("./../../img/EndlessMode.png")}
                                    style={styles.EndlessMode}
                                />
                                <Text style={styles.card_title}>Endless Mode</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles._card2}>
                                <Ionicons name="md-help-circle" size={30} color="white" style={styles._help_icon} />
                                <Image
                                    source={require("./../../img/TimedMode.png")}
                                    style={styles.TimedMode}
                                />
                                <Text style={styles.card_title}>Timed Mode</Text>
                            </TouchableOpacity>
                        </View>

                        {/* <==========================> --- <==========================> */}
                        <TouchableOpacity style={styles._card3}>
                            <Ionicons name="md-help-circle" size={30} color="white" style={styles._help_icon} />
                            <View style={styles._card3_data}>
                                <Text style={styles.card3_title}>Review Mode</Text>
                                <Ionicons name="bookmark-outline" size={30} color="white" />
                            </View>
                        </TouchableOpacity>

                        {/* <==========================> --- <==========================> */}
                        <TouchableOpacity style={styles._card4}>
                            <Ionicons name="md-help-circle" size={30} color="white" style={styles._help_icon} />
                            <View style={styles._card3_data}>
                                <Text style={styles.card3_title}>Overview Mode</Text>
                                <Image
                                    source={require("./../../img/OverviewMode.png")}
                                    style={styles.OverviewMode}
                                />
                            </View>
                        </TouchableOpacity>

                           {/* <==========================> --- <==========================> */}
                           <TouchableOpacity style={styles._card5}>
                                <Ionicons name="md-help-circle" size={30} color="white" style={styles._help_icon} />
                                <View style={styles._card3_data}>
                                    <Text style={styles.card3_title}>Flashcards</Text>
                                    <Image
                                    source={require("./../../img/Flashcards.png")}
                                    style={styles.Flashcards}
                                />
                                </View>
                            </TouchableOpacity>
                            <View style={{marginBottom:20}}></View>
                    </ImageBackground>
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
    EndlessMode: {
        alignSelf: "center",
        marginVertical: 10
    },
    TimedMode: {
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
        justifyContent: "space-around",
        alignItems: "center",
    },
    card3_title: {
        fontSize: 18,
        color: "white",
        fontWeight: "bold"
    }
});