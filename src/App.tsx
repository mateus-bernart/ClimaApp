import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Index from './screens/Index/Index';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Cities from './screens/Cities/Cities';
import CityDetails from './screens/CityDetails/CityDetails';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Index"
          component={Index}
          options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen
          name="Cities"
          component={Cities}
          options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen
          name="CityDetails"
          component={CityDetails}
          options={{headerShown: false}}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
