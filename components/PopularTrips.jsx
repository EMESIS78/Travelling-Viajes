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
        marginTop: 20,
        paddingLeft: 15,
        backgroundColor: '#121212'
    },
    header: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 10,
        color: '#fff',
    },
    card: {
        backgroundColor: "#1f1f1f",
        borderRadius: 10,
        padding: 10,
        marginRight: 15,
        width: 200,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 5,
    },
    image: {
        width: "100%",
        height: 120,
        borderRadius: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        marginVertical: 5,
        color: '#fff',
    },
    location: {
        fontSize: 14,
        color: "gray",
    },
    price: {
        fontSize: 14,
        fontWeight: "bold",
        marginTop: 5,
        color: '#fff',
    },
    button: {
        marginTop: 10,
        backgroundColor: "#ff5a5f",
        paddingVertical: 8,
        borderRadius: 5,
        alignItems: "center",
    },
    buttonText: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "bold",
    },
    emptyText: {
        color: '#fff', // Texto blanco para cuando no hay destinos
        fontSize: 16,
        fontWeight: "bold",
        textAlign: 'center',
        marginTop: 20,
    },
});