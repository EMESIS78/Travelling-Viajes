import { useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, useColorScheme, ScrollView, StyleSheet } from "react-native";
import destinations from '../models/destinations';
import DescriptionTab from "./tabs/DescriptionTab";
import ReviewsTab from "./tabs/ReviewsTab";
import ScheduleTab from "./tabs/ScheduleTab";

const TourDetail = () => {
    const route = useRoute();
    const { id } = route.params as { id: string };
    const tour = destinations.find((item) => item.id === id);
    const [activeTab, setActiveTab] = useState("description");

    const colorScheme = useColorScheme()

    if (!tour) {
        return (
            <View style={styles.notFoundContainer}>
                <Text style={styles.notFoundText}>Destino no encontrado</Text>
            </View>
        );
    }

    return (
        <View style={[styles.container, colorScheme === 'dark' && styles.darkContainer]}>
            <Image source={tour.image} style={styles.image} />
            <Text style={[styles.title, colorScheme === 'dark' && styles.darkText]}>{tour.title}</Text>
            <Text style={[styles.location, colorScheme === 'dark' && styles.darkText]}>{tour.location} - {tour.fechaGlobal}</Text>
            <Text style={[styles.price, colorScheme === 'dark' && styles.darkPrice]}>Precio: ${tour.amount}</Text>

            {/* Pestañas de navegación */}
            <View style={[styles.tabs, colorScheme === 'dark' && styles.darkTabs]}>
                {["description", "schedule", "reviews"].map((tab) => (
                    <TouchableOpacity
                        key={tab}
                        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                        style={[styles.tab, activeTab === tab && styles.activeTab]}
                        onPress={() => setActiveTab(tab)}
                    >
                        <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>
                            {tab === "description" ? "Descripción" : tab === "schedule" ? "Horario" : "Reseñas"}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            {/* Contenido dinámico */}
            <View style={styles.tabContent}>
                {activeTab === "description" && (
                    <DescriptionTab
                        description={tour.description}
                        history={tour.history}
                        extraImages={tour.extraImages}
                    />
                )}
                {activeTab === "schedule" && <ScheduleTab flights={tour.flights} />}
                {activeTab === "reviews" && (
                    <ReviewsTab
                        rating={tour.reviews.rating}
                        totalReviews={tour.reviews.totalReviews}
                        reviews={tour.reviews.reviews} // Pasa las reseñas completas
                    />)}
            </View>
        </View>
    );
};

export default TourDetail;

const styles = StyleSheet.create({
    container: { flex: 1, padding: 15, backgroundColor: "#fff" }, // Color claro por defecto
    darkContainer: { backgroundColor: "#121212" }, // Fondo oscuro
    image: { width: "100%", height: 250, borderRadius: 10, marginBottom: 15 },
    title: { fontSize: 22, fontWeight: "bold", textAlign: "center" },
    darkText: { color: "#E0E0E0" }, // Texto claro para el modo oscuro
    location: { fontSize: 16, color: "#666", textAlign: "center", marginVertical: 5 },
    darkPrice: { color: "#27ae60" }, // Precio verde en modo oscuro
    price: { fontSize: 18, fontWeight: "bold", color: "#27ae60", textAlign: "center", marginBottom: 15 },
    tabs: { flexDirection: "row", justifyContent: "space-around", borderBottomWidth: 1, borderBottomColor: "#ddd", marginBottom: 15 },
    darkTabs: { borderBottomColor: "#444" }, // Bordes de pestañas más oscuros
    tab: { paddingVertical: 10, flex: 1, alignItems: "center" },
    activeTab: { borderBottomWidth: 2, borderBottomColor: "#007bff" },
    tabText: { fontSize: 16, color: "#666" },
    activeTabText: { color: "#007bff", fontWeight: "bold" },
    tabContent: { flex: 1, paddingHorizontal: 10 },
    notFoundContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
    notFoundText: { fontSize: 18, color: "red" },
});