import React, { useState } from 'react';
import { StyleSheet, View, Text, StatusBar, ScrollView, TouchableOpacity, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
export default function OverviewMode(props) {
    return (
        <View style={styles.container}>

            {/* <==========================> --- <==========================> */}
            <StatusBar
                barStyle="white"
                hidden={false}
                backgroundColor="#5DDAB4"
                translucent={true}
            />

            {/* <==========================> --- <==========================> */}
            <TouchableOpacity style={styles._back_icon} onPress={() => props.navigation.goBack()}>
                <Ionicons name="chevron-back" size={30} color="white" />
            </TouchableOpacity>
            <Text style={styles._heading}>Overview Mode</Text>
            {/* <==========================> --- <==========================> */}
            <View style={styles._main}>
                <ScrollView showsVerticalScrollIndicator={false}>

                    {/* <==========================> --- <==========================> */}
                    <TouchableOpacity style={styles._card3}>
                        <View style={styles._card3_data}>
                            <Text style={styles.card3_title}>Behavioral Science</Text>
                            <Image
                                source={require("./../../img/BehavioralScience.png")}
                                style={styles.BehavioralScience}
                            />
                        </View>
                    </TouchableOpacity>

                    {/* <==========================> --- <==========================> */}
                    <TouchableOpacity style={styles._card5}>
                        <View style={styles._card3_data}>
                            <Text style={styles.card3_title}>Biology</Text>
                            <Image
                                source={require("./../../img/Biology.png")}
                                style={styles.Biology}
                            />
                        </View>
                    </TouchableOpacity>

                    {/* <==========================> --- <==========================> */}
                    <TouchableOpacity style={styles._card6}>
                        <View style={styles._card3_data}>
                            <Text style={styles.card3_title}>General Chemistry</Text>
                            <Image
                                source={require("./../../img/GeneralChemistry.png")}
                                style={styles.GeneralChemistry}
                            />
                        </View>
                    </TouchableOpacity>

                    {/* <==========================> --- <==========================> */}
                    <TouchableOpacity style={styles._card7}>
                        <View style={styles._card3_data}>
                            <Text style={styles.card3_title}>Organic Chemistry</Text>
                            <Image
                                source={require("./../../img/OrganicChemistry.png")}
                                style={styles.OrganicChemistry}
                            />
                        </View>
                    </TouchableOpacity>

                    {/* <==========================> --- <==========================> */}
                    <TouchableOpacity style={styles._card8}>
                        <View style={styles._card3_data}>
                            <Text style={styles.card3_title}>Physics</Text>
                            <Image
                                source={require("./../../img/Physics.png")}
                                style={styles.Physics}
                            />
                        </View>
                    </TouchableOpacity>

                    {/* <==========================> --- <==========================> */}
                    <TouchableOpacity style={styles._card9} onPress={() => props.navigation.navigate("Biochemistry")}>
                        <View style={styles._card3_data}>
                            <Text style={styles.card3_title}>Biochemistry</Text>
                            <Image
                                source={require("./../../img/Biochemistry.png")}
                                style={styles.Biochemistry}
                            />
                        </View>
                    </TouchableOpacity>

                    <View style={{ marginBottom: 30 }}></View>
                </ScrollView>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#5DDAB4"
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
        backgroundColor: "#EEAF63",
        width: "90%",
        borderRadius: 10,
        padding: 10,
        height: 100,
        marginTop: 30,
        justifyContent: "center",
        alignSelf: "center"
    },
    _card5: {
        backgroundColor: "#F3A282",
        width: "90%",
        borderRadius: 10,
        padding: 10,
        height: 100,
        marginTop: 30,
        justifyContent: "center",
        alignSelf: "center"
    },
    _card6: {
        backgroundColor: "#743250",
        width: "90%",
        borderRadius: 10,
        padding: 10,
        height: 100,
        marginTop: 30,
        justifyContent: "center",
        alignSelf: "center"
    },
    _card6: {
        backgroundColor: "#743250",
        width: "90%",
        borderRadius: 10,
        padding: 10,
        height: 100,
        marginTop: 30,
        justifyContent: "center",
        alignSelf: "center"
    },
    _card7: {
        backgroundColor: "#7D9A89",
        width: "90%",
        borderRadius: 10,
        padding: 10,
        height: 100,
        marginTop: 30,
        justifyContent: "center",
        alignSelf: "center"
    },
    _card8: {
        backgroundColor: "#E5D1D9",
        width: "90%",
        borderRadius: 10,
        padding: 10,
        height: 100,
        marginTop: 30,
        justifyContent: "center",
        alignSelf: "center"
    },
    _card9: {
        backgroundColor: "#BBB0C0",
        width: "90%",
        borderRadius: 10,
        padding: 10,
        height: 100,
        marginTop: 30,
        justifyContent: "center",
        alignSelf: "center"
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
});