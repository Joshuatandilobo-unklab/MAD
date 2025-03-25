/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
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

const exercise6 = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAdress] = useState('');
  const [phonenumber, setPhonenumber] = useState('');

  const onSubmit = () => {
    console.log(name, username, email, address, phonenumber);
  };

  return (
    <View>
      <Title title="Registration" />
      <Input
        label="Name"
        placeholder="Masukan nama lengkap anda"
        placeholderTextColor="#CCC"
        onChangeText={e => setName(e)}
      />
      <Input
        label="Username"
        placeholder="Masukan username anda"
        placeholderTextColor="#CCC"
        onChangeText={e => setUsername(e)}
      />
      <Input
        label="Email"
        placeholder="Masukan email anda"
        placeholderTextColor="#CCC"
        onChangeText={e => setEmail(e)}
      />
      <Input
        label="Adress"
        placeholder="Masukan alamat anda"
        placeholderTextColor="#CCC"
        onChangeText={e => setAdress(e)}
      />
      <Input
        label="Phone Number"
        placeholder="Masukan nomor telepon anda"
        placeholderTextColor="#CCC"
        onChangeText={e => setPhonenumber(e)}
        keyboardType="number-pad"
      />
      <Button label="Register" color="#D633FF" onPress={onSubmit} />
    </View>
  );
};
export default exercise6;

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
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
