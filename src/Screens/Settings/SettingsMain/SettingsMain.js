import React, { useState } from 'react';
import { StyleSheet, View, Text, StatusBar, ScrollView, TouchableOpacity, Image,Share } from 'react-native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
export default function SettingsMain(props) {
    const onShare = async () => {
        try {
          const result = await Share.share({
            message:
              'React Native | A framework for building native apps using React',
          });
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
          alert(error.message);
        }
    }
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
            <Text style={styles._heading}>Settings</Text>
            {/* <==========================> --- <==========================> */}
            <View style={styles._main}>
                <ScrollView showsVerticalScrollIndicator={false}>

                    {/* <==========================> --- <==========================> */}
                    <View style={styles._first_por_main}>
                        <View style={styles._page_heading_main_tile}>
                            <Text style={styles._page_heading_main_text}>Account Details</Text>
                            <TouchableOpacity style={styles._edit_btn}  onPress={() => props.navigation.navigate("AccountDetails")}>
                                <Text style={styles._edit_btn_text}>Edit</Text>
                            </TouchableOpacity>
                        </View>

                        {/* <==========================> --- <==========================> */}
                        <TouchableOpacity style={styles._page_heading_main}>
                            <View style={styles._setting_pages_icon_main}>
                                <View style={styles._setting_pages_upgrade_icon}>
                                    <Image
                                        source={require("./../../../img/arrow_right_up_grblue.png")}
                                        style={styles.arrow_right_up}
                                    />
                                </View>
                                <Text style={styles._setting_pages_title}>Upgrade to Premium</Text>
                            </View>
                            <View style={styles._right_icon_main}>
                                <AntDesign name="right" size={30} color="#8290AB" />
                            </View>
                        </TouchableOpacity>

                        {/* <==========================> --- <==========================> */}
                        <TouchableOpacity style={styles._page_heading_main}>
                            <View style={styles._setting_pages_icon_main}>
                                <View style={styles._setting_pages_Redeem_icon}>
                                    <Image
                                        source={require("./../../../img/arrow_right_up_blue_light.png")}
                                        style={styles.arrow_right_up}
                                    />
                                </View>
                                <Text style={styles._setting_pages_title}>Redeem Code</Text>
                            </View>
                            <View style={styles._right_icon_main}>
                                <AntDesign name="right" size={30} color="#8290AB" />
                            </View>
                        </TouchableOpacity>

                        {/* <==========================> --- <==========================> */}
                        <TouchableOpacity style={styles._page_heading_main} onPress={() => props.navigation.navigate("MyStats")}>
                            <View style={styles._setting_pages_icon_main}>
                                <View style={styles._setting_pages_MyStats_icon}>
                                    <Image
                                        source={require("./../../../img/cloud_message.png")}
                                        style={styles.arrow_right_up}
                                    />
                                </View>
                                <Text style={styles._setting_pages_title}>My Stats</Text>
                            </View>
                            <View style={styles._right_icon_main}>
                                <AntDesign name="right" size={30} color="#8290AB" />
                            </View>
                        </TouchableOpacity>

                        {/* <==========================> --- <==========================> */}
                        <View style={styles._page_heading_main_tile}>
                            <Text style={styles._page_heading_main_text}>App Information</Text>
                        </View>

                        {/* <==========================> --- <==========================> */}
                        <TouchableOpacity style={styles._page_heading_main} onPress={() => props.navigation.navigate("SiriShortcuts")}>
                            <View style={styles._setting_pages_icon_main}>
                                <View style={styles._setting_pages_SiriShortcuts_icon}>
                                    <Image
                                        source={require("./../../../img/sun_star.png")}
                                        style={styles.arrow_right_up}
                                    />
                                </View>
                                <Text style={styles._setting_pages_title}>Siri Shortcuts</Text>
                            </View>
                            <View style={styles._right_icon_main}>
                                <AntDesign name="right" size={30} color="#8290AB" />
                            </View>
                        </TouchableOpacity>

                        {/* <==========================> --- <==========================> */}
                        <TouchableOpacity style={styles._page_heading_main}>
                            <View style={styles._setting_pages_icon_main}>
                                <View style={styles._setting_pages_Rate_icon}>
                                    <AntDesign name="staro" size={20} color="#F9D522" />
                                </View>
                                <Text style={styles._setting_pages_title}>Rate in the App Store</Text>
                            </View>
                            <View style={styles._right_icon_main}>
                                <AntDesign name="right" size={30} color="#8290AB" />
                            </View>
                        </TouchableOpacity>

                        {/* <==========================> --- <==========================> */}
                        <TouchableOpacity style={styles._page_heading_main} onPress={onShare}>
                            <View style={styles._setting_pages_icon_main}>
                                <View style={styles._setting_pages_Share_icon}>
                                    <FontAwesome name="share-square-o" size={20} color="#41C188" />
                                </View>
                                <Text style={styles._setting_pages_title}>Share With a Friend</Text>
                            </View>
                            <View style={styles._right_icon_main}>
                                <AntDesign name="right" size={30} color="#8290AB" />
                            </View>
                        </TouchableOpacity>

                        {/* <==========================> --- <==========================> */}
                        <TouchableOpacity style={styles._page_heading_main}>
                            <View style={styles._setting_pages_icon_main}>
                                <View style={styles._setting_pages_Contact_icon}>
                                    <MaterialCommunityIcons name="email-outline" size={20} color="#4791FF" />
                                </View>
                                <Text style={styles._setting_pages_title}>Contact Us!</Text>
                            </View>
                            <View style={styles._right_icon_main}>
                                <AntDesign name="right" size={30} color="#8290AB" />
                            </View>
                        </TouchableOpacity>
                    </View>
                    {/* <==========================> --- <==========================> */}
                    <View style={styles._legal_main}>
                        {/* <==========================> --- <==========================> */}
                        <View style={styles._page_heading_main_tile}>
                            <Text style={styles._page_heading_main_text}>Legal</Text>
                        </View>

                        {/* <==========================> --- <==========================> */}
                        <TouchableOpacity style={styles._page_heading_main2} onPress={() => props.navigation.navigate("Privacy")}>
                            <View style={styles._setting_pages_icon_main}>
                                <View style={styles._setting_pages_Privacy_icon}>
                                <Image
                                        source={require("./../../../img/privacy.png")}
                                        style={styles.arrow_right_up}
                                    />
                                </View>
                                <Text style={styles._setting_pages_title}>Privacy Policy</Text>
                            </View>
                            <View style={styles._right_icon_main}>
                                <AntDesign name="right" size={30} color="#8290AB" />
                            </View>
                        </TouchableOpacity>

                         {/* <==========================> --- <==========================> */}
                         <TouchableOpacity style={styles._page_heading_main2} onPress={() => props.navigation.navigate("TermsOfService")}>
                            <View style={styles._setting_pages_icon_main}>
                                <View style={styles._setting_pages_Terms_icon}>
                                    <MaterialIcons name="lock" size={20} color="#7C7CE6" />
                                </View>
                                <Text style={styles._setting_pages_title}>Terms of Service</Text>
                            </View>
                            <View style={styles._right_icon_main}>
                                <AntDesign name="right" size={30} color="#8290AB" />
                            </View>
                        </TouchableOpacity>
                        <View style={{marginBottom:20}}></View>
                    </View>
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
    _first_por_main: {
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
    _page_heading_main2: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 20,
        borderBottomColor: "white",
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
        fontWeight: "bold"
    },
    _edit_btn: {
        backgroundColor: "#54C1FB",
        width: 67,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 30
    },
    _edit_btn_text: {
        fontSize: 14,
        color: "white"
    },
    _setting_pages_upgrade_icon: {
        width: 30,
        height: 30,
        backgroundColor: "#D6EAFD",
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center"
    },
    _setting_pages_Redeem_icon: {
        width: 30,
        height: 30,
        backgroundColor: "#EAEAFA",
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center"
    },
    _setting_pages_MyStats_icon: {
        width: 30,
        height: 30,
        backgroundColor: "#FFEBDC",
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center"
    },
    _setting_pages_SiriShortcuts_icon: {
        width: 30,
        height: 30,
        backgroundColor: "#E3F0E6",
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center"
    },
    _setting_pages_Rate_icon: {
        width: 30,
        height: 30,
        backgroundColor: "#FEF5CA",
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center"
    },
    _setting_pages_Share_icon: {
        width: 30,
        height: 30,
        backgroundColor: "#D1FEEA",
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center"
    },
    _setting_pages_Contact_icon: {
        width: 30,
        height: 30,
        backgroundColor: "#AACCFF",
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center"
    },
    _setting_pages_Privacy_icon:{
        width: 30,
        height: 30,
        backgroundColor: "#D6EAFD",
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center"
    },
    _setting_pages_Terms_icon:{
        width: 30,
        height: 30,
        backgroundColor: "#E9ECEF",
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center"
    },
    _setting_pages_icon_main: {
        flexDirection: "row",
        width: "90%",
        alignItems: "center",
    },
    _right_icon_main: {
        width: "10%",
        alignItems: "center",
        justifyContent: "center"
    },
    _setting_pages_title: {
        fontSize: 16,
        color: "#333333",
        fontWeight: "bold",
        marginLeft: 10
    },
    _legal_main: {
        backgroundColor: "#E9ECEF",
        flex: 1,
        borderTopEndRadius: 20,
        borderTopLeftRadius: 20,
        paddingLeft: 20,
        paddingRight: 20
    }
});