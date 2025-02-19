import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <TextInput
        style={Styles.input}
        placeholder="enter your email"></TextInput>
      <TextInput
        style={Styles.input}
        placeholder="enter your password"></TextInput>
      <TouchableOpacity style={Styles.button} activeOpacity={0.5}>
        <Text style={Styles.buttontext}> submit</Text>
      </TouchableOpacity>
      <View>
        <View style={Styles.tandi}>
          <Text style={Styles.bochi}> hallo nijika bini gweh</Text>
        </View>
        <View style={Styles.container}>
          <Text style={Styles.title}> hallo bang joshua tandilobo</Text>
        </View>
        <View style={Styles.sub1}>
          <Text style={Styles.title1}> hallo kako pe coding tidak jadi</Text>
        </View>
        <Text style={Styles.subTitle1}>Image From URI</Text>
        <Image
          style={Styles.img1}
          source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
        />
        <Text style={Styles.subTitle}>Image From Local Directory</Text>
        <Image style={Styles.img2} source={require('./Assets/a.png')} />
        <Text style={Styles.subTitle}>Image From Base64</Text>
        <Image
          style={Styles.img1}
          source={{
            uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
          }}
        />
      </View>
    </ScrollView>
  );
};

export default App;

const Styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    borderColor: 'black',
    borderWidth: 10,
    padding: 20,
    margin: 20,
    borderRadius: 10,
  },

  title: {
    fontSize: 50,
    fontWeight: '800',
    color: 'yellow',
    textAlign: 'center',
  },

  sub1: {
    backgroundColor: 'navy',
    borderColor: 'blue',
    borderWidth: 10,
    padding: 20,
    margin: 50,
    borderRadius: 10,
  },

  title1: {
    fontSize: 50,
    fontWeight: '800',
    color: 'red',
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 30,
    fontWeight: '700',

    color: 'pink',
    padding: 30,
    textAlign: 'center',
  },

  subTitle1: {
    fontSize: 30,
    fontWeight: '700',
    marginLeft: 80,
    marginBottom: 10,
    color: 'pink',
  },

  img1: {
    marginLeft: 100,
    height: 200,
    width: 200,
  },

  img2: {
    marginLeft: 100,
    height: 200,
    width: 200,
  },

  tandi: {
    backgroundColor: 'pink',
    borderColor: 'black',
    borderWidth: 10,
    padding: 20,
    margin: 40,
    borderRadius: 10,
  },

  bochi: {
    fontSize: 50,
    fontWeight: '800',
    color: 'yellow',
    textAlign: 'center',
  },

  input: {
    borderWidth: 2,
    borderBlockColor: 'black',
    margin: 20,
    padding: 20,
    fontSize: 30,
    borderRadius: 10,
  },

  button: {
    borderWidth: 2,
    borderBlockColor: 'blue',
    margin: 20,
    padding: 20,
    fontSize: 30,
    borderRadius: 10,
    color: 'blue',
  },

  buttontext: {
    color: 'blue',
    fontSize: 20,
    textAlign: 'center',
  },
});

//1.text input dan button
//text input = bisa menginput text di dalam web/app
//input lebih ke border
//view lebih ke bacgroudn colro
//amper semua kompnenn ada padding
//excersice dua bking satu screen baru isi biodata cv kita
//bkig file baru
