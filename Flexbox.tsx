/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';

const Flexbox = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <View style={styles.redcontainer}></View>
          <View style={styles.greencontainer}></View>
          <View style={styles.pinkcontainer}></View>
          <View style={styles.bluecontainer}></View>
        </View>

        <View style={styles.ccontainer}>
          <View style={styles.redcontainer}></View>
          <View style={styles.greencontainer}></View>
          <View style={styles.pinkcontainer}></View>
          <View style={styles.bluecontainer}></View>
        </View>

        <View style={styles.cccontainer}>
          <View style={styles.redcontainer}></View>
          <View style={styles.greencontainer}></View>
          <View style={styles.pinkcontainer}></View>
          <View style={styles.bluecontainer}></View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Flexbox;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: '#B3D8A8',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    height: 300,
  },

  ccontainer: {
    backgroundColor: '#A3D1C6',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    height: 300,
  },

  cccontainer: {
    backgroundColor: '#690B22',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    height: 300,
  },

  redcontainer: {
    backgroundColor: 'cyan',
    height: 100,
    width: 100,
  },

  greencontainer: {
    backgroundColor: 'yellow',
    height: 100,
    width: 100,
  },

  pinkcontainer: {
    backgroundColor: 'pink',
    height: 100,
    width: 100,
  },

  bluecontainer: {
    backgroundColor: 'red',
    height: 100,
    width: 100,
  },
});
