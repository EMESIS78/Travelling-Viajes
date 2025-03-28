import React from "react";
import { View, Text, TextInput, StyleSheet, Dimensions, Platform, TouchableOpacity } from "react-native";
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
                <TouchableOpacity activeOpacity={0.7}>
                    <FontAwesome name="search" size={20} color="#888" style={styles.icon} />
                </TouchableOpacity>
                <TextInput
                    placeholder="Encuentra tu próximo viaje"
                    placeholderTextColor="#888"
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
        paddingTop: Platform.OS === "ios" ? height * 0.05 : height * 0.08,
        backgroundColor: "#1F2937", // Fondo más oscuro
        paddingBottom: height * 0.03,
    },
    welcomeText: {
        fontSize: width * 0.07,
        fontWeight: "bold",
        color: "#E5E7EB",
        textAlign: "left",
        marginBottom: height * 0.005,
    },
    subText: {
        fontSize: width * 0.045,
        color: "#9CA3AF",
        marginBottom: height * 0.015,
    },
    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#374151", // Color más suave para contraste
        borderRadius: 25,
        paddingVertical: height * 0.012,
        paddingHorizontal: width * 0.04,
        shadowColor: "#000",
        shadowOpacity: 0.15,
        shadowOffset: { width: 0, height: 3 },
        shadowRadius: 6,
        elevation: 4,
    },
    icon: {
        marginRight: width * 0.02,
    },
    input: {
        flex: 1,
        fontSize: width * 0.045,
        color: "#F3F4F6",
    },
});
