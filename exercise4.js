/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

const Flexbox = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <View style={styles.blackBox}></View>
        <View style={styles.yellowBox}></View>
        <View style={styles.blackBox}></View>
      </View>

      <View style={styles.logoContainer}>
        <Image
          source={require('./Assets/logo-with-motto-3.png')}
          style={styles.logo}
        />
      </View>

      <View style={styles.bottomContainer}>
        <View style={styles.blackBox}></View>
        <View style={styles.yellowBox}></View>
        <View style={styles.blackBox}></View>
      </View>
    </View>
  );
};

export default Flexbox;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#CAE0BC',
  },
  topContainer: {
    backgroundColor: '#EAFAEA',
    width: '100%',
    height: 150,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    paddingRight: 100,
  },
  bottomContainer: {
    flexDirection: 'row',
    backgroundColor: '#EAFAEA',
    width: '100%',
    height: 150,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  blackBox: {
    backgroundColor: 'black',
    width: 85,
    height: 85,
  },
  yellowBox: {
    backgroundColor: 'yellow',
    width: 85,
    height: 85,
  },
  logoContainer: {
    alignItems: 'center',
  },
  logo: {
    width: 390,
    height: 350,
    resizeMode: 'contain',
  },
  universityText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  tagline: {
    fontSize: 14,
    fontStyle: 'italic',
    color: 'gray',
  },
});
