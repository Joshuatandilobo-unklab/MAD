/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Linking,
  Switch,
} from 'react-native';

const Exercise2 = () => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [location, setLocation] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const projects = [
    {
      title: 'Aplikasi E-Commerce',
      description: 'Membangun platform jual beli online',
      tech: ['React Native', 'Firebase', 'Node.js'],
    },
    {
      title: 'Sistem Manajemen Inventaris',
      description: 'Aplikasi desktop untuk manajemen stok',
      tech: ['Java', 'MySQL', 'Hibernate'],
    },
  ];

  const certifications = [
    {name: 'AWS Certified Developer', issuer: 'Amazon', year: '2023'},
    {name: 'Google Mobile Web Specialist', issuer: 'Google', year: '2022'},
  ];

  const handleSave = () => {
    alert(
      `Data disimpan:\nNama: ${name}\nJenis Kelamin: ${gender}\nUmur: ${age}\nLokasi: ${location}`,
    );
  };

  const toggleTheme = () => setIsDarkMode(previousState => !previousState);
  const toggleMoreInfo = () => setShowMoreInfo(!showMoreInfo);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={[
        Styles.container,
        {backgroundColor: isDarkMode ? '#1a1a1a' : '#F8F3D9'},
      ]}>
      {/* Theme Toggle */}
      <View style={Styles.themeContainer}>
        <Text style={Styles.themeText}>Mode Gelap</Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
          onValueChange={toggleTheme}
          value={isDarkMode}
        />
      </View>

      {/* Header Section */}
      <View style={Styles.header}>
        <Image style={Styles.profileImage} source={require('./Assets/a.png')} />
        <Text style={[Styles.name, isDarkMode && Styles.darkText]}>
          {name || 'Universitas Klabat'}
        </Text>
        <Text style={[Styles.title, isDarkMode && Styles.darkText]}>
          {gender || 'Sistem Informasi'}
        </Text>

        {/* Social Media Links */}
        <View style={Styles.socialContainer}>
          <TouchableOpacity
            onPress={() => Linking.openURL('https://facebook.com')}>
            <Text style={Styles.socialLink}>📘 Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL('https://github.com')}>
            <Text style={Styles.socialLink}>🐱 GitHub</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL('https://twitter.com')}>
            <Text style={Styles.socialLink}>🐦 Twitter</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Input Section */}
      <View style={[Styles.section, isDarkMode && Styles.darkSection]}>
        <Text style={[Styles.sectionTitle, isDarkMode && Styles.darkText]}>
          Isi Data Diri
        </Text>
        <TextInput
          style={Styles.input}
          placeholder="Masukkan Nama"
          placeholderTextColor={isDarkMode ? '#888' : '#666'}
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={Styles.input}
          placeholder="Masukkan Jenis Kelamin"
          placeholderTextColor={isDarkMode ? '#888' : '#666'}
          value={gender}
          onChangeText={setGender}
        />
        <TextInput
          style={Styles.input}
          placeholder="Masukkan Umur"
          placeholderTextColor={isDarkMode ? '#888' : '#666'}
          keyboardType="numeric"
          value={age}
          onChangeText={setAge}
        />
        <TextInput
          style={Styles.input}
          placeholder="Masukkan Lokasi"
          placeholderTextColor={isDarkMode ? '#888' : '#666'}
          value={location}
          onChangeText={setLocation}
        />
        <TouchableOpacity
          style={[Styles.button, isDarkMode && Styles.darkButton]}
          activeOpacity={0.5}
          onPress={handleSave}>
          <Text style={Styles.buttonText}>Simpan</Text>
        </TouchableOpacity>
      </View>

      {/* Expandable Additional Info */}
      <TouchableOpacity onPress={toggleMoreInfo} style={Styles.expandButton}>
        <Text style={Styles.expandButtonText}>
          {showMoreInfo ? '▲ Sembunyikan Info ▲' : '▼ Tampilkan Info Lainnya ▼'}
        </Text>
      </TouchableOpacity>

      {showMoreInfo && (
        <>
          {/* Projects Section */}
          <View style={[Styles.section, isDarkMode && Styles.darkSection]}>
            <Text style={[Styles.sectionTitle, isDarkMode && Styles.darkText]}>
              Proyek Terkini
            </Text>
            {projects.map((project, index) => (
              <View key={index} style={Styles.projectCard}>
                <Text
                  style={[Styles.projectTitle, isDarkMode && Styles.darkText]}>
                  {project.title}
                </Text>
                <Text
                  style={[Styles.projectDesc, isDarkMode && Styles.darkText]}>
                  {project.description}
                </Text>
                <View style={Styles.techContainer}>
                  {project.tech.map((tech, i) => (
                    <Text key={i} style={Styles.techTag}>
                      {tech}
                    </Text>
                  ))}
                </View>
              </View>
            ))}
          </View>

          {/* Certifications Section */}
          <View style={[Styles.section, isDarkMode && Styles.darkSection]}>
            <Text style={[Styles.sectionTitle, isDarkMode && Styles.darkText]}>
              Sertifikasi
            </Text>
            {certifications.map((cert, index) => (
              <View key={index} style={Styles.certItem}>
                <Text style={[Styles.certTitle, isDarkMode && Styles.darkText]}>
                  {cert.name}
                </Text>
                <Text
                  style={[Styles.certDetails, isDarkMode && Styles.darkText]}>
                  {cert.issuer} | {cert.year}
                </Text>
              </View>
            ))}
          </View>

          {/* Language Proficiency */}
          <View style={[Styles.section, isDarkMode && Styles.darkSection]}>
            <Text style={[Styles.sectionTitle, isDarkMode && Styles.darkText]}>
              Kemampuan Bahasa
            </Text>
            <View style={Styles.languageItem}>
              <Text
                style={[Styles.languageText, isDarkMode && Styles.darkText]}>
                Bahasa Indonesia
              </Text>
              <View style={Styles.progressBar}>
                <View style={[Styles.progressFill, {width: '100%'}]} />
              </View>
            </View>
            <View style={Styles.languageItem}>
              <Text
                style={[Styles.languageText, isDarkMode && Styles.darkText]}>
                English
              </Text>
              <View style={Styles.progressBar}>
                <View style={[Styles.progressFill, {width: '80%'}]} />
              </View>
            </View>
          </View>

          {/* Hobbies Section */}
          <View style={[Styles.section, isDarkMode && Styles.darkSection]}>
            <Text style={[Styles.sectionTitle, isDarkMode && Styles.darkText]}>
              Hobi
            </Text>
            <View style={Styles.hobbiesContainer}>
              <Text style={Styles.hobbyItem}>🎮 Bermain Game</Text>
              <Text style={Styles.hobbyItem}>📚 Membaca Buku</Text>
              <Text style={Styles.hobbyItem}>🎸 Bermain Gitar</Text>
              <Text style={Styles.hobbyItem}>🌏 Travelling</Text>
            </View>
          </View>
        </>
      )}

      {/* Contact Information */}
      <View style={[Styles.section, isDarkMode && Styles.darkSection]}>
        <Text style={[Styles.sectionTitle, isDarkMode && Styles.darkText]}>
          Informasi Kontak
        </Text>
        <View style={Styles.contactItem}>
          <Text style={isDarkMode && Styles.darkText}>
            📧 joshuawowiling456@gmail.com
          </Text>
          <Text style={isDarkMode && Styles.darkText}>
            📱 +62 813 540 86123
          </Text>
          <Text style={isDarkMode && Styles.darkText}>
            📍 Manado, Indonesia
          </Text>
          <Text style={isDarkMode && Styles.darkText}>
            🔗 linkedin.com/in/yourprofile
          </Text>
        </View>
      </View>

      {/* Education */}
      <View style={[Styles.section, isDarkMode && Styles.darkSection]}>
        <Text style={[Styles.sectionTitle, isDarkMode && Styles.darkText]}>
          Pendidikan
        </Text>
        <View style={Styles.item}>
          <Text style={[Styles.itemTitle, isDarkMode && Styles.darkText]}>
            Universitas Klabat
          </Text>
          <Text style={[Styles.itemSubtitle, isDarkMode && Styles.darkText]}>
            Sistem Informasi (2020-2024)
          </Text>
          <Text style={isDarkMode && Styles.darkText}>IPK: 3.99</Text>
        </View>
      </View>

      {/* Experience */}
      <View style={[Styles.section, isDarkMode && Styles.darkSection]}>
        <Text style={[Styles.sectionTitle, isDarkMode && Styles.darkText]}>
          Pengalaman Kerja
        </Text>
        <View style={Styles.item}>
          <Text style={[Styles.itemTitle, isDarkMode && Styles.darkText]}>
            Perusahaan ABC
          </Text>
          <Text style={[Styles.itemSubtitle, isDarkMode && Styles.darkText]}>
            Software Developer (2022-Sekarang)
          </Text>
          <Text style={isDarkMode && Styles.darkText}>
            - Mengembangkan aplikasi mobile
          </Text>
          <Text style={isDarkMode && Styles.darkText}>
            - Membuat e-commerce
          </Text>
        </View>
      </View>

      {/* Skills */}
      <View style={[Styles.section, isDarkMode && Styles.darkSection]}>
        <Text style={[Styles.sectionTitle, isDarkMode && Styles.darkText]}>
          Keahlian
        </Text>
        <View style={Styles.skillsContainer}>
          <Text style={Styles.skill}>React Native</Text>
          <Text style={Styles.skill}>JavaScript</Text>
          <Text style={Styles.skill}>UI/UX Design</Text>
          <Text style={Styles.skill}>Project Management</Text>
          <Text style={Styles.skill}>Node.js</Text>
          <Text style={Styles.skill}>Firebase</Text>
          <Text style={Styles.skill}>Git</Text>
          <Text style={Styles.skill}>Agile Methodology</Text>
        </View>
      </View>

      {/* Footer */}
      <View style={Styles.footer}>
        <Text style={[Styles.footerText, isDarkMode && Styles.darkText]}>
          © 2024 Universitas Klabat. All rights reserved.
        </Text>
      </View>
    </ScrollView>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  darkSection: {
    backgroundColor: '#2d2d2d',
  },
  darkText: {
    color: '#fff',
  },
  darkButton: {
    backgroundColor: '#2980b9',
  },
  themeContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 20,
  },
  themeText: {
    marginRight: 10,
    color: '#666',
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
    borderWidth: 3,
    borderColor: '#3498db',
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
    textAlign: 'center',
  },
  title: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
    gap: 15,
  },
  socialLink: {
    color: '#3498db',
    fontWeight: '500',
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
    color: '#333',
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
  expandButton: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    alignItems: 'center',
  },
  expandButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  projectCard: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
  },
  projectTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  projectDesc: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  techContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  techTag: {
    backgroundColor: '#3498db',
    color: 'white',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 15,
    fontSize: 12,
  },
  certItem: {
    marginBottom: 15,
  },
  certTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#34495e',
  },
  certDetails: {
    fontSize: 14,
    color: '#7f8c8d',
  },
  languageItem: {
    marginBottom: 15,
  },
  languageText: {
    fontSize: 14,
    marginBottom: 5,
    color: '#333',
  },
  progressBar: {
    height: 8,
    backgroundColor: '#ecf0f1',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#3498db',
    borderRadius: 4,
  },
  hobbiesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15,
  },
  hobbyItem: {
    fontSize: 14,
    color: '#333',
    backgroundColor: '#ecf0f1',
    padding: 8,
    borderRadius: 20,
  },
  footer: {
    marginTop: 30,
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: '#ecf0f1',
    alignItems: 'center',
  },
  footerText: {
    color: '#666',
    fontSize: 12,
  },
  // ... (Existing styles remain the same)
});

export default Exercise2;
