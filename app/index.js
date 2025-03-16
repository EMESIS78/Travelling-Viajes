import React from 'react';
import { View, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import Carrusel from '../components/Carrusel';
import Header from '../components/Header';
import PopularTrips from '../components/PopularTrips';


const Index = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header />
        <Carrusel />
        <PopularTrips />
      </ScrollView>
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