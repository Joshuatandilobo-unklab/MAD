import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Exercise2 = () => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [location, setLocation] = useState('');

  const handleSave = () => {
    alert(
      `Data disimpan:\nNama: ${name}\nJenis Kelamin: ${gender}\nUmur: ${age}\nLokasi: ${location}`,
    );
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={Styles.container}>
      {/* Header Section */}
      <View style={Styles.header}>
        <Image style={Styles.profileImage} source={require('./Assets/a.png')} />
        <Text style={Styles.name}>{name || 'universitas klabat'}</Text>
        <Text style={Styles.title}>{gender || 'sistem'}</Text>
      </View>

      {/* Input Section */}
      <View style={Styles.section}>
        <Text style={Styles.sectionTitle}>Isi Data Diri</Text>
        <TextInput
          style={Styles.input}
          placeholder="Masukkan Nama"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={Styles.input}
          placeholder="Masukkan Jenis Kelamin"
          value={gender}
          onChangeText={setGender}
        />
        <TextInput
          style={Styles.input}
          placeholder="Masukkan Umur"
          keyboardType="numeric"
          value={age}
          onChangeText={setAge}
        />
        <TextInput
          style={Styles.input}
          placeholder="Masukkan Lokasi"
          value={location}
          onChangeText={setLocation}
        />
        <TouchableOpacity
          style={Styles.button}
          activeOpacity={0.5}
          onPress={handleSave}>
          <Text style={Styles.buttonText}>Simpan</Text>
        </TouchableOpacity>
      </View>

      {/* Contact Information */}
      <View style={Styles.section}>
        <Text style={Styles.sectionTitle}>Informasi Kontak</Text>
        <View style={Styles.contactItem}>
          <Text>📧 joshuawowiling456@gmail.com</Text>
          <Text>📱 +62 813 540 86123</Text>
          <Text>📍 Manado, Indonesia</Text>
          <Text>🔗 linkedin.com/in/yourprofile</Text>
        </View>
      </View>

      {/* Education */}
      <View style={Styles.section}>
        <Text style={Styles.sectionTitle}>Pendidikan</Text>
        <View style={Styles.item}>
          <Text style={Styles.itemTitle}>Universitas Klabat</Text>
          <Text style={Styles.itemSubtitle}>Sistem Informasi (2020-2024)</Text>
          <Text>IPK: 3.99</Text>
        </View>
      </View>

      {/* Experience */}
      <View style={Styles.section}>
        <Text style={Styles.sectionTitle}>Pengalaman Kerja</Text>
        <View style={Styles.item}>
          <Text style={Styles.itemTitle}>Perusahaan ABC</Text>
          <Text style={Styles.itemSubtitle}>
            Software Developer (2022-Sekarang)
          </Text>
          <Text>- Mengembangkan aplikasi mobile</Text>
          <Text>- Membuat e-commerce</Text>
        </View>
      </View>

      {/* Skills */}
      <View style={Styles.section}>
        <Text style={Styles.sectionTitle}>Keahlian</Text>
        <View style={Styles.skillsContainer}>
          <Text style={Styles.skill}>React Native</Text>
          <Text style={Styles.skill}>JavaScript</Text>
          <Text style={Styles.skill}>UI/UX Design</Text>
          <Text style={Styles.skill}>Project Management</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Exercise2;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 15,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  title: {
    fontSize: 18,
    color: '#666',
  },
  section: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
    borderBottomWidth: 2,
    borderBottomColor: '#3498db',
    paddingBottom: 5,
    marginBottom: 15,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#3498db',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  contactItem: {
    gap: 8,
  },
  item: {
    marginBottom: 15,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#34495e',
  },
  itemSubtitle: {
    fontSize: 14,
    color: '#7f8c8d',
    marginBottom: 5,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  skill: {
    backgroundColor: '#3498db',
    color: 'white',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 15,
  },
});
