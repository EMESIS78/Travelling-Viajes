import React, { useRef } from 'react';
import { View, Text, Image, FlatList, Dimensions, Animated, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');
const ITEM_WIDTH = width * 0.75;
const ITEM_HEIGHT = 200;

const data = [
  { id: '1', title: 'Paquetes', image: require('../assets/images/paquetes.jpg') },
  { id: '2', title: 'Rutas', image: require('../assets/images/paquetes.jpg') },
  { id: '3', title: 'Alimentación', image: require('../assets/images/paquetes.jpg') },
  { id: '4', title: 'Hospedaje', image: require('../assets/images/paquetes.jpg') },
];

const CustomCarousel = () => {
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.card}>
              <Image source={item.image} style={styles.image} />
              <Text style={styles.title}>{item.title}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default CustomCarousel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  card: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
  },
  image: {
    width: ITEM_WIDTH - 20,
    height: ITEM_HEIGHT - 50,
    borderRadius: 10,
  },
  title: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});