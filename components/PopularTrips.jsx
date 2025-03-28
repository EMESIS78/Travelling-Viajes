import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, Dimensions, ActivityIndicator } from "react-native";
import { fetchPackages } from "@/servicios/paquetes";
import Result from "../models/destinos";

const { width } = Dimensions.get("window");

// Array de imágenes locales
const localImages = [
    require("../assets/images/cusco.jpg"),
    require("../assets/images/cristo-blanco.jpeg"),
    require("../assets/images/cusco.jpg"),
    require("../assets/images/machu1.jpg"),
    require("../assets/images/machu3.jpg"),

];

const PopularTrips = () => {
    const navigation = useNavigation();
    const [packages, setPackages] = useState([]); 
    const [loading, setLoading] = useState(true); 

    // Función para asignar imágenes locales a cada elemento
    const assignLocalImages = (data) => {
        return data.map((item, index) => ({
            ...item,
            images: [{ img_url: localImages[index % localImages.length] }], // Asignación cíclica
        }));
    };

    // Carga de paquetes desde la API
    const loadPackages = async () => {
        try {
            const response = await fetchPackages();
            const dataWithImages = assignLocalImages(response); // Asignar imágenes locales
            setPackages(dataWithImages); 
        } catch (error) {
            console.error("Error al cargar paquetes:", error);
        } finally {
            setLoading(false); 
        }
    };

    useEffect(() => {
        loadPackages(); 
    }, []);

    const renderItem = ({ item }) => (
        <View style={styles.card}>
            {item.images.length > 0 && (
                <Image source={item.images[0].img_url} style={styles.image} />
            )}
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.location}>{item.location}</Text>
            <Text style={styles.price}>${item.price}</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    console.log({ id: item.id });
                    navigation.navigate("TourDetail", { id: item.id });
                }}
            >
                <Text style={styles.buttonText}>Tomar vuelo</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Viajes Populares</Text>
            {loading ? (
                <ActivityIndicator size="large" color="#FFD700" />
            ) : packages.length > 0 ? (
                <FlatList
                    data={packages}
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
        backgroundColor: '#121212',
        paddingTop: 20,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginLeft: 20,
        marginBottom: 10,
    },
    card: {
        backgroundColor: '#1e1e1e',
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
        color: '#FFFFFF',
        marginBottom: 5,
    },
    location: {
        fontSize: 14,
        color: '#B0B0B0',
        marginBottom: 5,
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFD700',
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#FFD700',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#121212',
    },
    emptyText: {
        fontSize: 16,
        color: '#B0B0B0',
        textAlign: 'center',
    },
});
