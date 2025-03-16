import React from "react";
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const trips = [
    {
        id: "1",
        title: "Machu Picchu",
        route: "Lima - Cusco",
        date: "Lunes 30, 10:00 am",
        image: require("../assets/images/machu-picchu.jpeg"),
    },
    {
        id: "2",
        title: "Cristo Blanco",
        route: "Lima - Juliaca",
        date: "Lunes 31, 08:00 am",
        image: require("../assets/images/cristo-blanco.jpeg"),
    },
];

const PopularTrips = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Viajes populares</Text>

            <View style={styles.tabsContainer}>
                <Text style={styles.activeTab}>Hoy</Text>
            </View>

            <FlatList
                data={trips}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Image source={item.image} style={styles.image} />
                        <View style={styles.infoContainer}>
                            <Text style={styles.tripTitle}>{item.title}</Text>
                            <Text style={styles.route}>{item.route}</Text>
                            <Text style={styles.date}>{item.date}</Text>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.buttonText}>Tomar vuelo</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
                showsVerticalScrollIndicator={false}
                nestedScrollEnabled={true}
            />
        </View>
    );
};

export default PopularTrips;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        borderRadius: 20,
        padding: 20,
        marginHorizontal: 10,
        marginTop: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
    },
    tabsContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 10,
    },
    activeTab: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#6A0DAD",
        borderBottomWidth: 2,
        borderBottomColor: "#6A0DAD",
        paddingBottom: 5,
    },
    card: {
        backgroundColor: "#fff",
        borderRadius: 15,
        overflow: "hidden",
        marginBottom: 15,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 3,
    },
    image: {
        width: "100%",
        height: width * 0.4,
    },
    infoContainer: {
        padding: 10,
    },
    tripTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 5,
    },
    route: {
        fontSize: 14,
        color: "#666",
    },
    date: {
        fontSize: 14,
        color: "#333",
        marginBottom: 10,
    },
    button: {
        backgroundColor: "#6A0DAD",
        paddingVertical: 8,
        borderRadius: 5,
        alignItems: "center",
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
    },
});