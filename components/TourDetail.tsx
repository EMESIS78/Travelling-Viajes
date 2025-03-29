import { useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import destinations from '../models/destinations';
import DescriptionTab from "./tabs/DescriptionTab";
import ReviewsTab from "./tabs/ReviewsTab";
import ScheduleTab from "./tabs/ScheduleTab";

const TourDetail = () => {
    const route = useRoute();
    const { id } = route.params as { id: string };
    const tour = destinations.find((item) => item.id === id);
    const [activeTab, setActiveTab] = useState("description");

    if (!tour) {
        return (
            <View style={styles.notFoundContainer}>
                <Text style={styles.notFoundText}>Destino no encontrado</Text>
            </View>
        );
    }

    return (
        <View  style={styles.container} >
            
                <Image source={tour.image} style={styles.image} />
                <Text style={styles.title}>{tour.title}</Text>
                <Text style={styles.location}>{tour.location} - {tour.fechaGlobal}</Text>
                <Text style={styles.price}>Precio: ${tour.amount}</Text>

                {/* Pestañas de navegación */}
                <View style={styles.tabs}>
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
                    {activeTab === "reviews" && <ReviewsTab rating={tour.reviews.rating} totalReviews={tour.reviews.totalReviews} />}
                </View>
            </View>
    );
};

export default TourDetail;

const styles = StyleSheet.create({
<<<<<<< Updated upstream
    container: {flex: 1, backgroundColor: "#fff", padding: 15 },
    image: { width: "100%", height: 250, borderRadius: 10, marginBottom: 15 },
    title: { fontSize: 22, fontWeight: "bold", textAlign: "center" },
    location: { fontSize: 16, color: "#666", textAlign: "center", marginVertical: 5 },
    price: { fontSize: 18, fontWeight: "bold", color: "#27ae60", textAlign: "center", marginBottom: 15 },
    tabs: { flexDirection: "row", justifyContent: "space-around", borderBottomWidth: 1, borderBottomColor: "#ddd", marginBottom: 15 },
    tab: { paddingVertical: 10, flex: 1, alignItems: "center" },
    activeTab: { borderBottomWidth: 2, borderBottomColor: "#007bff" },
    tabText: { fontSize: 16, color: "#666" },
    activeTabText: { color: "#007bff", fontWeight: "bold" },
    tabContent: {flex: 1, paddingHorizontal: 10 },
=======
    container: { flex: 1, padding: 15, backgroundColor: "#F5F5F5" },
    darkContainer: { backgroundColor: "#1B1B2F" },
    image: { width: "100%", height: 300, borderRadius: 15, marginBottom: 15, alignSelf: "center" },
    textContainer: { alignItems: "center", marginBottom: 15 },
    title: { fontSize: 24, fontWeight: "bold", color: "#1B1B2F" },
    darkText: { color: "#E9C46A" },
    location: { fontSize: 16, color: "#555", textAlign: "center", marginVertical: 5 },
    price: { fontSize: 18, fontWeight: "bold", color: "#2A9D8F", textAlign: "center", marginBottom: 15 },
    darkPrice: { color: "#E76F51" },
    tabs: { flexDirection: "row", justifyContent: "space-around", borderBottomWidth: 1, borderBottomColor: "#DDD", paddingBottom: 10 },
    darkTabs: { borderBottomColor: "#444" },
    tab: { paddingVertical: 12, flex: 1, alignItems: "center" },
    activeTab: { borderBottomWidth: 3, borderBottomColor: "#264653" },
    tabText: { fontSize: 16, color: "#666" },
    activeTabText: { color: "#264653", fontWeight: "bold" },
    tabContent: { flex: 1, paddingHorizontal: 10 },
>>>>>>> Stashed changes
    notFoundContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
    notFoundText: { fontSize: 18, color: "red" },
});
