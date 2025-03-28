import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons'

const alojamientos = [
  {
    id: '1',
    nombre: 'Hotel Libertador Arequipa',
    ubicacion: 'Plaza de Armas, Arequipa',
    descripcion: 'Hotel histórico con vista a la Plaza de Armas, ubicado en un edificio colonial del siglo XIX. Ofrece habitaciones elegantes con decoración tradicional y vistas panorámicas al Misti.',
    precio: '$150/noche',
    imagen: require('../../assets/images/hotel-arequipa.jpg'),
    estrellas: 5,
    caracteristicas: ['WiFi', 'Piscina', 'Restaurante']
  },
  {
    id: '2',
    nombre: 'Casa Andina Premium Arequipa',
    ubicacion: 'Centro Histórico, Arequipa',
    descripcion: 'Hotel boutique en una mansión colonial restaurada, con patios interiores y jardines. Ubicado cerca de la Plaza de Armas y el Monasterio de Santa Catalina.',
    precio: '$120/noche',
    imagen: require('../../assets/images/casa-andina-premium-arequipa.jpg'),
    estrellas: 4,
    caracteristicas: ['WiFi', 'Spa', 'Bar']
  },
  {
    id: '3',
    nombre: 'Hotel Sonesta Posadas del Inca Arequipa',
    ubicacion: 'Valle del Colca, Arequipa',
    descripcion: 'Hotel con vista al Valle del Colca, perfecto para explorar el Cañón del Colca y los cóndores. Ofrece excursiones guiadas y actividades al aire libre.',
    precio: '$180/noche',
    imagen: require('../../assets/images/arequipa-sonesta posadas del inca-.jpg'),
    estrellas: 4,
    caracteristicas: ['WiFi', 'Excursiones', 'Restaurante']
  }
]

const AlojamientosScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Alojamientos en Arequipa</Text>
      {alojamientos.map((hotel) => (
        <TouchableOpacity key={hotel.id} style={styles.card}>
          <Image 
            source={hotel.imagen}
            style={styles.image}
          />
          <View style={styles.infoContainer}>
            <View style={styles.headerContainer}>
              <Text style={styles.title}>{hotel.nombre}</Text>
              <View style={styles.ratingContainer}>
                {[...Array(hotel.estrellas)].map((_, index) => (
                  <FontAwesome5 key={index} name="star" size={12} color="#FFD700" />
                ))}
              </View>
            </View>
            <Text style={styles.location}>
              <FontAwesome5 name="map-marker-alt" size={12} color="#666" /> {hotel.ubicacion}
            </Text>
            <Text style={styles.description} numberOfLines={2}>
              {hotel.descripcion}
            </Text>
            <View style={styles.featuresContainer}>
              {hotel.caracteristicas.map((feature, index) => (
                <View key={index} style={styles.featureTag}>
                  <Text style={styles.featureText}>{feature}</Text>
                </View>
              ))}
            </View>
            <View style={styles.priceContainer}>
              <Text style={styles.price}>{hotel.precio}</Text>

            </View>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  )
}

export default AlojamientosScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // Fondo oscuro
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 15,
    color: '#FFD700', // Amarillo cálido
  },
  card: {
    backgroundColor: '#1E1E1E', // Fondo oscuro para las tarjetas
    marginHorizontal: 15,
    marginBottom: 15,
    borderRadius: 15,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 180,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  infoContainer: {
    padding: 15,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    marginRight: 10,
    color: '#FFF', // Título en blanco
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  location: {
    fontSize: 14,
    color: '#BDBDBD', // Gris claro para ubicación
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#DDD', // Gris para la descripción
    lineHeight: 20,
    marginBottom: 10,
  },
  featuresContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  featureTag: {
    backgroundColor: '#333', // Fondo gris oscuro para las características
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    marginRight: 8,
    marginBottom: 8,
  },
  featureText: {
    fontSize: 12,
    color: '#FFD700', // Amarillo cálido para las características
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2DD4BF', // Verde claro para el precio
  },
});