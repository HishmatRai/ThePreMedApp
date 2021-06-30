import React, { useState } from 'react';
import { StyleSheet, View, Text, StatusBar, ScrollView, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
export default function Options(props) {
    const [select, setSelect] = useState(false);
    const [select2, setSelect2] = useState(false);
    const [select3, setSelect3] = useState(false);
    const [select4, setSelect4] = useState(false);
    const [select5, setSelect5] = useState(false);
    const [select6, setSelect6] = useState(false);
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
            <Text style={styles._heading}>Options</Text>
            <Text style={styles._sub_title}>Select Your Categories!</Text>
            {/* <==========================> --- <==========================> */}
            <View style={styles._main}>
                <ScrollView showsVerticalScrollIndicator={false}>

                    {/* <==========================> --- <==========================> */}
                    <View style={styles._Card}>
                        <Text style={styles._Card_title}>Biochemistry</Text>
                        <View >
                            {select ? (
                                <TouchableOpacity onPress={() => setSelect(!select)} style={styles._select}>
                                    <Ionicons name="checkmark" size={20} color="white" />
                                </TouchableOpacity>
                            ) : (
                                <TouchableOpacity onPress={() => setSelect(!select)} style={styles._select}>
                                    <Ionicons name="checkmark" size={20} color="green" />
                                </TouchableOpacity>
                            )}
                        </View>
                    </View>

                    {/* <==========================> --- <==========================> */}
                    <View style={styles._Card2}>
                        <Text style={styles._Card_title}>Behavioral Science</Text>
                        <View >
                            {select3 ? (
                                <TouchableOpacity onPress={() => setSelect3(!select3)} style={styles._select}>
                                    <Ionicons name="checkmark" size={20} color="white" />
                                </TouchableOpacity>
                            ) : (
                                <TouchableOpacity onPress={() => setSelect3(!select3)} style={styles._select}>
                                    <Ionicons name="checkmark" size={20} color="green" />
                                </TouchableOpacity>
                            )}
                        </View>
                    </View>

                    {/* <==========================> --- <==========================> */}
                    <View style={styles._Card3}>
                        <Text style={styles._Card_title}>General Chemistry</Text>
                        <View >
                            {select2 ? (
                                <TouchableOpacity onPress={() => setSelect2(!select2)} style={styles._select}>
                                    <Ionicons name="checkmark" size={20} color="white" />
                                </TouchableOpacity>
                            ) : (
                                <TouchableOpacity onPress={() => setSelect2(!select2)} style={styles._select}>
                                    <Ionicons name="checkmark" size={20} color="green" />
                                </TouchableOpacity>
                            )}
                        </View>
                    </View>

                    {/* <==========================> --- <==========================> */}
                    <View style={styles._Card4}>
                        <Text style={styles._Card_title}>Organic Chemistry</Text>
                        <View >
                            {select4 ? (
                                <TouchableOpacity onPress={() => setSelect4(!select4)} style={styles._select}>
                                    <Ionicons name="checkmark" size={20} color="white" />
                                </TouchableOpacity>
                            ) : (
                                <TouchableOpacity onPress={() => setSelect4(!select4)} style={styles._select}>
                                    <Ionicons name="checkmark" size={20} color="green" />
                                </TouchableOpacity>
                            )}
                        </View>
                    </View>

                    {/* <==========================> --- <==========================> */}
                    <View style={styles._Card5}>
                        <Text style={styles._Card_title}>Physics</Text>
                        <View >
                            {select5 ? (
                                <TouchableOpacity onPress={() => setSelect5(!select5)} style={styles._select}>
                                    <Ionicons name="checkmark" size={20} color="white" />
                                </TouchableOpacity>
                            ) : (
                                <TouchableOpacity onPress={() => setSelect5(!select5)} style={styles._select}>
                                    <Ionicons name="checkmark" size={20} color="green" />
                                </TouchableOpacity>
                            )}
                        </View>
                    </View>

                    {/* <==========================> --- <==========================> */}
                    <View style={styles._Card6}>
                        <Text style={styles._Card_title}>Biology</Text>
                        <View >
                            {select6 ? (
                                <TouchableOpacity onPress={() => setSelect6(!select6)} style={styles._select}>
                                    <Ionicons name="checkmark" size={20} color="white" />
                                </TouchableOpacity>
                            ) : (
                                <TouchableOpacity onPress={() => setSelect6(!select6)} style={styles._select}>
                                    <Ionicons name="checkmark" size={20} color="green" />
                                </TouchableOpacity>
                            )}
                        </View>
                    </View>
                    <View style={{ marginBottom: 20 }}></View>
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
        marginTop: 30,
        borderTopEndRadius: 20,
        borderTopLeftRadius: 20,
        paddingTop: 20,
        paddingHorizontal: 20
    },
    _heading: {
        color: "white",
        fontSize: 33,
        fontWeight: "bold",
        marginLeft: 20,
        marginRight: 20,
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
    _sub_title: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 20,
        marginRight: 20,
    },
    _Card: {
        height: 80,
        borderRadius: 10,
        marginTop: 20,
        paddingHorizontal: 20,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        backgroundColor: "white",
        borderRadius: 10
    },
    _Card2: {
        height: 80,
        borderRadius: 10,
        marginTop: 20,
        paddingHorizontal: 20,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        backgroundColor: "#EAEAFA",
        borderRadius: 10
    },
    _Card3: {
        height: 80,
        borderRadius: 10,
        marginTop: 20,
        paddingHorizontal: 20,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        backgroundColor: "#FED1E2",
        borderRadius: 10
    },
    _Card4: {
        height: 80,
        borderRadius: 10,
        marginTop: 20,
        paddingHorizontal: 20,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        backgroundColor: "#D1FEEA",
        borderRadius: 10
    },
    _Card5: {
        height: 80,
        borderRadius: 10,
        marginTop: 20,
        paddingHorizontal: 20,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        backgroundColor: "#D6EAFD",
        borderRadius: 10
    },
    _Card6: {
        height: 80,
        borderRadius: 10,
        marginTop: 20,
        paddingHorizontal: 20,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        backgroundColor: "#FEF5CA",
        borderRadius: 10
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
    _Card_title: {
        fontSize: 18,
        color: "#1C295D",
        fontWeight: "bold"
    }
});