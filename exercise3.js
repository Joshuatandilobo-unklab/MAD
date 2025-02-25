/* eslint-disable prettier/prettier */
import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const exercise3 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Welcome</Text>
      </View>

      <Text style={styles.label}>Username</Text>
      <TextInput
        style={styles.input}
        placeholder="Masukan username anda"
        placeholderTextColor="#B0B0B0"
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Masukan password anda"
        placeholderTextColor="#B0B0B0"
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} activeOpacity={0.8}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default exercise3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F8F8F8',
  },
  headerContainer: {
    width: '100%',
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000000',
    alignSelf: 'flex-start',
  },
  label: {
    alignSelf: 'flex-start',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: 10,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#D1D1D1',
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    backgroundColor: '#FFF',
    marginBottom: 10,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#FF6600',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
