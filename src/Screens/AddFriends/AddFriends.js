import React, { useState } from 'react';
import { StyleSheet, View, Text, StatusBar, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
export default function AddFriends(props) {
    const [searchUserName, onChangeSearcUserName] = React.useState("");
    const SearchResult = [
        { title: "TheMadbrains UI/UX " },
        { title: "TheMadbrains " },
        { title: "Madbrains " },

    ]
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
            <TouchableOpacity style={styles._back_icon} onPress={() => props.navigation.goBack()}>
                <Ionicons name="chevron-back" size={30} color="white" />
            </TouchableOpacity>
            <Text style={styles._heading}>Add Friends </Text>
            <View style={styles._search_input_main}>
                <TextInput
                    style={styles._Search_input}
                    onChangeText={onChangeSearcUserName}
                    value={searchUserName}
                    placeholder="Search username "
                    placeholderTextColor="#7B8085"
                />
                <MaterialIcons name="search" size={30} color="#8290AB" />
            </View>
            {/* <==========================> --- <==========================> */}
            <View style={styles._main}>
                <ScrollView showsVerticalScrollIndicator={false}>

                    {/* <==========================> --- <==========================> */}
                    {searchUserName !== "" ?
                    <View>
                        {
                            SearchResult.map((v, i) => {
                                return (
                                    <View style={styles._search_result_show_main}>
                                        <View style={styles._search_result_title_main}>
                                            <Text style={styles._search_result_title}>{v.title}</Text>
                                        </View>
                                        <TouchableOpacity style={styles._add_btn}>
                                            <Ionicons name="ios-person-add" size={20} color="#4145D1" />
                                            <Text style={styles._add_btn_text}>Add</Text>
                                        </TouchableOpacity>
                                    </View>
                                )
                            })
                        } 
                        </View>: null}
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
        borderTopLeftRadius: 40,
        borderTopRightRadius:40,
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20
    },
    _heading: {
        color: "white",
        fontSize: 33,
        fontWeight: "bold",
        marginLeft: 20,
        marginRight: 20

    },
    _Search_input: {
        fontSize: 16,
        fontWeight: "bold",
        width: "90%",
    },
    _input_main: {
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 5,
        justifyContent: "space-between",
    },
    _search_input_main: {
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 5,
        justifyContent: "space-between",
        backgroundColor: "white",
        margin: 20,
        paddingHorizontal: 10
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
    _search_result_show_main: {
        marginTop: 40,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    _search_result_title_main: {
        width: "75%"
    },
    _search_result_title: {
        fontSize: 16,
        color: "#1C295D",
        fontWeight: "bold"
    },
    _add_btn: {
        backgroundColor: "#EBECFB",
        flexDirection: "row",
        alignItems: "center",
        width: "25%",
        borderRadius: 5,
        height: 40,
        justifyContent: "center"
    },
    _add_btn_text: {
        fontSize: 15,
        color: "#4145D1",
        fontWeight: "bold",
        marginLeft: 10
    }
});