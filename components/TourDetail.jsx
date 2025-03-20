import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from "react-native"; const { width } = Dimensions.get("window");

const TourDetail = () => {

  const trips = [
    {
      id: "1",
      title: "Machu Picchu",
      location: "Lima - Cusco",
      date: "Lunes 30, 10:00 am",
      image: require("../assets/images/machu-picchu.jpeg"),
    },
    
  ]

  return (
    <ScrollView>
      <View style={styles.container}>


        <FlatList
          data={trips}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image source={item.image} style={styles.image} />
              <View style={styles.infoContainer}>
                <Text style={styles.tripTitle}>{item.title}</Text>
                <Text style={styles.location}>{item.location}</Text>
                <Text style={styles.date}>{item.date}</Text>
              
              </View>
            </View>
          )}
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled={true}
        />,
       



      </View>
    </ScrollView>
  );
}
export default TourDetail;

const styles = StyleSheet.create({
  container: {
      backgroundColor: "#fff",
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
      padding: 10,
      // overflow: "hidden",
      // marginBottom: 15,
      // shadowColor: "#000",
      // shadowOpacity: 0.1,
      // shadowOffset: { width: 0, height: 2 },
      // shadowRadius: 4,
      // elevation: 3,
      // borderWidth: 1,    
      // borderColor: "blue",
  },
  image: {
      width: "100%",
      height: width * 0.8,
      borderRadius: 24,    // Esquinas redondeadas
  
  },
  infoContainer: {
      padding: 10,
  },
  tripTitle: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 5,
  },
  location: {
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