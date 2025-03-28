import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, useColorScheme, ScrollView, StyleSheet, ActivityIndicator } from "react-native";
import DescriptionTab from "./tabs/DescriptionTab";
import ReviewsTab from "./tabs/ReviewsTab";
import ScheduleTab from "./tabs/ScheduleTab";
import { useNavigation } from '@react-navigation/native';
import { fetchPackageDetail } from "../servicios/paquetes";
import { PackageDetail } from "@/models/package";
const localImages = [
    require("../assets/images/machu1.jpg"),
    require("../assets/images/machu2.jpg"),
    require("../assets/images/machu3.jpg"),
    require("../assets/images/cusco.jpg"),
];

const TourDetail = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { id } = route.params as { id: string };
    const [Results, setTourDetail] = useState<PackageDetail | null>(null);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState("description");
    const colorScheme = useColorScheme();

    // Cargar el detalle del tour
    const loadTourDetail = async () => {
        try {
            const data = await fetchPackageDetail(parseInt(id));
            setTourDetail(data);
        } catch (error) {
            console.error("Error al cargar el detalle del tour:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadTourDetail();
    }, []);

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#FFD700" />
                <Text style={styles.loadingText}>Cargando detalles...</Text>
            </View>
        );
    }

    if (!Results) {
        return (
            <View style={styles.notFoundContainer}>
                <Text style={styles.notFoundText}>Destino no encontrado</Text>
            </View>
        );
    }

    const { results } = Results;
    const { name, location, price, descrition, images, schedules, reviews, features } = results;

    return (
        <View style={[styles.container, colorScheme === 'dark' && styles.darkContainer]}>
            <TouchableOpacity style={styles.containerFlecha} onPress={() => navigation.goBack()}>
                <Image source={require('../assets/iconos/flecha.png')} style={styles.imagenFlecha} />
            </TouchableOpacity>

            <Image source={localImages[Math.floor(Math.random() * localImages.length)]} style={styles.image} />
            <Text style={[styles.title, colorScheme === 'dark' && styles.darkText]}>{name}</Text>
            <Text style={[styles.location, colorScheme === 'dark' && styles.darkText]}>{location}</Text>
            <Text style={[styles.price, colorScheme === 'dark' && styles.darkPrice]}>Precio: ${price}</Text>

            {/* Pestañas de navegación */}
            <View style={[styles.tabs, colorScheme === 'dark' && styles.darkTabs]}>
                {["description", "schedule", "reviews"].map((tab) => (
                    <TouchableOpacity
                        key={tab}
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
            <ScrollView style={styles.tabContent}>
                {activeTab === "description" && (
                    <DescriptionTab
                        description={descrition}
                        extraImages={[
                            require("../assets/images/machu1.jpg"),
                            require("../assets/images/machu2.jpg"),
                            require("../assets/images/machu3.jpg"),
                        ]}

                    />
                )}
                {activeTab === "schedule" && (
                    <ScheduleTab
                        flights={schedules.map(schedule => ({
                            departure: schedule.location, // Adjust property names as per your `Schedule` type
                            arrival: schedule.amount,   // Adjust property names as per your `Schedule` type
                        }))}
                    />
                )}
                {activeTab === "reviews" && (
                    <ReviewsTab
                        rating={reviews.reduce((acc, rev) => acc + parseFloat(rev.average_rating), 0) / reviews.length}
                        totalReviews={reviews.length}
                        reviews={reviews.map(review => ({
                            username: review.fk_user.toString(),
                            review: review.review.toString(),
                            rating: parseFloat(review.average_rating),
                        }))}
                    />
                )}
            </ScrollView>
        </View>
    );
};

export default TourDetail;

const styles = StyleSheet.create({
    container: { flex: 1, padding: 15, backgroundColor: "#fff" },
    containerFlecha: {
        width: 40,
        height: 40,
        backgroundColor: "#fefc33",
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        zIndex: 2,
        margin: 20,
    },
    imagenFlecha: {},
    darkContainer: { backgroundColor: "#121212" },
    image: { width: "100%", height: 250, borderRadius: 10, marginBottom: 15 },
    title: { fontSize: 22, fontWeight: "bold", textAlign: "center" },
    darkText: { color: "#E0E0E0" },
    location: { fontSize: 16, color: "#666", textAlign: "center", marginVertical: 5 },
    darkPrice: { color: "#27ae60" },
    price: { fontSize: 18, fontWeight: "bold", color: "#27ae60", textAlign: "center", marginBottom: 15 },
    tabs: { flexDirection: "row", justifyContent: "space-around", borderBottomWidth: 1, borderBottomColor: "#ddd", marginBottom: 15 },
    darkTabs: { borderBottomColor: "#444" },
    tab: { paddingVertical: 10, flex: 1, alignItems: "center" },
    activeTab: { borderBottomWidth: 2, borderBottomColor: "#007bff" },
    tabText: { fontSize: 16, color: "#666" },
    activeTabText: { color: "#007bff", fontWeight: "bold" },
    tabContent: { flex: 1, paddingHorizontal: 10 },
    notFoundContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
    notFoundText: { fontSize: 18, color: "red" },
    loadingContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
    loadingText: { fontSize: 16, color: "#888", marginTop: 10 },
});
