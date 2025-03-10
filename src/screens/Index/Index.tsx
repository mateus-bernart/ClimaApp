import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ClimappLogo from '../../assets/LogoBranca.png';
import LinearGradient from 'react-native-linear-gradient';
import ImageLogo from '../../assets/ilustra.png';
import Button from '../../components/Button/Button';

interface IndexProps {
  navigation: any;
}

const Index: React.FC<IndexProps> = ({navigation}) => {
  return (
    <LinearGradient
      colors={['#0e218b', '#000069', '#00001f']}
      style={styles.container}>
      <View style={styles.header}>
        <Image source={ClimappLogo}></Image>
      </View>
      <View style={styles.body}>
        <Image source={ImageLogo} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Welcome!</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Entrar" navigation={navigation}></Button>
      </View>
    </LinearGradient>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
    color: 'white',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
