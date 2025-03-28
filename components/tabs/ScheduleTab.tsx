import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ScheduleTab = ({ flights }: { flights: { departure: string; arrival: string }[] }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.sectionTitle}>Vuelos Disponibles</Text>
            {flights.map((flight, index) => (
                <View key={index} style={styles.flightContainer}>
                    <Text style={styles.flightItem}>
                        ✈ {flight.departure} → {flight.arrival}
                    </Text>
                </View>
            ))}
        </View>
    );
};

export default ScheduleTab;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#121212",
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#BB86FC",
        marginBottom: 10,
    },
    flightContainer: {
        backgroundColor: "#1E1E1E",
        padding: 15,
        borderRadius: 10,
        marginBottom: 8,
    },
    flightItem: {
        fontSize: 16,
        color: "#E0E0E0",
    },
});
