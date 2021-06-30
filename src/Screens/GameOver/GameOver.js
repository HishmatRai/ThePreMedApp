import React, { useState } from 'react';
import { StyleSheet, View, Text, StatusBar, ScrollView, TouchableOpacity, Image } from 'react-native';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
export default function GameOver(props) {
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
            </View>
            <Text style={styles._heading}>Game Over!</Text>
            {/* <==========================> --- <==========================> */}
            <View style={styles._main}>

                {/* <==========================> --- <==========================> */}
                <View style={styles._body_data}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <Image
                            source={require("./../../img/GameOver.png")}
                            style={styles.GameOver}
                        />
                        <Text style={styles._correct}>You got 1 out of 7 correct</Text>
                        <Text style={styles._high_score}>Your high score: 7</Text>

                        <TouchableOpacity style={styles._try_btn} onPress={() => props.navigation.navigate("EndlessModePlay")}>
                            <Text style={styles._try_btn_text}>Try Again</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles._SeeAnswers_btn} onPress={() => props.navigation.navigate("YourAnswers")}>
                            <Text style={styles._SeeAnswers_btn_text}>See Answers</Text>
                        </TouchableOpacity>


                        <TouchableOpacity style={styles.BacktoMenu_btn} onPress={() => props.navigation.navigate("EndlessMode")}>
                            <Text style={styles.BacktoMenu_btn_text}>Back to Menu</Text>
                        </TouchableOpacity>
                        
                    </ScrollView>
                </View>
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
        marginTop: 150,
        borderTopEndRadius: 20,
        borderTopLeftRadius: 20,
        paddingTop: 20,
        paddingBottom: 0,
        paddingHorizontal: 20,
        zIndex: -1
    },
    _heading: {
        color: "white",
        fontSize: 33,
        fontWeight: "bold",
        marginLeft: 20,
        marginRight: 20,
        textAlign: "center",
        marginTop: 40

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
    _body_data: {
        backgroundColor: "white",
        paddingTop: 30,
        borderRadius: 30,
        marginTop: -120,
        zIndex: 1
    },
    GameOver: {
        width: 249,
        height: 208,
        alignSelf: "center"
    },
    _correct: {
        fontSize: 18,
        color: "#03042B",
        textAlign: "center",
        fontWeight: "bold",
        marginTop: 20
    },
    _high_score: {
        fontSize: 18,
        color: "#03042B",
        textAlign: "center",
        fontWeight: "bold",
        marginTop: 5
    },
    _try_btn: {
        backgroundColor: "#04052A",
        height: 60,
        borderRadius: 10,
        marginTop: 20,
        alignItems: "center",
        justifyContent: "center"
    },
    _try_btn_text: {
        fontSize: 16,
        fontWeight: "bold",
        color: "white"
    },
    _SeeAnswers_btn: {
        backgroundColor: "#41C188",
        height: 60,
        borderRadius: 10,
        marginTop: 20,
        alignItems: "center",
        justifyContent: "center"
    },
    _SeeAnswers_btn_text: {
        fontSize: 16,
        fontWeight: "bold",
        color: "white"
    },
    BacktoMenu_btn: {
        backgroundColor: "#4145D1",
        height: 60,
        borderRadius: 10,
        marginTop: 20,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20
    },
    BacktoMenu_btn_text: {
        fontSize: 16,
        fontWeight: "bold",
        color: "white"
    }
});