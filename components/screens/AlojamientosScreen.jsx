import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome5 } from '@expo/vector-icons'
import GenerarReserva from '../actions/GenerarReserva'

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
  },
  {
    id: '4',
    nombre: 'Hotel Tierra Viva Cusco Saphi Sacsayhuamán',
    ubicacion: 'Cusco',
    descripcion: 'Hotel con vistas a Sacsayhuamán, ideal para explorar la ciudad y sus alrededores.',
    precio: '$130/noche',
    imagen: require('../../assets/images/hotel-sacsayhuaman.jpg'),
    estrellas: 4,
    caracteristicas: ['WiFi', 'Desayuno incluido', 'Transporte al aeropuerto']
  },
  {
    id: '5',
    nombre: 'Hotel Kaaro Hotel El Buho Titicaca',
    ubicacion: 'Puno',
    descripcion: 'Hotel frente al Lago Titicaca, con acceso a tours en barco y actividades acuáticas.',
    precio: '$140/noche',
    imagen: require('../../assets/images/hotel-titicaca.jpg'),
    estrellas: 5,
    caracteristicas: ['WiFi', 'Restaurante', 'Actividades acuáticas']
  },
  {
    id: '6',
    nombre: 'Hotel Casa Andina Standard Nazca',
    ubicacion: 'Nazca',
    descripcion: 'Hotel con vistas a las famosas Líneas de Nazca, ideal para tours en avión.',
    precio: '$160/noche',
    imagen: require('../../assets/images/hotel-nazca.jpeg'),
    estrellas: 4,
    caracteristicas: ['WiFi', 'Tours disponibles', 'Desayuno incluido']
  },
  {
    id: '7',
    nombre: 'Hotel El Huacachinero Huacachina Oasis',
    ubicacion: 'Ica',
    descripcion: 'Hotel en el oasis de Huacachina, perfecto para deportes de aventura y relax.',
    precio: '$110/noche',
    imagen: require('../../assets/images/hotel-huacachina.jpg'),
    estrellas: 3,
    caracteristicas: ['WiFi', 'Sandboarding', 'Piscina']
  },
  {
    id: '8',
    nombre: 'Hotel La Hacienda Bahía Paracas',
    ubicacion: 'Paracas',
    descripcion: 'Hotel frente al mar en Paracas, ideal para explorar el Parque Nacional de Paracas.',
    precio: '$180/noche',
    imagen: require('../../assets/images/hotel-paracas.jpg'),
    estrellas: 5,
    caracteristicas: ['WiFi', 'Restaurante', 'Actividades acuáticas']
  },
]

const AlojamientosScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedHotel, setSelectedHotel] = useState(null);

  const handleReserva = (hotel) => {
    setSelectedHotel(hotel);
    setModalVisible(true);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Alojamientos en Arequipa</Text>
      {alojamientos.map((hotel) => (
        <TouchableOpacity key={hotel.id} style={styles.card} onPress={() => handleReserva(hotel)}>
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
      <Modal visible={modalVisible} animationType="slide" transparent>
        <GenerarReserva hotel={selectedHotel} onClose={() => setModalVisible(false)} />
      </Modal>
    </ScrollView>
  )
}

export default AlojamientosScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
<<<<<<< Updated upstream
    backgroundColor: '#f5f5f5',
=======
    backgroundColor: '#000', // Negro elegante para el fondo
>>>>>>> Stashed changes
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 15,
<<<<<<< Updated upstream
    color: '#333',
  },
  card: {
    backgroundColor: 'white',
=======
    color: '#E6B400', // Dorado refinado
  },
  card: {
    backgroundColor: '#1E293B', // Gris oscuro para contraste elegante
>>>>>>> Stashed changes
    marginHorizontal: 15,
    marginBottom: 15,
    borderRadius: 15,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 6,
  },
  image: {
    width: '100%',
    height: 180,
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
<<<<<<< Updated upstream
=======
    color: '#F5F5F5', // Blanco sutil para el título
>>>>>>> Stashed changes
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  location: {
    fontSize: 14,
<<<<<<< Updated upstream
    color: '#666',
=======
    color: '#B0B0B0', // Plateado para la ubicación
>>>>>>> Stashed changes
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
<<<<<<< Updated upstream
    color: '#444',
=======
    color: '#CCCCCC', // Gris claro para mayor legibilidad
>>>>>>> Stashed changes
    lineHeight: 20,
    marginBottom: 10,
  },
  featuresContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  featureTag: {
<<<<<<< Updated upstream
    backgroundColor: '#f0f0f0',
=======
    backgroundColor: '#252525', // Gris oscuro con clase
>>>>>>> Stashed changes
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    marginRight: 8,
    marginBottom: 8,
  },
  featureText: {
    fontSize: 12,
<<<<<<< Updated upstream
    color: '#666',
=======
    color: '#E6B400', // Detalles dorados en características
>>>>>>> Stashed changes
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
<<<<<<< Updated upstream
    color: '#2DD4BF',
=======
    color: '#2980B9', // Azul profundo para lujo y confianza
>>>>>>> Stashed changes
  },
  button: {
    backgroundColor: '#2DD4BF',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
})