import {Text, View, StyleSheet, Image, ScrollView} from 'react-native';

const App = () => {
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={Styles.container}>
          <Text style={Styles.title}> hallo bang joshua tandilobo</Text>
        </View>
        <View style={Styles.sub1}>
          <Text style={Styles.title1}> hallo teman teman</Text>
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
      </ScrollView>
    </View>
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
    backgroundColor: 'black',
    borderColor: 'orange',
    borderWidth: 10,
    padding: 20,
    margin: 50,
    borderRadius: 10,
  },

  title1: {
    fontSize: 50,
    fontWeight: '800',
    color: 'cyan',
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
});
