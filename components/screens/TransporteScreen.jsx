import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome5 } from '@expo/vector-icons'
import GenerarReserva from '../actions/GenerarReserva'

const transportes = [
  {
    id: '1',
    nombre: 'Transfer Aeropuerto',
    tipo: 'Privado',
    descripcion: 'Servicio de transfer privado desde/hacia el Aeropuerto Internacional Alfredo Rodríguez Ballón.',
    precio: '$25',
    duracion: '30 min',
    imagen: require('../../assets/images/transfer-airport.jpg'),
    caracteristicas: ['WiFi', 'Aire Acondicionado', 'Maletero']
  },
  {
    id: '2',
    nombre: 'Bus Turístico',
    tipo: 'Compartido',
    descripcion: 'Servicio de bus turístico para recorrer los principales puntos de la ciudad y alrededores.',
    precio: '$15',
    duracion: '4 horas',
    imagen: require('../../assets/images/tourist-bus.jpg'),
    caracteristicas: ['Guía', 'Paradas', 'Aire Acondicionado']
  },
  {
    id: '3',
    nombre: 'Taxi Seguro',
    tipo: 'Privado',
    descripcion: 'Servicio de taxi seguro con conductores certificados y vehículos modernos.',
    precio: '$10',
    duracion: 'Según destino',
    imagen: require('../../assets/images/safe-taxi.jpg'),
    caracteristicas: ['Seguro', 'GPS', '24/7']
  },
  {
    id: '4',
    nombre: 'Transfer Aeropuerto Cusco',
    ubicacion: 'Cusco',
    tipo: 'Privado',
    descripcion: 'Transporte privado desde/hacia el Aeropuerto Internacional Alejandro Velasco Astete.',
    precio: '$30',
    duracion: '25 min',
    imagen: require('../../assets/images/transfer-cusco.jpg'),
    caracteristicas: ['WiFi', 'Asientos Cómodos', 'Maletero']
  },
  {
    id: '5',
    nombre: 'Tren a Machu Picchu',
    ubicacion: 'Cusco',
    tipo: 'Tren',
    descripcion: 'Viaje panorámico en tren de lujo hacia Machu Picchu con vistas espectaculares.',
    precio: '$120',
    duracion: '3 horas',
    imagen: require('../../assets/images/train-machu.jpg'),
    caracteristicas: ['Ventanas Panorámicas', 'Snacks', 'Guía']
  },
  {
    id: '6',
    nombre: 'Movilidad Turística Ica',
    ubicacion: 'Ica',
    tipo: 'Privado',
    descripcion: 'Transporte privado para recorrer los atractivos turísticos de Ica como Huacachina y bodegas vitivinícolas.',
    precio: '$40',
    duracion: 'Día completo',
    imagen: require('../../assets/images/movilidad-ica.jpg'),
    caracteristicas: ['Guía Opcional', 'Paradas Flexibles', 'Aire Acondicionado']
  },
  {
    id: '7',
    nombre: 'Bus Lima - Paracas',
    ubicacion: 'Paracas',
    tipo: 'Interprovincial',
    descripcion: 'Servicio de bus turístico con asientos reclinables desde Lima hasta Paracas.',
    precio: '$25',
    duracion: '4 horas',
    imagen: require('../../assets/images/bus-paracas.jpg'),
    caracteristicas: ['WiFi', 'Asientos Reclinables', 'Baño a Bordo']
  }
]

const TransporteScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTour, setSelectedTour] = useState(null);

  const openReservationModal = (transporte) => {
    setSelectedTour(transporte);
    setModalVisible(true);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Transporte en Arequipa</Text>
      {transportes.map((transporte) => (
        <TouchableOpacity key={transporte.id} style={styles.card}>
          <Image
            source={transporte.imagen}
            style={styles.image}
          />
          <View style={styles.infoContainer}>
            <View style={styles.headerContainer}>
              <Text style={styles.title}>{transporte.nombre}</Text>
              <View style={styles.typeContainer}>
                <Text style={styles.typeText}>{transporte.tipo}</Text>
              </View>
            </View>
            <Text style={styles.description} numberOfLines={2}>
              {transporte.descripcion}
            </Text>
            <View style={styles.featuresContainer}>
              {transporte.caracteristicas.map((feature, index) => (
                <View key={index} style={styles.featureTag}>
                  <Text style={styles.featureText}>{feature}</Text>
                </View>
              ))}
            </View>
            <View style={styles.footerContainer}>
              <View style={styles.priceContainer}>
                <Text style={styles.price}>{transporte.precio}</Text>
                <Text style={styles.duration}>
                  <FontAwesome5 name="clock" size={12} color="#666" /> {transporte.duracion}
                </Text>
              </View>
              <TouchableOpacity style={styles.button} onPress={() => openReservationModal(transporte)}>
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

export default TransporteScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
<<<<<<< Updated upstream
    backgroundColor: '#f5f5f5',
=======
    backgroundColor: '#000', // Fondo oscuro
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
    color: '#FFD700', // Color dorado para el título
  },
  card: {
    backgroundColor: '#1E293B', // Azul oscuro
>>>>>>> Stashed changes
    marginHorizontal: 15,
    marginBottom: 15,
    borderRadius: 15,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 160,
  },
  infoContainer: {
    padding: 15,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    marginRight: 10,
<<<<<<< Updated upstream
  },
  typeContainer: {
    backgroundColor: '#E5E7EB',
=======
    color: '#FFD700', // Color dorado
  },
  typeContainer: {
    backgroundColor: '#334155', // Azul grisáceo
>>>>>>> Stashed changes
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  typeText: {
    fontSize: 12,
<<<<<<< Updated upstream
    color: '#4B5563',
=======
    color: '#E2E8F0', // Texto claro
>>>>>>> Stashed changes
    fontWeight: '500',
  },
  description: {
    fontSize: 14,
<<<<<<< Updated upstream
    color: '#444',
=======
    color: '#CBD5E1', // Texto gris claro
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
    backgroundColor: '#475569', // Azul grisáceo oscuro
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
    color: '#E2E8F0', // Texto claro
>>>>>>> Stashed changes
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceContainer: {
    flex: 1,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2DD4BF', // Verde turquesa
  },
  duration: {
    fontSize: 12,
<<<<<<< Updated upstream
    color: '#666',
=======
    color: '#FFD700', // Color dorado para el tiempo
>>>>>>> Stashed changes
    marginTop: 2,
  },
  button: {
    backgroundColor: '#2DD4BF', // Verde turquesa
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
<<<<<<< Updated upstream
})
=======
});
>>>>>>> Stashed changes
