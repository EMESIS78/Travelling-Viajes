import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons'

const tours = [
  {
    id: '1',
    nombre: 'Tour al Valle del Colca',
    ubicacion: 'Cañón del Colca, Arequipa',
    descripcion: 'Excursión de día completo al Valle del Colca, incluye visita al Mirador de los Cóndores, pueblos tradicionales y baños termales.',
    precio: '$80/persona',
    duracion: '1 día',
    imagen: require('../assets/images/colca-canyon.jpg'),
    caracteristicas: ['Guía', 'Transporte', 'Almuerzo']
  },
  {
    id: '2',
    nombre: 'Tour Ciudad de Arequipa',
    ubicacion: 'Centro Histórico, Arequipa',
    descripcion: 'Recorrido por los principales atractivos de la Ciudad Blanca: Plaza de Armas, Monasterio de Santa Catalina, Iglesia de la Compañía y más.',
    precio: '$45/persona',
    duracion: '4 horas',
    imagen: require('../assets/images/arequipa-city.jpg'),
    caracteristicas: ['Guía', 'Entradas', 'Transporte']
  },
  {
    id: '3',
    nombre: 'Tour al Volcán Misti',
    ubicacion: 'Volcán Misti, Arequipa',
    descripcion: 'Aventura de dos días para escalar el Volcán Misti, incluye equipo de montaña y guía especializado.',
    precio: '$150/persona',
    duracion: '2 días',
    imagen: require('../assets/images/misti-volcano.jpg'),
    caracteristicas: ['Guía', 'Equipo', 'Campamento']
  }
]

const ToursScreen = () => {
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
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Reservar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  )
}

export default ToursScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 15,
    color: '#333',
  },
  card: {
    backgroundColor: 'white',
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
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#444',
    lineHeight: 20,
    marginBottom: 10,
  },
  featuresContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  featureTag: {
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    marginRight: 8,
    marginBottom: 8,
  },
  featureText: {
    fontSize: 12,
    color: '#666',
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2DD4BF',
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
