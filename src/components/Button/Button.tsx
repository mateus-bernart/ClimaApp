import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React, {ReactElement} from 'react';
import Icon from '@react-native-vector-icons/fontawesome6';

interface ButtonProps {
  title: string;
  navigation: any;
}

const Button: React.FC<ButtonProps> = ({title, navigation}) => {
  return (
    <TouchableOpacity
      style={styles.buttonContainer}
      onPress={() => {
        navigation.navigate('Cities');
      }}>
      <Text style={styles.buttonText}>{title}</Text>
      <Icon name="arrow-right" size={25} iconStyle="solid"></Icon>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
    padding: 8,
    backgroundColor: '#7693FF',
    borderRadius: 32,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
