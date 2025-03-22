import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const { width } = Dimensions.get("window");

const TourDetail = () => {
  const [activeTab, setActiveTab] = useState("description");
  // comentario
  const trips = [
    {
      id: "1",
      title: "Machu Picchu",
      location: "Lima - Cusco",
      date: "Lunes 30, 10:00 am",
      amount: "199",
      image: require("../assets/images/machu-picchu.jpeg"),
      description: "Una de las maravillas del mundo. Un viaje increíble.",
      schedule: "9:00 AM - 5:00 PM",
      reviews: "5 estrellas, excelente experiencia!",
    },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "description":
        return <Text style={styles.tabContent}>{trips[0].description}</Text>;
      case "schedule":
        return <Text style={styles.tabContent}>{trips[0].schedule}</Text>;
      case "reviews":
        return <Text style={styles.tabContent}>{trips[0].reviews}</Text>;
      default:
        return null;
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <FlatList
          data={trips}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <View style={styles.container_img}>
                <Image source={item.image} style={styles.image} />
                <View style={styles.infoContainer}>
                  <Text style={styles.tripTitle}>{item.title}</Text>
                  <Text style={styles.tripTitle}> S/.{item.amount}</Text>
                </View>
              </View>
              <Text style={styles.location}>{item.location}</Text>
              <Text style={styles.date}>{item.date}</Text>

              {/* Pestañas debajo de la imagen */}
              <View style={styles.tabsContainer}>
                <TouchableOpacity
                  style={[
                    styles.tab,
                    activeTab === "description" && styles.activeTab,
                  ]}
                  onPress={() => setActiveTab("description")}
                >
                  <Text
                    style={[
                      styles.tabText,
                      activeTab === "description" && styles.activeTabText,
                    ]}
                  >
                    Descripción
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.tab,
                    activeTab === "schedule" && styles.activeTab,
                  ]}
                  onPress={() => setActiveTab("schedule")}
                >
                  <Text
                    style={[
                      styles.tabText,
                      activeTab === "schedule" && styles.activeTabText,
                    ]}
                  >
                    Horario
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.tab,
                    activeTab === "reviews" && styles.activeTab,
                  ]}
                  onPress={() => setActiveTab("reviews")}
                >
                  <Text
                    style={[
                      styles.tabText,
                      activeTab === "reviews" && styles.activeTabText,
                    ]}
                  >
                    Reseñas
                  </Text>
                </TouchableOpacity>
              </View>

              {/* Mostrar contenido de la pestaña activa */}
              {renderTabContent()}
            </View>
          )}
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled={true}
        />
      </View>
    </ScrollView>
  );
};

export default TourDetail;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 10,
    borderColor: "red",
    borderWidth: 2,
  },
  image: {
    width: "100%",
    height: width * 0.8,
    borderRadius: 24,
  },
  container_img: {
    position: "relative",
    borderRadius: 10,
    overflow: "hidden",
  },
  infoContainer: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 10,
    borderRadius: 8,
  },
  tripTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 5,
  },
  location: {
    fontSize: 14,
    color: "black",
  },
  date: {
    fontSize: 14,
    color: "black",
    marginBottom: 10,
  },
  tabsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 15,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: "#6A0DAD",
  },
  tabText: {
    fontSize: 16,
    color: "#333",
  },
  activeTabText: {
    color: "#6A0DAD",
    fontWeight: "bold",
  },
  tabContent: {
    padding: 15,
    fontSize: 16,
    color: "#333",
    lineHeight: 24,
  },
});
