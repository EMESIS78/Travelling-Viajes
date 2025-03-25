import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ReviewsTab = ({ rating, totalReviews }: { rating: number; totalReviews: number }) => {
    return (
        <View>
            <Text style={styles.sectionTitle}>Opiniones</Text>
            <Text style={styles.reviewRating}>⭐ {rating} / 5</Text>
            <Text style={styles.reviewTotal}>{totalReviews} opiniones</Text>
        </View>
    );
};

export default ReviewsTab;

const styles = StyleSheet.create({
    sectionTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
    },
    reviewRating: {
        fontSize: 20,
        color: "#f39c12",
    },
    reviewTotal: {
        fontSize: 16,
        color: "#555",
    },
});