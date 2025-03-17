import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import Icon from '@react-native-vector-icons/fontawesome6';
import cloudImage from '../../assets/BigVector.png';
import iconTemperature from '../../assets/iconeTemperatura.png';
import iconHumidity from '../../assets/iconeUmidade.png';
import smallCloudImage from '../../assets/Vector.png';
import {useNavigation} from '@react-navigation/native';

interface CityDetailsProps {
  route: any;
}

const CityDetails: React.FC<CityDetailsProps> = ({route}) => {
  const navigation = useNavigation();
  const city = route.params;
  const date = city.date;
  const [day, month] = date.split('/');

  //reduce the array to the value
  const minTemperature = city.forecast.reduce(
    (min: any, day: any) => Math.min(min, day.min),
    Infinity,
  );

  const maxTemperature = city.forecast.reduce(
    (max: any, day: any) => Math.max(max, day.max),
    -Infinity,
  );

  console.log(city);

  return (
    <LinearGradient
      colors={['#0e218b', '#000069', '#00001f']}
      style={styles.body}>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.header}>
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={styles.headerIcon}>
                <Icon
                  name="chevron-left"
                  color="white"
                  size={15}
                  iconStyle="solid"></Icon>
              </TouchableOpacity>
              <Text style={styles.headerText}>
                {city.city.replace(',', ' - ')}
              </Text>
            </View>
            <View style={styles.cardContainer}>
              <View style={styles.cardHeader}>
                <Text style={styles.cardHeaderText}>
                  Hoje ({month}/{day})
                </Text>
              </View>
              <View style={styles.tempContainer}>
                <Image source={cloudImage}></Image>
                <Text style={styles.cardTemperatureText}>{city.temp}º</Text>
                <Text style={styles.temperatureDescriptionText}>
                  {city.description}
                </Text>
              </View>

              <View style={styles.cardContainerFooter}>
                <View style={styles.humidity}>
                  <View style={styles.iconAndText}>
                    <Image source={iconHumidity}></Image>
                    <Text style={styles.humidityText}>Humidity:</Text>
                  </View>
                  <Text style={styles.humidityData}>{city.humidity}%</Text>
                </View>
                <View style={styles.minMax}>
                  <View style={styles.iconAndText}>
                    <Image source={iconTemperature}></Image>
                    <Text style={styles.temperatureText}>Min/Max:</Text>
                  </View>
                  <Text style={styles.temperatureData}>
                    {minTemperature}/{maxTemperature}º
                  </Text>
                </View>
              </View>
            </View>

            <View style={styles.footerContainer}>
              {city.forecast.slice(1, 4).map((day: any, index: number) => (
                <View style={styles.cardFooterContainer}>
                  <Text style={styles.cardFooterTitle}>{day.weekday}</Text>
                  <Text style={styles.cardFooterDate}>{day.date}</Text>
                  <Image
                    source={smallCloudImage}
                    style={styles.imageFooterContainer}></Image>
                  <Text style={styles.tempFooterContainer}>
                    {day.min}/{day.max}º
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default CityDetails;

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  container: {
    gap: 40,
  },
  imageFooterContainer: {
    marginVertical: 10,
  },
  tempFooterContainer: {
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold',
    color: 'white',
  },
  cardFooterDate: {
    fontSize: 15,
    fontFamily: 'Poppins-Regular',
    color: 'white',
  },
  cardFooterTitle: {
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
    color: 'white',
  },
  footerContainer: {
    gap: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardFooterContainer: {
    backgroundColor: 'rgba(255,255,255, 0.15)',
    padding: 15,
    borderRadius: 16,
    alignItems: 'center',
  },
  temperatureText: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
  },
  temperatureData: {
    color: 'white',
    fontFamily: 'Poppins-Italic',
    fontSize: 20,
  },
  humidityData: {
    color: 'white',
    fontFamily: 'Poppins-Italic',
    fontSize: 20,
  },
  humidityText: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
  },
  iconAndText: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  cardContainerFooter: {
    gap: 20,
    padding: 15,
  },
  humidity: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  minMax: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardTemperatureText: {
    fontFamily: 'Poppins-Bold',
    color: 'white',
    fontSize: 50,
  },
  temperatureDescriptionText: {
    fontFamily: 'Poppins-Regular',
    color: 'white',
    fontSize: 15,
    position: 'absolute',
    top: 140,
  },
  tempContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardHeader: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    backgroundColor: '#3554c7',
    margin: 20,
    borderRadius: 20,
  },
  cardHeaderText: {
    color: 'white',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    margin: 20,
  },
  header: {
    marginTop: 20,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: 'white',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 25,
  },
  headerIcon: {
    position: 'absolute',
    left: 0,
    marginLeft: 20,
    padding: 10,
  },
});
