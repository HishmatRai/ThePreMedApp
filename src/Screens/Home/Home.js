import React from 'react';
import { StyleSheet, View, Text,TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
export default function Home(props) {
  return (
    <View style={styles.container}>
      {/* <==========================> --- <==========================> */}
      <Text>fsfs</Text>
      <Text>fsfs</Text>
      <AntDesign name="amazon" size={30} color="#4F8EF7" />
      <Text>Home Page</Text>
      <TouchableOpacity style={{backgroundColor:"red"}} onPress={() => props.navigation.navigate("Login")}>
      <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});