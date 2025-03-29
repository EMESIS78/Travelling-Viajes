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
<<<<<<< Updated upstream
=======
        backgroundColor: "#1B1B2F", // Fondo azul profundo para coincidir con PopularTrips
>>>>>>> Stashed changes
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "bold",
<<<<<<< Updated upstream
        color: "#444",
=======
        color: "#E9C46A", // Dorado arena para títulos
>>>>>>> Stashed changes
        marginBottom: 8,
    },
    description: {
        fontSize: 16,
<<<<<<< Updated upstream
        color: "#333",
=======
        color: "#F4A261", // Naranja atardecer para texto principal
>>>>>>> Stashed changes
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
        borderRadius: 8,
        marginRight: 10,
<<<<<<< Updated upstream
=======
        borderWidth: 1,
        borderColor: "#E9C46A", // Bordes dorados para coherencia con PopularTrips
>>>>>>> Stashed changes
    },
    modalContainer: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.8)",
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
<<<<<<< Updated upstream
        backgroundColor: "white",
=======
        backgroundColor: "#E9C46A", // Botón de cierre en dorado arena
>>>>>>> Stashed changes
        borderRadius: 20,
        padding: 8,
        elevation: 5,
    },
    closeText: {
        fontSize: 20,
        fontWeight: "bold",
<<<<<<< Updated upstream
        color: "#000",
=======
        color: "#1B1B2F", // Texto azul profundo para contraste con el botón
>>>>>>> Stashed changes
    },
});