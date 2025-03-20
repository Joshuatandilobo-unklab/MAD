/* eslint-disable prettier/prettier */
import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Button from './components/Button';
import Input from './components/Input';
import Title from './components/Title';

const exercise3 = () => {
  return (
    <View style={styles.container}>
      <Title title="Welcome" />
      <Title title="Thank You" />
      <Title title="Thank You" />
      <Title title="Thank You" />
      <Input label="Username" placeholder="Masukan username anda" />
      <Input label="Password" placeholder="Masukan password anda" />
      <Input label="Alamat" placeholder="Masukan alamat anda" />
      <Input label="No Tlp" placeholder="Masukan nomor tlpn anda" />
      <Button label="Sign In" color="blue" />
      <Button label="Sign In" color="red" />
      <Button label="Sign In" color="black" />
    </View>
  );
};

export default exercise3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    backgroundColor: 'white',
  },

  title: {
    fontSize: 5,
    fontWeight: 'bold',
    color: '#000000',
    alignSelf: 'flex-start',
  },
  label: {
    fontSize: 22,
    fontWeight: '500',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    padding: 15,
    fontSize: 15,
    marginBottom: 20,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

//reasable componen (bagaiaman cara nya memecah satu file sign in ke komponen kecil dan jadi reusable(bisa di pakai ulang))
//contoh di pakai untuk login,sign up
//apa guananya = meningkatan efisen dan mempermudah
//komponenn yang di pecah tinggal di panggil di sign in (text input)
//akan dimpan di folder baru
//ctrl d untuk multiple line
// ada dua cara buat komponen input text cara 1 bkig file dan input text bikin di dalam bentuk folder sesuai naman file nya
//abis itu import input from untuk panggil di exercise3
//abis itu panggil file nya
//props untuk apa?
