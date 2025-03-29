<<<<<<< Updated upstream
import React, { useRef } from 'react';
import { View, Text, FlatList, Dimensions, Animated, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

=======
import React, { useCallback } from 'react';
import { View, Text, FlatList, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { MotiView } from "moti";
>>>>>>> Stashed changes

const { width } = Dimensions.get('window');
const ITEM_WIDTH = width * 0.4;
const ITEM_HEIGHT = 130;

const data = [
<<<<<<< Updated upstream
    { id: '1', title: 'Alojamientos', icon: 'home', color: '#2DD4BF', screen: 'AlojamientosScreen' },
    { id: '2', title: 'Tours', icon: 'bus', color: '#A855F7', screen: 'ToursScreen' },
    { id: '3', title: 'Transporte', icon: 'car', color: '#FACC15', screen: 'TransporteScreen' },
    { id: '4', title: 'Restaurantes', icon: 'utensils', color: '#EF4444', screen: 'RestaurantesScreen' },
=======
    { id: '1', title: 'Alojamientos', icon: 'home', color: '#FF6B6B', screen: 'Alojamientos' },
    { id: '2', title: 'Tours', icon: 'bus', color: '#4ECDC4', screen: 'Tours' },
    { id: '3', title: 'Transporte', icon: 'car', color: '#FF9F1C', screen: 'Transporte' },
    { id: '4', title: 'Restaurantes', icon: 'utensils', color: '#3A86FF', screen: 'Restaurantes' },
>>>>>>> Stashed changes
];

// 🔹 Componente optimizado para cada ítem de la lista
const CategoryItem = React.memo(({ item, index, onPress }) => (
    <MotiView
        from={{ opacity: 0, translateY: 10 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ type: "spring", delay: index * 80 }}
    >
        <TouchableOpacity style={[styles.card, { backgroundColor: item.color }]} onPress={() => onPress(item.screen)} activeOpacity={0.8}>
            <MotiView from={{ scale: 1 }} animate={{ scale: [1, 0.97, 1] }} transition={{ type: "timing", duration: 150 }}>
                <View style={styles.iconContainer}>
                    <FontAwesome5 name={item.icon} size={28} color="white" />
                </View>
            </MotiView>
            <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
    </MotiView>
));

const Carrusel = () => {
    const scrollX = useRef(new Animated.Value(0)).current;
    const navigation = useNavigation();
<<<<<<< Updated upstream
    const route = useRoute(); 

=======
    const handleNavigation = useCallback((screen) => navigation.navigate("Main", { screen }), [navigation]);
>>>>>>> Stashed changes

    return (
        <View style={styles.container}>
            <Text style={styles.header}>🌎 Explora nuestras categorías</Text>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
<<<<<<< Updated upstream
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
=======
                numColumns={2}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.flatListContainer}
                renderItem={({ item, index }) => <CategoryItem item={item} index={index} onPress={handleNavigation} />}
>>>>>>> Stashed changes
            />
        </View>
    );
};

export default Carrusel;

const styles = StyleSheet.create({
    container: {
<<<<<<< Updated upstream
        marginTop: 20,
=======
        flex: 1,
        backgroundColor: "#1B1B2F",
>>>>>>> Stashed changes
    },
    header: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 15,
        marginLeft: 15,
<<<<<<< Updated upstream
=======
        color: "#FFFFFF",
    },
    flatListContainer: {
        paddingHorizontal: 15,
>>>>>>> Stashed changes
    },
    card: {
        width: ITEM_WIDTH,
        height: ITEM_HEIGHT,
        borderRadius: 18,
        padding: 15,
<<<<<<< Updated upstream
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
=======
        margin: 6,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 6,
    },
    iconContainer: {
        backgroundColor: "rgba(255,255,255,0.3)",
        padding: 10,
        borderRadius: 12,
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        color: "white",
        marginTop: 10,
    },
});
>>>>>>> Stashed changes
