//1. import component react-native sebagai core untuk kita pakai
import {Text,View, StyleSheet} from 'react-native'
//2. buat component
// component adalaah function yang return jsx = extended dari javascript tujuan mempermudah kita mmembuat mobile kareana mirip web
// arrow function = modern javascript sintax

const App = () => {
  return (
    //jsx
    <View style={styles.josh}>
      <Text style={styles.title}>hello world virgilio tambun </Text>
    <View style={styles.container}>
    </View>
    <Text style={styles.ko}>hello joshua tandilobo</Text>
    </View>
    
  )
}

//3. export component untuk memanggil di tempat lain
export default App




//4.styling
const styles = StyleSheet.create({

  josh:{
    
  
    margin:20 ,// jarak margin dengan komponen luar nya
    borderRadius: 20, // ketajaman radius merubah k
  },

  ko: {
    fontSize: 50, // properti angka
    fontWeight: '800', // string
    color: 'black', // bisa juga pakai hex #
    textAlign: 'center' // untuk membuat posisi text sesuai kemauan


  },

  container:{
    backgroundColor: 'cyan',
    borderColor: 'black', // border
    borderWidth: 5, // ketebalan border
    padding: 20, // jarak anatara text dengan border
    margin:20 ,// jarak margin dengan komponen luar nya
    borderRadius: 20, // ketajaman radius merubah k

  },
  title:{
    fontSize: 50, // properti angka
    fontWeight: '800', // string
    color: 'pink', // bisa juga pakai hex #
    textAlign: 'center' // untuk membuat posisi text sesuai kemauan
  }
}) // untuk menerima objek {}
//cara styling componen
//ini semua satu komponen 

//hari ini belaajr sebebrapa banyak componen di react native lewat text book the basic di react native
//1.core component and native component
// native = componen asli 
// native komponen di buat mengguanakn iamgeview untuk gambar 
// untuk text pake textview
// backgorung putih juga komponen di android = viewgroup
//ini tidak di pakai
//torang akan pakai komponen dari react native
//container = wadah untuk menampung komponen yang ada di dalam nya menggunakan <view>
//<text> = untuk return text
//gambar <image>
//text input <textinput>
//scroolview, stylesheet = kayak css stylig nya manual
// ini semua bisa di pakai buat buat app
// alt arrow untuk pindahkan code
//.tittle untuk mengatur ukuran teks
//margin,border,padding