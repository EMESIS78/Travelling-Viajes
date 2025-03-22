import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons'

const restaurantes = [
  {
    id: '1',
    nombre: 'Restaurante Zig Zag',
    tipo: 'Fusión Peruana',
    descripcion: 'Elegante restaurante especializado en carnes y mariscos, con una fusión única de sabores peruanos y europeos.',
    precio: '$$$',
    horario: '12:00 - 23:00',
    imagen: require('../assets/images/zigzag.jpg'),
    caracteristicas: ['Reservas', 'WiFi', 'Terraza'],
    calificacion: 4.8
  },
  {
    id: '2',
    nombre: 'La Nueva Palomino',
    tipo: 'Criollo',
    descripcion: 'Famoso por sus picanterías y rocoto relleno. Ambiente tradicional arequipeño con música en vivo.',
    precio: '$$',
    horario: '11:00 - 22:00',
    imagen: require('../assets/images/palomino.jpg'),
    caracteristicas: ['Música en vivo', 'Parqueo', 'Familiar'],
    calificacion: 4.5
  },
  {
    id: '3',
    nombre: 'Chicha por Gastón Acurio',
    tipo: 'Peruano Contemporáneo',
    descripcion: 'Restaurante del reconocido chef Gastón Acurio, especializado en reinterpretaciones de la cocina peruana.',
    precio: '$$$',
    horario: '12:00 - 23:00',
    imagen: require('../assets/images/chicha.jpg'),
    caracteristicas: ['Reservas', 'Bar', 'Vista'],
    calificacion: 4.7
  }
]

const RestaurantesScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Restaurantes en Arequipa</Text>
      {restaurantes.map((restaurante) => (
        <TouchableOpacity key={restaurante.id} style={styles.card}>
          <Image 
            source={restaurante.imagen}
            style={styles.image}
          />
          <View style={styles.infoContainer}>
            <View style={styles.headerContainer}>
              <Text style={styles.title}>{restaurante.nombre}</Text>
              <View style={styles.ratingContainer}>
                <FontAwesome5 name="star" size={12} color="#FFD700" />
                <Text style={styles.rating}>{restaurante.calificacion}</Text>
              </View>
            </View>
            <View style={styles.subHeaderContainer}>
              <Text style={styles.tipo}>{restaurante.tipo}</Text>
              <Text style={styles.precio}>{restaurante.precio}</Text>
            </View>
            <Text style={styles.description} numberOfLines={2}>
              {restaurante.descripcion}
            </Text>
            <View style={styles.featuresContainer}>
              {restaurante.caracteristicas.map((feature, index) => (
                <View key={index} style={styles.featureTag}>
                  <Text style={styles.featureText}>{feature}</Text>
                </View>
              ))}
            </View>
            <View style={styles.footerContainer}>
              <View style={styles.horarioContainer}>
                <FontAwesome5 name="clock" size={12} color="#666" />
                <Text style={styles.horario}>{restaurante.horario}</Text>
              </View>
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

export default RestaurantesScreen

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
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF9E6',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  rating: {
    fontSize: 12,
    color: '#FFB800',
    fontWeight: 'bold',
    marginLeft: 4,
  },
  subHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  tipo: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
  },
  precio: {
    fontSize: 14,
    color: '#2DD4BF',
    fontWeight: '500',
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
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  horarioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  horario: {
    fontSize: 12,
    color: '#666',
    marginLeft: 4,
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