import React, { useState } from 'react';
import { StyleSheet, View, Text, StatusBar, ScrollView, Image, ImageBackground, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
export default function Home(props) {

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
      <View style={styles._back_icon} >
        <Image
          source={require("./../../img/homeheader.png")}
          style={styles.homeHeader}
        />
      </View>
      <Text style={styles._heading}>Hello </Text>
      <Text style={styles._user_name}>Abhinav sharma </Text>
      {/* <==========================> --- <==========================> */}
      <View style={styles._main}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <ImageBackground
            source={require("./../../img/homescreenback.png")}
            style={styles._image}
          >

            {/* <==========================> --- <==========================> */}
            <TouchableOpacity style={styles._single_player_btn}>
              <Text style={styles._single_player_btn_text}>Single Player</Text>
              <Image
                source={require("./../../img/singlePlayer.png")}
                style={styles.singlePlayer}
              />
            </TouchableOpacity>
            {/* <==========================> --- <==========================> */}
            <TouchableOpacity style={styles._Multiplayer_btn}>
              <Text style={styles._Multiplayer_btn_text}>Multiplayer</Text>
              <Image
                source={require("./../../img/Multiplayer.png")}
                style={styles.Multiplayer}
              />
            </TouchableOpacity>

            {/* <==========================> --- <==========================> */}
            <TouchableOpacity style={styles._Settings_btn} onPress={() => props.navigation.navigate("SettingsMain")}>
              <Text style={styles._Settings_btn_text}>Settings</Text>
              <Ionicons name="ios-settings" size={98} color="#FC573B" />
            </TouchableOpacity>
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
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 20,
    marginRight: 20

  },

  _back_icon: {
    marginTop: 50,
    margin: 20,
  },
  _user_name: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
    marginLeft: 20,
    marginRight: 20
  },
  _image: {
    flex: 1,
    resizeMode: "cover",
    height: "100%",
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20
  },
  _single_player_btn: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#FFEBDC",
    padding: 10,
    borderRadius: 10,
    marginTop: 20
  },
  _single_player_btn_text: {
    fontSize: 24,
    color: "#FF9911",
    fontWeight: "bold",
  },
  singlePlayer: {
    width: 35,
    height: 106
  },
  _Multiplayer_btn: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#D6EAFD",
    padding: 10,
    borderRadius: 10,
    marginTop: 40
  },
  _Multiplayer_btn_text: {
    fontSize: 24,
    color: "#51A8F9",
    fontWeight: "bold",
  },
  Multiplayer: {
    width: 91,
    height: 111
  },
  _Settings_btn: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#FFE6E2",
    padding: 10,
    borderRadius: 10,
    marginTop: 40,
    marginBottom: 20
  },
  _Settings_btn_text: {
    fontSize: 24,
    color: "#FC573B",
    fontWeight: "bold",
  }
});