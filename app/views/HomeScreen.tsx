import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import Header from '../../components/Header';
import Carrusel from '../../components/Carrusel';
import PopularTrips from '../../components/PopularTrips';

const HomeScreen = () => {
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
    },
});

export default HomeScreen;