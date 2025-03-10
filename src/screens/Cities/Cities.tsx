import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView} from 'react-native-safe-area-context';
import citiesData from '../../../data/cities.json';
import cloudImage from '../../assets/Vector.png';
import Icon from '@react-native-vector-icons/fontawesome6';

interface CitiesProps {
  navigation: any;
}

const Cities: React.FC<CitiesProps> = ({navigation}) => {
  const [search, setSearch] = useState('');
  const [filteredCities, setFilteredCities] = useState(citiesData);

  useEffect(() => {
    const newFilteredCities = citiesData.filter(city =>
      city.city.toLowerCase().includes(search.toLowerCase()),
    );
    setFilteredCities(newFilteredCities);
  }, [search]);

  return (
    <LinearGradient
      colors={['#0e218b', '#000069', '#00001f']}
      style={styles.body}>
      <SafeAreaView>
        <View style={styles.textInputContainer}>
          <TextInput
            placeholder="Type the city"
            placeholderTextColor="#fff"
            style={styles.textInput}
            value={search}
            onChangeText={value => setSearch(value)}></TextInput>
          <Icon
            name="magnifying-glass"
            size={15}
            color="white"
            iconStyle="solid"></Icon>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            {filteredCities.map(city => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('CityDetails', {...city});
                }}
                key={city.city}
                style={styles.cityContainer}>
                <View style={styles.listItem}>
                  <Image source={cloudImage}></Image>
                  <Text style={styles.cityName}>
                    {city.city.replace(',', ' - ')}
                  </Text>
                  <Text style={styles.cityTemp}>{city.temp}º</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Cities;

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  cityContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  container: {
    gap: 16,
  },
  textInputContainer: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255,255,255, 0.15)',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    borderRadius: 24,
    margin: 20,
  },
  textInput: {
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
    color: 'white',
  },
  listItem: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255, 0.15)',
    width: '100%',
    height: 63,
    borderRadius: 16,
  },
  cityName: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
  },
  cityTemp: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
  },
});
