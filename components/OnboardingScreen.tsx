import React, { useState } from "react";
import { View, Text, Image, Dimensions, TouchableOpacity, StyleSheet } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { LinearGradient } from "expo-linear-gradient";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import AsyncStorage from '@react-native-async-storage/async-storage';



const { width, height } = Dimensions.get("window");

const slides = [
  {
    id: "1",
    image: require("../assets/images/travel1.jpg"),
    title: "Explora Nuevos Lugares",
    description: "Encuentra destinos impresionantes y planifica viajes inolvidables.",
  },
  {
    id: "2",
    image: require("../assets/images/travel2.jpg"),
    title: "Itinerarios Personalizados",
    description: "Obtén recomendaciones y planes de viaje personalizados.",
  },
  {
    id: "3",
    image: require("../assets/images/travel3.jpg"),
    title: "Descubre Tu Próxima Aventura",
    description: "Planifica viajes, explora destinos y reserva experiencias únicas.",
  },
];

const OnboardingScreen = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const navigation = useNavigation<NavigationProp<{ Main: undefined }>>();

  return (
    <View style={styles.container}>
      <Carousel
        loop
        width={width}
        height={height}
        autoPlay={true}
        data={slides}
        scrollAnimationDuration={800}
        onSnapToItem={(index) => setActiveSlide(index)}
        renderItem={({ item }) => (
          <View style={styles.slide}>
            <Image source={item.image} style={styles.image} />
            <LinearGradient
              colors={["rgba(0,0,0,0)", "rgba(0,0,0,0.8)"]}
              style={styles.gradient}
            />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          </View>
        )}
      />

      {/* Indicador de página */}
      <View style={styles.pageIndicator}>
        <Text style={styles.pageText}>{`${activeSlide + 1}/${slides.length}`}</Text>
      </View>

      {/* Botón "Atrás" */}
      {activeSlide > 0 && (
        <TouchableOpacity style={styles.backButton} onPress={() => setActiveSlide(activeSlide - 1)}>
          <AntDesign name="arrowleft" size={24} color="white" />
        </TouchableOpacity>
      )}

      <View style={styles.buttonContainer}>
        
        {/* Botón "Get Started" visible siempre */}
        <TouchableOpacity
          style={styles.button}
          onPress={async () => {
            await AsyncStorage.setItem('onboardingCompleted', 'true');
            navigation.navigate('Main');
          }}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  slide: {
    width,
    height,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width,
    height,
    resizeMode: "cover",
  },
  gradient: {
    position: "absolute",
    width,
    height,
    bottom: 0,
  },
  textContainer: {
    position: "absolute",
    bottom: 100,
    width: "80%",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    color: "#ddd",
    textAlign: "center",
    marginTop: 10,
  },
  pageIndicator: {
    position: "absolute",
    bottom: 160,
    left: 20,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },
  pageText: {
    color: "#fff",
    fontSize: 14,
  },
  backButton: {
    position: "absolute",
    bottom: 40,
    left: 20,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    padding: 10,
    borderRadius: 50,
  },
  button: {
    position: "absolute",
    bottom: 40,
    right: 20,
    backgroundColor: "#FFD700",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    bottom: 40,
    width: "90%",
    alignSelf: "center",
  },
});

export default OnboardingScreen;