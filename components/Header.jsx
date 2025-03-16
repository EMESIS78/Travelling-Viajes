import React from "react";
import { View, Text, TextInput, StyleSheet, Dimensions, Platform } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const Header = () => {
    return (
        <View style={styles.container}>
            {/* Bienvenida */}
            <Text style={styles.welcomeText}>Bienvenido</Text>
            <Text style={styles.subText}>Eco Turismo Travel</Text>

            {/* Barra de búsqueda */}
            <View style={styles.searchContainer}>
                <FontAwesome name="search" size={18} color="#888" style={styles.icon} />
                <TextInput
                    placeholder="Encuentra tu próximo viaje"
                    placeholderTextColor="#aaa"
                    style={styles.input}
                />
            </View>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        paddingHorizontal: width * 0.06,
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
    },
    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#F5F5F5",
        borderRadius: 30,
        paddingVertical: height * 0.015,
        paddingHorizontal: width * 0.05,
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
        color: "#333",
    },
});
