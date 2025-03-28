import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";

const defaultAvatar = "https://via.placeholder.com/50"; // Imagen genérica

const ReviewsTab = ({
    rating,
    totalReviews,
    reviews,
}: {
    rating: number;
    totalReviews: number;
    reviews: { username: string; review: string; rating: number }[];
}) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.sectionTitle}>Opiniones</Text>
                <Text style={styles.reviewRating}>⭐ {rating.toFixed(1)} / 5</Text>
                <Text style={styles.reviewTotal}>{totalReviews} opiniones</Text>
            </View>

            <FlatList
                data={reviews}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={styles.reviewContainer}>
                        <View style={styles.userSection}>
                            <Image
                                source={{ uri: defaultAvatar }}
                                style={styles.avatar}
                            />
                            <View style={styles.userInfo}>
                                <Text style={styles.username}>{item.username}</Text>
                                <Text style={styles.reviewRatingText}>⭐ {item.rating} / 5</Text>
                            </View>
                        </View>
                        <Text style={styles.reviewText}>"{item.review}"</Text>
                    </View>
                )}
                style={styles.reviewsList}
                ListEmptyComponent={
                    <Text style={styles.emptyMessage}>No hay opiniones disponibles.</Text>
                }
            />
        </View>
    );
};

export default ReviewsTab;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#121212",
    },
    header: {
        alignItems: "center",
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#BB86FC",
        marginBottom: 5,
    },
    reviewRating: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#f39c12",
    },
    reviewTotal: {
        fontSize: 16,
        color: "#E0E0E0",
    },
    reviewsList: {
        marginTop: 15,
    },
    reviewContainer: {
        backgroundColor: "#1E1E1E",
        padding: 15,
        borderRadius: 12,
        marginBottom: 15,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    userSection: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
        backgroundColor: "#BB86FC",
    },
    userInfo: {
        flexDirection: "column",
    },
    username: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#BB86FC",
    },
    reviewRatingText: {
        fontSize: 14,
        color: "#f39c12",
    },
    reviewText: {
        fontSize: 14,
        color: "#E0E0E0",
        lineHeight: 20,
    },
    emptyMessage: {
        fontSize: 16,
        color: "#888",
        textAlign: "center",
        marginTop: 20,
    },
});
