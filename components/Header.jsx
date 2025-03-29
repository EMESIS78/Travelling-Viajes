import React, { useEffect, useRef } from "react";
import { View, Text, TextInput, StyleSheet, Dimensions, Platform, Animated } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const Header = () => {

    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    }, []);

    return (
        <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
            {/* Bienvenida */}
            <View style={styles.textContainer}>
                <Text style={styles.welcomeText}>Bienvenido</Text>
                <Text style={styles.subText}>Eco Turismo Travel</Text>
            </View>

            {/* Barra de búsqueda */}
            <Animated.View style={[styles.searchWrapper, { transform: [{ scale: fadeAnim }] }]}>
                <View style={styles.searchContainer}>
                    <FontAwesome name="search" size={18} color="#888" style={styles.icon} />
                    <TextInput
                        placeholder="Encuentra tu próximo destino"
                        placeholderTextColor="#555"
                        style={styles.input}
                    />
                </View>
            </Animated.View>
        </Animated.View>
    );
};

export default Header;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        paddingHorizontal: width * 0.06,
<<<<<<< Updated upstream
        paddingTop: Platform.OS === "ios" ? height * 0.01 : height * 0.08,
        backgroundColor: "#E5E5E5",
        paddingBottom: height * 0.04,
    },
    welcomeText: {
        fontSize: width * 0.07, // Aumento del tamaño de la fuente
        fontWeight: "bold",
        color: "#222", // Color más oscuro para mejor contraste
        textAlign: "left",
        marginBottom: height * 0.005, // Espaciado con el subtítulo
    },
    subText: {
        fontSize: width * 0.04,
        color: "#666",
        marginBottom: height * 0.02,
=======
        paddingTop: Platform.OS === "ios" ? height * 0.03 : height * 0.06,
        backgroundColor: "#2AB7CA", // Azul turquesa para el Header
        paddingBottom: height * 0.05,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 5,
        alignItems: "center",
    },
    textContainer: {
        width: "100%",
        alignItems: "center",
        marginBottom: height * 0.02,
    },
    welcomeText: {
        fontSize: width * 0.08,
        fontWeight: "bold",
        color: "#FFFFFF",
        textAlign: "center",
    },
    subText: {
        fontSize: width * 0.045,
        color: "#FED766", // Amarillo arena para dar un toque cálido
    },
    searchWrapper: {
        width: "100%",
        alignItems: "center",
>>>>>>> Stashed changes
    },
    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
<<<<<<< Updated upstream
        backgroundColor: "#F5F5F5",
        borderRadius: 30,
        paddingVertical: height * 0.015,
=======
        backgroundColor: "#F4F4F4",
        borderRadius: 25,
        paddingVertical: height * 0.012,
>>>>>>> Stashed changes
        paddingHorizontal: width * 0.05,
        width: "90%",
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 3,
    },
    icon: {
        marginRight: width * 0.03,
    },
    input: {
        flex: 1,
        fontSize: width * 0.045,
<<<<<<< Updated upstream
        color: "#333",
=======
        color: "#333", // Texto oscuro para mejor legibilidad
>>>>>>> Stashed changes
    },
});
