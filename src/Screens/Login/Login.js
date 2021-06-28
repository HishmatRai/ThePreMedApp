import React, { useState } from 'react';
import { StyleSheet, View, Text, StatusBar, ScrollView, TextInput, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import Fontisto from 'react-native-vector-icons/dist/Fontisto';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
export default function Login(props) {
  const [userName, onChangeUserName] = React.useState("");
  const [passwordEyeIcon, setPasswordEyeIcon] = useState(true);
  const [password, onChangePassword] = React.useState("");

  return (
    <View style={styles.container}>

      {/* <==========================> --- <==========================> */}
      <StatusBar
        barStyle="white"
        hidden={false}
        backgroundColor="white"
        translucent={true}
      />
      {/* <==========================> --- <==========================> */}
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles._main}>
            <Text style={styles._heading}>Welcome {"\n"}Back</Text>

            {/* <==========================> --- <==========================> */}

            <View style={styles._input_main}>
              <TextInput
                style={styles.input}
                onChangeText={onChangeUserName}
                value={userName}
                placeholder="User name"
                placeholderTextColor="#7B8085"
              />
            </View>
            <View style={styles._input_main}>
              <TextInput
                style={styles.inputPassword}
                onChangeText={onChangePassword}
                value={password}
                placeholder="Password"
                placeholderTextColor="#7B8085"
                secureTextEntry={passwordEyeIcon}
              />
              {passwordEyeIcon ? (
                <Entypo name="eye" size={24} color="#8290AB"
                  onPress={() => setPasswordEyeIcon(!passwordEyeIcon)} />
              ) : (
                <Entypo name="eye-with-line" size={24} color="#8290AB"
                  onPress={() => setPasswordEyeIcon(!passwordEyeIcon)} />
              )}
            </View>

            {/* <==========================> --- <==========================> */}
            <TouchableOpacity style={styles._login_btn}>
              <Text style={styles._login_btn_text}>Login now</Text>
            </TouchableOpacity>

            {/* <==========================> --- <==========================> */}
            <View style={styles._forgot_main}>
              <TouchableOpacity onPress={() => props.navigation.navigate("ForgotPassword")}>
                <Text style={styles._forgot_btn_text}>Forgot Password</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => props.navigation.navigate("Signup")}>
                <Text style={styles._create_acc_btn_text}>Create Account</Text>
              </TouchableOpacity>
            </View>

            {/* <==========================> --- <==========================> */}
            <View style={styles._other_signin_main}>
              <Text style={styles._other_login_heading}>Or Sign With </Text>
              <View style={styles._socoal_login_main}>
                <TouchableOpacity style={styles._google_login_btn}>
                  <Image
                    source={require("./../../img/chromeIcon.png")}
                    style={styles.profileImg}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles._facebook_login_btn}>
                  <Fontisto name="facebook" size={24} color="white" />
                </TouchableOpacity>
                <TouchableOpacity style={styles._apple_login_btn}>
                  <AntDesign name="apple1" size={24} color="white" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  _main: {
    margin: 20
  },
  _heading: {
    color: "#333333",
    fontSize: 33,
    fontWeight: "bold",
    marginTop: 70,
    marginBottom: 30
  },
  input: {
    fontSize: 16,
    fontWeight: "bold",
    width: "100%"
  },
  inputPassword: {
    fontSize: 16,
    fontWeight: "bold",
    width: "80%"
  },
  _input_main: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
    padding: 10,
    justifyContent: "space-between"
  },
  _login_btn: {
    backgroundColor: "#4145D1",
    borderRadius: 10,
    height: 60,
    alignSelf: "center",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 3
  },
  _login_btn_text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold"
  },
  _forgot_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 40
  },
  _forgot_btn_text: {
    color: "#333333",
    borderBottomColor: "#333333",
    borderBottomWidth: 1,
    fontSize: 15
  },
  _create_acc_btn_text: {
    color: "#54C1FB",
    borderBottomWidth: 1,
    borderBottomColor: "#54C1FB",
    fontSize: 14
  },
  _other_signin_main: {
    marginTop: 70
  },
  _other_login_heading: {
    color: "#000000",
    fontSize: 14,
    textAlign: "center"
  },
  _google_login_btn: {
    width: "30%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    height: 50
  },
  _facebook_login_btn: {
    width: "30%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2D5399",
    borderRadius: 5,
    height: 50
  },
  _apple_login_btn: {
    width: "30%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000000",
    borderRadius: 5,
    height: 50
  },
  _socoal_login_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 30
  },
  google_icon: {
    width: 24,
    height: 24
  }
});