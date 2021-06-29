import React, { useState } from 'react';
import { StyleSheet, View, Text, StatusBar, ScrollView, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
export default function MyStats(props) {
    let Biochemistry = [
        { name: "Enzymes", vale: "60%", bgColor: "#FEEED1", color: "#EE9900" },
        { name: "Metabolism", vale: "60%", bgColor: "#FEEED1", color: "#EE9900" },
        { name: "Lab Techniques", vale: "60%", bgColor: "#D1FEEA", color: "#41C188" },
    ]

    let CardData = [
        { heading: "Behavioral Science", value: "90%", bgColor: "#D1FEEA", color: "#41C188" },
        { heading: "General Chemistry", value: "60%", bgColor: "#FEEED1", color: "#EE9900" },
        { heading: "Organic Chemistry", value: "70%", bgColor: "#FEEED1", color: "#EE9900" },
        { heading: "Physics", value: "30%", bgColor: "#FDD6D6", color: "#FF0000" },
        { heading: "Biology", value: "100%", bgColor: "#D1FEEA", color: "#41C188" },
    ]
    return (
        <View style={styles.container}>

            {/* <==========================> --- <==========================> */}
            <StatusBar
                barStyle="black"
                hidden={false}
                backgroundColor="white"
                translucent={true}
            />

            {/* <==========================> --- <==========================> */}
            <TouchableOpacity style={styles._back_icon} onPress={() => props.navigation.goBack()}>
                <Ionicons name="chevron-back" size={30} color="#03042A" />
            </TouchableOpacity>
            <Text style={styles._heading}>My Stats</Text>
            {/* <==========================> --- <==========================> */}
            <View style={styles._main}>
                <ScrollView showsVerticalScrollIndicator={false}>

                    {/* <==========================> --- <==========================> */}
                    <View style={styles._first_por_main}>
                        <View style={styles._page_heading_main_tile}>
                            <Text style={styles._page_heading_main_text}>Biochemistry</Text>
                            <Text style={styles._presentage}>80%</Text>
                        </View>

                        {/* <==========================> --- <==========================> */}
                        {Biochemistry.map((v, i) => {
                            return (
                                <View style={styles._page_heading_main}>
                                    <Text style={styles._setting_pages_title}>{v.name}</Text>
                                    <View style={[styles._setting_pages_upgrade_icon, { backgroundColor: v.bgColor }]}>
                                        <Text style={[styles._presentage2, { color: v.color }]}>{v.vale}</Text>
                                    </View>
                                </View>
                            )
                        })}
                    </View>
                    {/* <==========================> --- <==========================> */}
                    <View style={styles._card_main}>
                        {CardData.map((v, i) => {
                            return (
                                <View style={[styles._Card, { backgroundColor: v.bgColor }]}>
                                    <Text style={[styles._Card_heading, { color: v.color }]}>{v.heading}</Text>
                                    <Text style={[styles._card_presentage, { color: v.color }]}>{v.value}</Text>
                                </View>
                            )
                        })}
                    </View>

                    {/* <==========================> --- <==========================> */}
                    <View style={{ marginBottom: 20 }}></View>
                </ScrollView>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    _main: {
        backgroundColor: "white",
        flex: 1,
        marginTop: 10,
        paddingTop: 20,
    },
    _first_por_main: {
        paddingLeft: 20,
        paddingRight: 20
    },
    _heading: {
        color: "#03042A",
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
    _page_heading_main: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 20,
        borderBottomColor: "#EFEFEF",
        borderBottomWidth: 1,
        paddingBottom: 20
    },
    _page_heading_main_tile: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 30,
        paddingBottom: 20
    },
    _page_heading_main_text: {
        fontSize: 24,
        color: "#1C295D",
    },

    _setting_pages_upgrade_icon: {
        width: 30,
        height: 30,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center"
    },
    _setting_pages_title: {
        fontSize: 16,
        color: "#333333",
        fontWeight: "bold",
    },
    _presentage: {
        fontSize: 14,
        color: "#1C295D"
    },
    _presentage2: {
        fontSize: 10,
    },
    _card_main: {
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 40
    },
    _Card: {
        height: 80,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 20
    },
    _Card_heading: {
        fontSize: 18,
        fontWeight: "bold"
    },
    _card_presentage: {
        fontSize: 16,
        fontWeight: "bold"
    }
});