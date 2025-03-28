import React, { useEffect } from 'react';
import { View, SafeAreaView, StyleSheet, ScrollView, StatusBar } from 'react-native';
import Carrusel from '../components/Carrusel';
import Header from '../components/Header';
import PopularTrips from '../components/PopularTrips';
import AppNavigator from '../Navigations/navigationTypes';

const Index = () => {
  useEffect(() => {
    // Configurar la barra de estado para un fondo oscuro y texto claro
    StatusBar.setBackgroundColor('#000');  // Color oscuro para el fondo
    StatusBar.setBarStyle('light-content'); // Texto e íconos en color claro
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <AppNavigator />
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
});