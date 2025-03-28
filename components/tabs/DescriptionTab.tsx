import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Image, FlatList, Modal, TouchableOpacity, ImageSourcePropType } from "react-native";

interface DescriptionTabProps {
    description: string;
    history?: string;
    extraImages?: ImageSourcePropType[];
}

const DescriptionTab: React.FC<DescriptionTabProps> = ({ description, history, extraImages }) => {
    const [selectedImage, setSelectedImage] = useState<ImageSourcePropType | null>(null);

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 50 }} nestedScrollEnabled={true}>
            <Text style={styles.sectionTitle}>Descripción</Text>
            <Text style={styles.description}>{description}</Text>

            {history && (
                <>
                    <Text style={styles.sectionTitle}>Historia</Text>
                    <Text style={styles.description}>{history}</Text>
                </>
            )}

            {extraImages && extraImages.length > 0 && (
                <>
                    <Text style={styles.sectionTitle}>Galería</Text>
                    <FlatList
                        data={extraImages}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(_, index) => index.toString()}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => setSelectedImage(item)}>
                                <Image source={item} style={styles.extraImage} />
                            </TouchableOpacity>
                        )}
                        contentContainerStyle={styles.imageScroll}
                    />
                </>
            )}

            {/* Modal para mostrar la imagen en pantalla completa */}
            <Modal visible={!!selectedImage} transparent={true} animationType="fade">
                <View style={styles.modalContainer}>
                    <TouchableOpacity style={styles.modalClose} onPress={() => setSelectedImage(null)}>
                        <Text style={styles.closeText}>X</Text>
                    </TouchableOpacity>
                    {selectedImage && <Image source={selectedImage} style={styles.modalImage} />}
                </View>
            </Modal>
        </ScrollView>
    );
};

export default DescriptionTab;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        flex: 1,
        backgroundColor: "#121212",
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#BB86FC",
        marginBottom: 8,
    },
    description: {
        fontSize: 16,
        color: "#E0E0E0",
        textAlign: "justify",
        lineHeight: 24,
        marginBottom: 10,
    },
    imageScroll: {
        marginTop: 10,
    },
    extraImage: {
        width: 120,
        height: 80,
        borderRadius: 10,
        marginRight: 10,
        borderColor: "#BB86FC",
        borderWidth: 1,
    },
    modalContainer: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.85)",
        justifyContent: "center",
        alignItems: "center",
    },
    modalImage: {
        width: "90%",
        height: "70%",
        resizeMode: "contain",
        borderRadius: 10,
    },
    modalClose: {
        position: "absolute",
        top: 40,
        right: 20,
        backgroundColor: "#333",
        borderRadius: 20,
        padding: 8,
        elevation: 5,
    },
    closeText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#BB86FC",
    },
});
