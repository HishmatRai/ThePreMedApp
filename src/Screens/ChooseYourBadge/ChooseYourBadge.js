import React, { useState } from 'react';
import { StyleSheet, View, Text, StatusBar, ScrollView, TouchableOpacity, Image } from 'react-native';
export default function ChooseYourBadge(props) {
    return (
        <View style={styles.container}>

            {/* <==========================> --- <==========================> */}
            <StatusBar
                barStyle="white"
                hidden={false}
                backgroundColor="#05062D"
                translucent={true}
            />
            {/* <==========================> --- <==========================> */}

            <Text style={styles._heading}>Choose Your {"\n"}Badge!</Text>
            {/* <==========================> --- <==========================> */}
            <View style={styles._main}>
                <ScrollView showsVerticalScrollIndicator={false}>

                    {/* <==========================> --- <==========================> */}
                    <View style={styles._Card_main}>
                        <TouchableOpacity style={styles._Card} >
                            <Image
                                source={require("./../../img/Choose1.png")}
                                style={styles.Choose1}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles._Card2}>
                            <Image
                                source={require("./../../img/Choose2.png")}
                                style={styles.Choose1}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles._Card_main}>
                        <TouchableOpacity style={styles._Card3} >
                            <Image
                                source={require("./../../img/Choose3.png")}
                                style={styles.Choose1}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles._Card4}>
                            <Image
                                source={require("./../../img/Choose4.png")}
                                style={styles.Choose1}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles._Card_main}>
                        <TouchableOpacity style={styles._Card5} >
                            <Image
                                source={require("./../../img/Choose5.png")}
                                style={styles.Choose1}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles._Card6}>
                            <Image
                                source={require("./../../img/Choose6.png")}
                                style={styles.Choose1}
                            />
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={styles._next_btn} onPress={() => props.navigation.navigate("Round")}>
                        <Text style={styles._next_btn_text}>Next</Text>
                    </TouchableOpacity>
                    <View style={{ marginBottom: 20 }}></View>
                </ScrollView>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#05062D"
    },
    _main: {
        backgroundColor: "white",
        flex: 1,
        marginTop: 40,
        borderTopLeftRadius: 30,
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
        borderTopEndRadius: 30
    },
    _heading: {
        color: "white",
        fontSize: 33,
        fontWeight: "bold",
        marginLeft: 20,
        marginRight: 20,
        marginTop: 70

    },
    _back_icon: {
        marginTop: 50,
        margin: 20,
        width: 40,
        height: 40,
        borderRadius: 40 / 2,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'white',
        alignSelf: "flex-end"
    },
    _Card_main: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 20
    },
    _Card: {
        backgroundColor: "#FFDBAF",
        width: "48%",
        borderRadius: 10,
        padding: 20,
        height: 135,
        alignItems: "center",
        justifyContent: "center"
    },
    _Card2: {
        backgroundColor: "#E5D1D9",
        width: "48%",
        borderRadius: 10,
        padding: 20,
        height: 135,
        alignItems: "center",
        justifyContent: "center"
    },
    _Card3: {
        backgroundColor: "#A8C1B3",
        width: "48%",
        borderRadius: 10,
        padding: 20,
        height: 135,
        alignItems: "center",
        justifyContent: "center"
    },
    _Card4: {
        backgroundColor: "#BBB0C0",
        width: "48%",
        borderRadius: 10,
        padding: 20,
        height: 135,
        alignItems: "center",
        justifyContent: "center"
    },
    _Card5: {
        backgroundColor: "#F3A282",
        width: "48%",
        borderRadius: 10,
        padding: 20,
        height: 135,
        alignItems: "center",
        justifyContent: "center"
    },
    _Card6: {
        backgroundColor: "#743250",
        width: "48%",
        borderRadius: 10,
        padding: 20,
        height: 135,
        alignItems: "center",
        justifyContent: "center"
    },
    _next_btn: {
        backgroundColor: "#4145D1",
        height: 60,
        marginVertical: 20,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    _next_btn_text: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    }
});