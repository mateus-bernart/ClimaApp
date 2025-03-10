import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import Icon from '@react-native-vector-icons/fontawesome6';
import cloudImage from '../../assets/BigVector.png';
import iconTemperature from '../../assets/iconeTemperatura.png';
import iconHumidity from '../../assets/iconeUmidade.png';
import smallCloudImage from '../../assets/Vector.png';

interface CityDetailsProps {
  route: any;
}

const CityDetails: React.FC<CityDetailsProps> = ({route}) => {
  const city = route.params;

  return (
    <LinearGradient
      colors={['#0e218b', '#000069', '#00001f']}
      style={styles.body}>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.header}>
              <Icon
                name="chevron-left"
                color="white"
                size={15}
                iconStyle="solid"
                style={styles.headerIcon}></Icon>
              <Text style={styles.headerText}>
                {city.city.replace(',', ' - ')}
              </Text>
            </View>

            <View style={styles.cardContainer}>
              <View style={styles.cardHeader}>
                <Text style={styles.cardHeaderText}>Hoje (01/12)</Text>
              </View>
              <View style={styles.tempContainer}>
                <Image source={cloudImage}></Image>
                <Text style={styles.cardTemperatureText}>33º</Text>
                <Text style={styles.temperatureDescriptionText}>
                  Sol entre nuvens
                </Text>
              </View>

              <View style={styles.cardContainerFooter}>
                <View style={styles.humidity}>
                  <View style={styles.iconAndText}>
                    <Image source={iconHumidity}></Image>
                    <Text style={styles.humidityText}>Humidity:</Text>
                  </View>
                  <Text style={styles.humidityData}>93%</Text>
                </View>
                <View style={styles.minMax}>
                  <View style={styles.iconAndText}>
                    <Image source={iconTemperature}></Image>
                    <Text style={styles.temperatureText}>Min/Max:</Text>
                  </View>
                  <Text style={styles.temperatureData}>20/34º</Text>
                </View>
              </View>
            </View>

            <View style={styles.footerContainer}>
              <View style={styles.cardFooterContainer}>
                <Text style={styles.cardFooterTitle}>Amanhã</Text>
                <Text style={styles.cardFooterDate}>(02/12)</Text>
                <Image
                  source={smallCloudImage}
                  style={styles.imageFooterContainer}></Image>
                <Text style={styles.tempFooterContainer}>20/34º</Text>
              </View>
              <View style={styles.cardFooterContainer}>
                <Text style={styles.cardFooterTitle}>Amanhã</Text>
                <Text style={styles.cardFooterDate}>(02/12)</Text>
                <Image
                  source={smallCloudImage}
                  style={styles.imageFooterContainer}></Image>
                <Text style={styles.tempFooterContainer}>20/34º</Text>
              </View>
              <View style={styles.cardFooterContainer}>
                <Text style={styles.cardFooterTitle}>Amanhã</Text>
                <Text style={styles.cardFooterDate}>(02/12)</Text>
                <Image
                  source={smallCloudImage}
                  style={styles.imageFooterContainer}></Image>
                <Text style={styles.tempFooterContainer}>20/34º</Text>
              </View>
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
  },
});
