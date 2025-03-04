import React from 'react';
import {View, StyleSheet} from 'react-native';

const Flexbox = () => {
  return (
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
    </View>
  );
};

export default Flexbox;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: '#B3D8A8',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    height: '55%',
  },

  ccontainer: {
    backgroundColor: '#A3D1C6',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    height: '55%',
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
