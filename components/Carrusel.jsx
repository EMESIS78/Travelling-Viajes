import React from 'react';
import { View, Text, FlatList, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');
const ITEM_WIDTH = (width - 50) / 2;
const ITEM_HEIGHT = 150;

const data = [
    { id: '1', title: 'Alojamientos', icon: 'home', color: '#4A5568', screen: 'Alojamientos' },
    { id: '2', title: 'Tours', icon: 'bus', color: '#38B2AC', screen: 'Tours' },
    { id: '3', title: 'Transporte', icon: 'car', color: '#3182CE', screen: 'Transporte' },
    { id: '4', title: 'Restaurantes', icon: 'utensils', color: '#E53E3E', screen: 'Restaurantes' },
];

// Filtrar Transporte
const filteredData = data.filter(item => item.title !== 'Transporte');

const Carrusel = () => {
    const navigation = useNavigation();

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={[styles.card, { backgroundColor: item.color }]}
            onPress={() => navigation.navigate('Main', { screen: item.screen })}
            activeOpacity={0.8}
        >
            <View style={styles.iconContainer}>
                <FontAwesome5 name={item.icon} size={30} color="white" />
            </View>
            <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Categorías</Text>
            <FlatList
                data={filteredData} // Usa la lista filtrada
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.flatListContainer}
            />
        </View>
    );
};

export default Carrusel;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        paddingHorizontal: 15,
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: 15,
    },
    flatListContainer: {
        paddingBottom: 20,
    },
    card: {
        width: ITEM_WIDTH,
        height: ITEM_HEIGHT,
        borderRadius: 15,
        padding: 15,
        margin: 8,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
    },
    iconContainer: {
        backgroundColor: 'rgba(255,255,255,0.2)',
        padding: 12,
        borderRadius: 10,
        marginBottom: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
        color: 'white',
    },
});
