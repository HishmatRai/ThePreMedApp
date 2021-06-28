import React, { useState } from 'react';
import { StyleSheet, View, Text, StatusBar, ScrollView, SafeAreaView, Image } from 'react-native';
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
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles._main}>

            {/* <==========================> --- <==========================> */}


          </View>
        </ScrollView>
      </SafeAreaView>
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
    padding: 20
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
  }
});