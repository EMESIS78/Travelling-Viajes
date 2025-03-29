import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import { FontAwesome5 } from '@expo/vector-icons'
import GenerarReserva from '../actions/GenerarReserva'

const tours = [
  {
    id: '1',
    nombre: 'Tour al Valle del Colca',
    ubicacion: 'Cañón del Colca, Arequipa',
    descripcion: 'Excursión de día completo al Valle del Colca, incluye visita al Mirador de los Cóndores, pueblos tradicionales y baños termales.',
    precio: '$80/persona',
    duracion: '1 día',
    imagen: require('../../assets/images/colca-canyon.jpg'),
    caracteristicas: ['Guía', 'Transporte', 'Almuerzo']
  },
  {
    id: '2',
    nombre: 'Tour Ciudad de Arequipa',
    ubicacion: 'Centro Histórico, Arequipa',
    descripcion: 'Recorrido por los principales atractivos de la Ciudad Blanca: Plaza de Armas, Monasterio de Santa Catalina, Iglesia de la Compañía y más.',
    precio: '$45/persona',
    duracion: '4 horas',
    imagen: require('../../assets/images/arequipa-city.jpg'),
    caracteristicas: ['Guía', 'Entradas', 'Transporte']
  },
  {
    id: '3',
    nombre: 'Tour al Volcán Misti',
    ubicacion: 'Volcán Misti, Arequipa',
    descripcion: 'Aventura de dos días para escalar el Volcán Misti, incluye equipo de montaña y guía especializado.',
    precio: '$150/persona',
    duracion: '2 días',
    imagen: require('../../assets/images/misti-volcano.jpg'),
    caracteristicas: ['Guía', 'Equipo', 'Campamento']
  },
  {
    id: '4',
    nombre: 'Tour al Oasis de Huacachina',
    ubicacion: 'Huacachina, Ica',
    descripcion: 'Disfruta de una experiencia única en el oasis de Huacachina. Paseo en sandboard y buggies por las dunas, con atardecer espectacular.',
    precio: '$60/persona',
    duracion: '2 días',
    imagen: require('../../assets/images/oasis.jpg'),
    caracteristicas: ['Guía', 'Sandboard', 'Buggy Ride']
  },
  {
    id: '5',
    nombre: 'Tour a las Islas Ballestas',
    ubicacion: 'Paracas, Ica',
    descripcion: 'Explora las Islas Ballestas en un recorrido en bote, donde podrás ver lobos marinos, pingüinos de Humboldt y una gran diversidad de aves marinas.',
    precio: '$50/persona',
    duracion: 'Half day',
    imagen: require('../../assets/images/ballestas.jpg'),
    caracteristicas: ['Guía', 'Paseo en bote', 'Avistamiento de fauna']
  }
]

const ToursScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTour, setSelectedTour] = useState(null);

  const openReservationModal = (tour) => {
    setSelectedTour(tour);
    setModalVisible(true);
  };
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Tours en Arequipa</Text>
      {tours.map((tour) => (
        <TouchableOpacity key={tour.id} style={styles.card}>
          <Image
            source={tour.imagen}
            style={styles.image}
          />
          <View style={styles.infoContainer}>
            <View style={styles.headerContainer}>
              <Text style={styles.title}>{tour.nombre}</Text>
              <View style={styles.durationContainer}>
                <FontAwesome5 name="clock" size={12} color="#666" />
                <Text style={styles.duration}>{tour.duracion}</Text>
              </View>
            </View>
            <Text style={styles.location}>
              <FontAwesome5 name="map-marker-alt" size={12} color="#666" /> {tour.ubicacion}
            </Text>
            <Text style={styles.description} numberOfLines={2}>
              {tour.descripcion}
            </Text>
            <View style={styles.featuresContainer}>
              {tour.caracteristicas.map((feature, index) => (
                <View key={index} style={styles.featureTag}>
                  <Text style={styles.featureText}>{feature}</Text>
                </View>
              ))}
            </View>
            <View style={styles.priceContainer}>
              <Text style={styles.price}>{tour.precio}</Text>
              <TouchableOpacity style={styles.button} onPress={() => openReservationModal(tour)} >
                <Text style={styles.buttonText}>Reservar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      ))}

      {selectedTour && (
        <GenerarReserva
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          hotel={selectedTour}
        />
      )}
    </ScrollView>
  )
}

export default ToursScreen

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
  },
  durationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  duration: {
    fontSize: 12,
    color: '#666',
    marginLeft: 4,
  },
  location: {
    fontSize: 14,
    color: '#666',
=======
    color: '#F5F5F5', // Blanco sutil para el título
  },
  location: {
    fontSize: 14,
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
  },
  button: {
    backgroundColor: '#2DD4BF',
=======
    color: '#2980B9', // Azul profundo para lujo y confianza
  },
  button: {
    backgroundColor: '#E6B400', // Dorado refinado
>>>>>>> Stashed changes
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 8,
  },
  buttonText: {
<<<<<<< Updated upstream
    color: 'white',
=======
    color: '#000', // Texto negro para contraste en el botón
>>>>>>> Stashed changes
    fontWeight: 'bold',
  },
})
