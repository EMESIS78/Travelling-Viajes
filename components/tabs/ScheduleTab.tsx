import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ScheduleTab = ({ flights }: { flights: { departure: string; arrival: string }[] }) => {
    return (
        <View>
            <Text style={styles.sectionTitle}>Vuelos Disponibles</Text>
            {flights.map((flight, index) => (
                <Text key={index} style={styles.flightItem}>
                    ✈ {flight.departure} → {flight.arrival}
                </Text>
            ))}
        </View>
    );
};

export default ScheduleTab;

const styles = StyleSheet.create({
    sectionTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
    },
    flightItem: {
        backgroundColor: "#f9f9f9",
        padding: 10,
        borderRadius: 5,
        marginBottom: 5,
    },
});