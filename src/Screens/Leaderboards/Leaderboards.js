import React, { useState } from 'react';
import { StyleSheet, View, Text, StatusBar, ScrollView, TouchableOpacity, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
export default function Leaderboards(props) {
    return (
        <View style={styles.container}>

            {/* <==========================> --- <==========================> */}
            <StatusBar
                barStyle="white"
                hidden={false}
                backgroundColor="#FFAF01"
                translucent={true}
            />

            {/* <==========================> --- <==========================> */}
            <TouchableOpacity style={styles._back_icon} onPress={() => props.navigation.goBack()}>
                <Ionicons name="chevron-back" size={30} color="white" />
            </TouchableOpacity>
            <Image
                source={require("./../../img/LeaderboardsCap.png")}
                style={styles.LeaderboardsCap}
            />
            <Text style={styles._heading}>Leaderboards</Text>
            {/* <==========================> --- <==========================> */}
            <View style={styles._main}>
                <ScrollView showsVerticalScrollIndicator={false}>

                    {/* <==========================> --- <==========================> */}
                    <TouchableOpacity style={styles._card3}>
                        <View style={styles._card3_data}>
                            <Text style={styles.card3_title}>Global {"\n"}High Score</Text>
                            <Image
                                source={require("./../../img/GlobalHighScore.png")}
                                style={styles.GlobalHighScore}
                            />
                        </View>
                    </TouchableOpacity>

                    {/* <==========================> --- <==========================> */}
                    <TouchableOpacity style={styles._card5}>
                        <View style={styles._card3_data}>
                            <Text style={styles.card3_title}>Institution  {"\n"}High Score</Text>
                            <Image
                                source={require("./../../img/InstitutionHighScore.png")}
                                style={styles.InstitutionHighScore}
                            />
                        </View>
                    </TouchableOpacity>

                    {/* <==========================> --- <==========================> */}
                    <Image
                        source={require("./../../img/LeaderboardsBg.png")}
                        style={styles.LeaderboardsBg}
                    />
                </ScrollView>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFAF01"
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
        marginRight: 20,
        marginTop:-40

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
        height: 163,
        marginTop: 30,
        justifyContent: "center",
        alignSelf: "center"
    },
    _card5: {
        backgroundColor: "#41C188",
        width: "90%",
        borderRadius: 10,
        padding: 10,
        height: 136,
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
        fontSize: 24,
        color: "white",
        fontWeight: "bold"
    },
    LeaderboardsBg: {
        marginTop: 30,
        // width: "100%",
        // height:250,
        alignSelf:"center"
    },
    LeaderboardsCap:{
        alignSelf:"flex-end",
        marginRight:80,
        marginTop:-50
    }
});