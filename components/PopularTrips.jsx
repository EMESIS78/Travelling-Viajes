import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import destinations from '../models/destinations';

const { width } = Dimensions.get("window");

const PopularTrips = () => {
    const navigation = useNavigation();

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
            <Text style={styles.header}>🌍 Viajes Populares</Text>
            {destinations.length > 0 ? (
                <FlatList
                    data={destinations}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderItem}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    ListFooterComponent={<View style={{ width: width * 0.2 }} />} // Espacio extra al final
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
<<<<<<< Updated upstream
        marginTop: 20,
        paddingLeft: 15,
    },
    header: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 10,
    },
    card: {
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 10,
        marginRight: 15,
        width: 200,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
=======
        flex: 1,
        backgroundColor: '#1B1B2F', // Azul profundo para dar contraste con el carrusel
        paddingTop: 10,
        paddingBottom: 90,
    },
    header: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#E9C46A', // Dorado arena para destacar
        marginLeft: 20,
        marginBottom: 10,
    },
    card: {
        backgroundColor: '#00A896', // Turquesa tropical, combinando con el carrusel
        marginRight: 15,
        borderRadius: 12,
        width: width * 0.6,
        padding: 15,
        alignItems: 'center',
        shadowColor: '#F4A261', // Sombra naranja para calidez
        shadowOpacity: 0.3,
        shadowRadius: 6,
>>>>>>> Stashed changes
        elevation: 5,
    },
    image: {
        width: "100%",
        height: 120,
        borderRadius: 10,
    },
    title: {
<<<<<<< Updated upstream
        fontSize: 16,
        fontWeight: "bold",
        marginVertical: 5,
    },
    location: {
        fontSize: 14,
        color: "gray",
    },
    price: {
        fontSize: 14,
        fontWeight: "bold",
        marginTop: 5,
    },
    button: {
        marginTop: 10,
        backgroundColor: "#ff5a5f",
        paddingVertical: 8,
=======
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1B1B2F', // Naranja atardecer para coherencia
        marginBottom: 5,
    },
    location: {
        fontSize: 14,
        color: '#E9C46A', // Dorado arena para elegancia
        marginBottom: 5,
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#F4A261', // Mantener consistencia con el título
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#E9C46A', // Dorado arena para resaltar
        paddingVertical: 10,
        paddingHorizontal: 20,
>>>>>>> Stashed changes
        borderRadius: 5,
        alignItems: "center",
    },
    buttonText: {
<<<<<<< Updated upstream
        color: "#fff",
        fontSize: 14,
        fontWeight: "bold",
=======
        fontSize: 16,
        fontWeight: 'bold',
        color: '#1B1B2F', // Azul oscuro para contraste
    },
    emptyText: {
        fontSize: 16,
        color: '#F4A261', // Naranja atardecer para armonía visual
        textAlign: 'center',
>>>>>>> Stashed changes
    },
});
