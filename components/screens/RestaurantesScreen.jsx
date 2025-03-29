import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome5 } from '@expo/vector-icons'
import GenerarReserva from '../actions/GenerarReserva'

const restaurantes = [
  {
    id: '1',
    nombre: 'Restaurante Zig Zag',
    tipo: 'Fusión Peruana',
    descripcion: 'Elegante restaurante especializado en carnes y mariscos, con una fusión única de sabores peruanos y europeos.',
    precio: '$$$',
    horario: '12:00 - 23:00',
    imagen: require('../../assets/images/zigzag.jpg'),
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
    imagen: require('../../assets/images/palomino.jpg'),
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
    imagen: require('../../assets/images/chicha.jpg'),
    caracteristicas: ['Reservas', 'Bar', 'Vista'],
    calificacion: 4.7
  },
  {
    id: '4',
    nombre: 'Morena Peruvian Kitchen',
    ubicacion: 'Cusco',
    tipo: 'Peruano Moderno',
    descripcion: 'Restaurante con ambiente vibrante y cocina peruana moderna con ingredientes frescos de la región.',
    precio: '$$',
    horario: '11:30 - 22:30',
    imagen: require('../../assets/images/morena.jpg'),
    caracteristicas: ['Cócteles', 'Vegetariano', 'WiFi'],
    calificacion: 4.6
  },
  {
    id: '5',
    nombre: 'Cicciolina',
    ubicacion: 'Cusco',
    tipo: 'Italiana & Peruana',
    descripcion: 'Fusión de la cocina italiana con ingredientes peruanos en un ambiente acogedor y con gran selección de vinos.',
    precio: '$$$',
    horario: '07:00 - 23:00',
    imagen: require('../../assets/images/cicciolina.jpeg'),
    caracteristicas: ['Desayuno', 'Vinos', 'Reservas'],
    calificacion: 4.8
  },
  {
    id: '6',
    nombre: 'El Cordon Bleu',
    ubicacion: 'Ica',
    tipo: 'Mariscos & Criollo',
    descripcion: 'Especialidad en platos criollos y mariscos frescos con un toque gourmet en un ambiente familiar.',
    precio: '$$',
    horario: '12:00 - 22:00',
    imagen: require('../../assets/images/cordon-bleu.jpg'),
    caracteristicas: ['Terraza', 'Parqueo', 'Cócteles'],
    calificacion: 4.5
  },
  {
    id: '7',
    nombre: 'La Olla de Juanita',
    ubicacion: 'Ica',
    tipo: 'Criollo Tradicional',
    descripcion: 'Reconocido por su carapulcra y sopa seca, un lugar imperdible para probar la auténtica gastronomía iqueña.',
    precio: '$',
    horario: '11:00 - 20:00',
    imagen: require('../../assets/images/olla-juanita.jpg'),
    caracteristicas: ['Económico', 'Familiar', 'Tradicional'],
    calificacion: 4.4
  },
  {
    id: '8',
    nombre: 'El Piloto',
    ubicacion: 'Paracas',
    tipo: 'Mariscos & Pescados',
    descripcion: 'Ubicado frente al mar, ofrece ceviches y tiraditos con productos frescos del día.',
    precio: '$$$',
    horario: '12:00 - 22:00',
    imagen: require('../../assets/images/el-piloto.jpg'),
    caracteristicas: ['Vista al mar', 'Cócteles', 'Terraza'],
    calificacion: 4.7
  },
  {
    id: '9',
    nombre: 'Restaurante Ballestas',
    ubicacion: 'Paracas',
    tipo: 'Internacional & Peruano',
    descripcion: 'Ubicado en un hotel de lujo, ofrece una experiencia gastronómica con platos internacionales y peruanos de alta calidad.',
    precio: '$$$$',
    horario: '07:00 - 23:00',
    imagen: require('../../assets/images/rballestas.jpg'),
    caracteristicas: ['Gourmet', 'Buffet', 'Vista'],
    calificacion: 4.9
  }
]

const RestaurantesScreen = () => {

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTour, setSelectedTour] = useState(null);

  const openReservationModal = (restaurante) => {
    setSelectedTour(restaurante);
    setModalVisible(true);
  };

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
              <TouchableOpacity style={styles.button} onPress={() => openReservationModal(restaurante)}>
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

export default RestaurantesScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
<<<<<<< Updated upstream
    backgroundColor: '#f5f5f5',
=======
    backgroundColor: '#0D0D0D',
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
    color: '#FFD700',
  },
  card: {
    backgroundColor: '#1E293B',
>>>>>>> Stashed changes
    marginHorizontal: 15,
    marginBottom: 15,
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 180,
  },
  infoContainer: {
    padding: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
<<<<<<< Updated upstream
    flex: 1,
    marginRight: 10,
=======
    color: '#FFD700',
>>>>>>> Stashed changes
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
<<<<<<< Updated upstream
    backgroundColor: '#FFF9E6',
=======
    backgroundColor: '#333',
>>>>>>> Stashed changes
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  rating: {
    fontSize: 12,
<<<<<<< Updated upstream
    color: '#FFB800',
=======
    color: '#FFD700',
>>>>>>> Stashed changes
    fontWeight: 'bold',
    marginLeft: 4,
  },
  tipo: {
    fontSize: 14,
<<<<<<< Updated upstream
    color: '#666',
=======
    color: '#aaa',
>>>>>>> Stashed changes
    fontStyle: 'italic',
  },
  precio: {
    fontSize: 14,
    color: '#2DD4BF',
    fontWeight: '500',
  },
  description: {
    fontSize: 14,
<<<<<<< Updated upstream
    color: '#444',
=======
    color: '#ccc',
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
    backgroundColor: '#333',
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
    color: '#fff',
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
    color: '#666',
=======
    color: '#aaa',
>>>>>>> Stashed changes
    marginLeft: 4,
  },
  button: {
    backgroundColor: '#2DD4BF',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
  },
  buttonText: {
<<<<<<< Updated upstream
    color: 'white',
=======
    color: '#fff',
>>>>>>> Stashed changes
    fontWeight: 'bold',
    fontSize: 14,
  },
});