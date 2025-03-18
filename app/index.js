import React from 'react';
import { View, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import Carrusel from '../components/Carrusel';
import Header from '../components/Header';
import PopularTrips from '../components/PopularTrips';
import AppNavigator from '../Navigations/navigationTypes';


const Index = () => {
  return <AppNavigator />;
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
});