import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import destinations from '../models/destinations'

const { width } = Dimensions.get("window");

const PopularTrips = () => {
    const navigation = useNavigation();
    console.log("Destinos cargados:", destinations);

    const renderItem = ({ item }) => (
        <View style={styles.card}>
            {item.image && <Image source={item.image} style={styles.image} />}
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.location}>{item.location}</Text>
            <Text style={styles.price}>${item.amount}</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("TourDetail", { id: item.id })}
            >
                <Text style={styles.buttonText}>Tomar vuelo</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Viajes Populares</Text>
            {destinations.length > 0 ? (
                <FlatList
                    data={destinations}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderItem}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            ) : (
                <Text style={styles.emptyText}>No hay destinos disponibles</Text>
            )}
        </View>
    );
};

export default PopularTrips;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212', // Fondo oscuro
        paddingTop: 20,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFFFFF', // Texto blanco
        marginLeft: 20,
        marginBottom: 10,
    },
    card: {
        backgroundColor: '#1e1e1e', // Fondo de la tarjeta oscuro
        marginRight: 15,
        borderRadius: 10,
        width: width * 0.6,
        padding: 15,
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: 150,
        borderRadius: 10,
        marginBottom: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFFFFF', // Texto blanco para el título
        marginBottom: 5,
    },
    location: {
        fontSize: 14,
        color: '#B0B0B0', // Texto gris para la ubicación
        marginBottom: 5,
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFD700', // Texto dorado para el precio
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#FFD700', // Botón con fondo dorado
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#121212', // Texto oscuro para el botón
    },
    emptyText: {
        fontSize: 16,
        color: '#B0B0B0',
        textAlign: 'center',
    },
});