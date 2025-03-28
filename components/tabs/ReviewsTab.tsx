import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

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
            <Text style={styles.sectionTitle}>Opiniones</Text>
            <Text style={styles.reviewRating}>⭐ {rating} / 5</Text>
            <Text style={styles.reviewTotal}>{totalReviews} opiniones</Text>

            {/* Lista de opiniones */}
            <FlatList
                data={reviews}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={styles.reviewContainer}>
                        <Text style={styles.username}>{item.username}</Text>
                        <Text style={styles.reviewText}>"{item.review}"</Text>
                        <Text style={styles.reviewRating}>⭐ {item.rating} / 5</Text>
                    </View>
                )}
                style={styles.reviewsList}
            />
        </View>
    );
};

export default ReviewsTab;

const styles = StyleSheet.create({
    container: {
        padding: 15,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#FFFFFF", 
        marginBottom: 10,
        textAlign: "center",
    },
    reviewRating: {
        fontSize: 20,
        color: "#f39c12",
    },
    reviewTotal: {
        fontSize: 16,
        color: "#E0E0E0", 
        marginBottom: 15,
        textAlign: "center",
    },
    reviewsList: {
        marginTop: 15,
    },
    reviewContainer: {
        backgroundColor: "#333",
        padding: 15,
        borderRadius: 8,
        marginBottom: 10,
        shadowColor: "#000", 
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
    },
    username: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#FFFFFF",
    },
    reviewText: {
        fontSize: 14,
        color: "#E0E0E0",
        marginBottom: 8,
    },
    reviewRatingText: {
        fontSize: 14,
        color: "#f39c12",
    },
});