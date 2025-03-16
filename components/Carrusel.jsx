import React, { useRef } from 'react';
import { View, Text, FlatList, Dimensions, Animated, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

const { width } = Dimensions.get('window');
const ITEM_WIDTH = width * 0.4;
const ITEM_HEIGHT = 130;

const data = [
    { id: '1', title: 'Alojamientos', icon: 'home', color: '#2DD4BF', screen: 'AlojamientosScreen' },
    { id: '2', title: 'Tours', icon: 'bus', color: '#A855F7', screen: 'ToursScreen' },
    { id: '3', title: 'Transporte', icon: 'car', color: '#FACC15', screen: 'TransporteScreen' },
    { id: '4', title: 'Restaurantes', icon: 'utensils', color: '#EF4444', screen: 'RestaurantesScreen' },
];

const Carrusel = () => {
    const scrollX = useRef(new Animated.Value(0)).current;
    const navigation = useNavigation();
    const route = useRoute(); 
    console.log('Ruta actual:', route.name);
    console.log('Navigation Object:', navigation);

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Categorías</Text>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 15 }}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: false }
                )}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={[styles.card, { backgroundColor: item.color }]}
                        onPress={() => navigation.navigate(item.screen)}// 🔹 Navega a la pantalla correspondiente
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
        marginTop: 20,
    },
    header: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        marginLeft: 15,
    },
    card: {
        width: ITEM_WIDTH,
        height: ITEM_HEIGHT,
        borderRadius: 15,
        padding: 15,
        marginHorizontal: 10,
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
        backgroundColor: 'rgba(255,255,255,0.3)',
        padding: 8,
        borderRadius: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 10,
    },
    footer: {
        backgroundColor: 'white',
        width: '100%',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        paddingVertical: 6,
        alignItems: 'center',
        marginTop: 10,
    },
    plus: {
        fontSize: 14,
        color: '#333',
        fontWeight: '600',
    },
});
