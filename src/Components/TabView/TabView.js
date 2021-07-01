import React from 'react';
import { Box, Tabs, NativeBaseProvider, Center } from 'native-base';
import { StyleSheet, View, Text, Image } from 'react-native';
function TabComponent() {
    return (
        <Box width="100%">
            <Tabs isFitted colorScheme="orange">
                <Tabs.Bar>
                    <Tabs.Tab style={{color:"white"}}>Rank</Tabs.Tab>
                    <Tabs.Tab>Win Rate</Tabs.Tab>
                    <Tabs.Tab>Username</Tabs.Tab>
                </Tabs.Bar>
                <Tabs.Views p={0} >
                    <Tabs.View width="100%" p={0}>
                        <View style={styles._Tab1_main}>
                            <View style={styles._tab1_card}>
                                <View style={styles._tab1_card_first}>
                                    <Image
                                        source={require("./../../img/Rank1.png")}
                                        style={styles.Rank1}
                                    />
                                </View>
                                <View style={styles._tab1_card_second}>
                                    <Text style={styles._persentage}>100%</Text>
                                </View>
                                <View style={styles._tab1_card_third}>
                                    <Text style={styles._name}> Alexander Banks</Text>
                                </View>
                            </View>
                            <View style={styles._tab1_card}>
                                <View style={styles._tab1_card_first}>
                                    <Image
                                        source={require("./../../img/Rank2.png")}
                                        style={styles.Rank1}
                                    />
                                </View>
                                <View style={styles._tab1_card_second}>
                                    <Text style={styles._persentage}>90%</Text>
                                </View>
                                <View style={styles._tab1_card_third}>
                                    <Text style={styles._name}>Mary T. Bailey</Text>
                                </View>
                            </View>
                            <View style={styles._tab1_card}>
                                <View style={styles._tab1_card_first}>
                                    <Image
                                        source={require("./../../img/Rank3.png")}
                                        style={styles.Rank1}
                                    />
                                </View>
                                <View style={styles._tab1_card_second}>
                                    <Text style={styles._persentage}>80%</Text>
                                </View>
                                <View style={styles._tab1_card_third}>
                                    <Text style={styles._name}>Felicia A. Young</Text>
                                </View>
                            </View>
                            <View style={styles._tab1_card}>
                                <View style={styles._tab1_card_first}>
                                    <Image
                                        source={require("./../../img/Rank4.png")}
                                        style={styles.Rank1}
                                    />
                                </View>
                                <View style={styles._tab1_card_second}>
                                    <Text style={styles._persentage}>50%</Text>
                                </View>
                                <View style={styles._tab1_card_third}>
                                    <Text style={styles._name}>Patrick L. Arevalo</Text>
                                </View>
                            </View>

                            <Text style={styles._total}>You: 300th</Text>
                        </View>
                    </Tabs.View>
                    <Tabs.View>Win Rate</Tabs.View>
                    <Tabs.View>Username</Tabs.View>
                </Tabs.Views>
            </Tabs>
        </Box>
    );
}
export default function () {
    return (
        <NativeBaseProvider>
            <TabComponent />
        </NativeBaseProvider>
    );
}

const styles = StyleSheet.create({
    _Tab1_main: {
        backgroundColor: "white",
        borderRadius: 10,
        padding: 10,
        marginTop:20
    },
    _tab1_card: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 20,
        borderBottomColor: "#EFEFEF",
        borderBottomWidth: 1,
        paddingBottom: 10
    },
    _tab1_card_first: {
        width: "20%"
    },
    _tab1_card_second: {
        width: "20%"
    },
    _tab1_card_third: {
        width: "60%"
    },
    _persentage: {
        fontSize: 16,
        color: "#707070",
        fontWeight: "bold"
    },
    _name: {
        fontSize: 16,
        color: "#707070",
        fontWeight: "bold",
        textAlign: "right"
    },
    _total: {
        fontSize: 16,
        color: "#41C188",
        fontWeight: "bold",
        marginTop: 100
    }
})