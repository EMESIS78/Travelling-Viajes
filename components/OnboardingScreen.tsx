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

  const handleNextSlide = () => {
    if (activeSlide < slides.length - 1) {
      setActiveSlide(activeSlide + 1);
    }
  };

  const handlePrevSlide = () => {
    if (activeSlide > 0) {
      setActiveSlide(activeSlide - 1);
    }
  };

  const handleGetStarted = async () => {
    await AsyncStorage.setItem('onboardingCompleted', 'true');
    navigation.navigate('Main');
  };

  return (
    <View style={styles.container}>
      <Carousel
        loop
        width={width}
        height={height}
        autoPlay
        autoPlayInterval={3000}
        scrollAnimationDuration={800}
        data={slides}
        onSnapToItem={(index) => setActiveSlide(index)}
        renderItem={({ item }) => (
          <View style={styles.slide}>
            <Image source={item.image} style={styles.image} />
            <LinearGradient
              colors={["rgba(0,0,0,0)", "rgba(0,0,0,0.9)"]}
              style={styles.gradient}
            />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          </View>
        )}
      />

      {/* Indicador de página con puntos dinámicos */}
      <View style={styles.pagination}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              activeSlide === index ? styles.activeDot : styles.inactiveDot,
            ]}
          />
        ))}
      </View>

      {/* Botones de navegación */}
      <View style={styles.buttonContainer}>
        {activeSlide > 0 && (
          <TouchableOpacity style={styles.navButton} onPress={handlePrevSlide}>
            <AntDesign name="arrowleft" size={24} color="#FFF" />
          </TouchableOpacity>
        )}
        <TouchableOpacity style={styles.getStartedButton} onPress={handleGetStarted}>
          <Text style={styles.getStartedText}>Get Started</Text>
        </TouchableOpacity>
        {activeSlide < slides.length - 1 && (
          <TouchableOpacity style={styles.navButton} onPress={handleNextSlide}>
            <AntDesign name="arrowright" size={24} color="#FFF" />
          </TouchableOpacity>
        )}
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
    bottom: 120,
    width: "80%",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FFF",
    textAlign: "center",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#DDD",
    textAlign: "center",
  },
  pagination: {
    position: "absolute",
    bottom: 140,
    flexDirection: "row",
    alignSelf: "center",
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: "#FFD700",
  },
  inactiveDot: {
    backgroundColor: "#AAA",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 40,
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
  },
  navButton: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    padding: 12,
    borderRadius: 30,
  },
  getStartedButton: {
    backgroundColor: "#FFD700",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
  },
  getStartedText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
});

export default OnboardingScreen;
