import React from 'react';
import { View, Text, FlatList, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');
const ITEM_WIDTH = (width - 40) / 2; // Ancho ajustado para 2 columnas
const ITEM_HEIGHT = 130;

const data = [
    { id: '1', title: 'Alojamientos', icon: 'home', color: '#6B7280', screen: 'AlojamientosScreen' },
    { id: '2', title: 'Tours', icon: 'bus', color: '#94DE57', screen: 'ToursScreen' },
    { id: '3', title: 'Transporte', icon: 'car', color: '#0A61F5', screen: 'TransporteScreen' },
    { id: '4', title: 'Restaurantes', icon: 'utensils', color: '#23D1D1', screen: 'RestaurantesScreen' },
];

const Carrusel = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Categorías</Text>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                numColumns={2} // Muestra los items en 2 columnas
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.flatListContainer}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={[styles.card, { backgroundColor: item.color }]}
                        onPress={() => {
                            console.log('Intentando navegar a:', item.screen);
                            navigation.navigate(item.screen);
                        }}
                    >
                        <View style={styles.iconContainer}>
                            <FontAwesome5 name={item.icon} size={28} color="white" />
                        </View>
                        <Text style={styles.title}>{item.title}</Text>
                        <View style={styles.footer}>
                            <Text style={styles.plus}>+4</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

export default Carrusel;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212', // Fondo oscuro para la sección del carrusel
    },
    header: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        marginLeft: 15,
        color: '#fff', // Texto blanco para el encabezado
    },
    flatListContainer: {
        paddingHorizontal: 15,
    },
    card: {
        width: ITEM_WIDTH,
        height: ITEM_HEIGHT,
        borderRadius: 15,
        padding: 15,
        margin: 4, // Ajusta el margen para que haya espacio entre las tarjetas
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
        position: 'relative',
    },
    iconContainer: {
        backgroundColor: 'rgba(255,255,255,0.3)', // Fondo semitransparente para el icono
        padding: 8,
        borderRadius: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white', // Texto blanco para el título
        marginTop: 10,
    },
    footer: {
        backgroundColor: '#222', // Fondo oscuro en el pie de la tarjeta
        width: '100%',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        paddingVertical: 6,
        alignItems: 'center',
        marginTop: 10,
    },
    plus: {
        fontSize: 14,
        color: '#fff', // Texto blanco para la parte del "+4"
        fontWeight: '600',
    },
});