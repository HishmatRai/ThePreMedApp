import React from 'react';
import { StyleSheet, View } from 'react-native';
import Navigation from './src/Config/Navigations/Navigations';
export default function App(props) {
  return (
    <View style={styles.container}>
      <Navigation />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});