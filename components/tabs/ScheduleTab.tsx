import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const ScheduleTab = ({ flights }: { flights: { departure: string; arrival: string }[] }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.sectionTitle}>Vuelos Disponibles</Text>
            {flights.map((flight, index) => (
                <TouchableOpacity key={index} style={styles.flightItem}>
                    <Text style={styles.flightText}>
                        ✈ {flight.departure} → {flight.arrival}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

export default ScheduleTab;

const styles = StyleSheet.create({
    container: {
        padding: 15,
        flex: 1,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#FFFFFF", // Título blanco para contraste en tema oscuro
        marginBottom: 15,
        textAlign: "center",
    },
    flightItem: {
        backgroundColor: "#444", // Fondo oscuro para las celdas
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between", // Espacio entre el vuelo y el ícono
        shadowColor: "#000", // Sombra sutil para las celdas
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 3, // Sombra para dispositivos Android
    },
    flightText: {
        fontSize: 16,
        color: "#E0E0E0", // Texto gris claro para mejor legibilidad
    },
});