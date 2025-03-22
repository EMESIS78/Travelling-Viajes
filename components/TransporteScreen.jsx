import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons'

const transportes = [
  {
    id: '1',
    nombre: 'Transfer Aeropuerto',
    tipo: 'Privado',
    descripcion: 'Servicio de transfer privado desde/hacia el Aeropuerto Internacional Alfredo Rodríguez Ballón.',
    precio: '$25',
    duracion: '30 min',
    imagen: require('../assets/images/transfer-airport.jpg'),
    caracteristicas: ['WiFi', 'Aire Acondicionado', 'Maletero']
  },
  {
    id: '2',
    nombre: 'Bus Turístico',
    tipo: 'Compartido',
    descripcion: 'Servicio de bus turístico para recorrer los principales puntos de la ciudad y alrededores.',
    precio: '$15',
    duracion: '4 horas',
    imagen: require('../assets/images/tourist-bus.jpg'),
    caracteristicas: ['Guía', 'Paradas', 'Aire Acondicionado']
  },
  {
    id: '3',
    nombre: 'Taxi Seguro',
    tipo: 'Privado',
    descripcion: 'Servicio de taxi seguro con conductores certificados y vehículos modernos.',
    precio: '$10',
    duracion: 'Según destino',
    imagen: require('../assets/images/safe-taxi.jpg'),
    caracteristicas: ['Seguro', 'GPS', '24/7']
  }
]

const TransporteScreen = () => {
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

export default TransporteScreen

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
  },
  typeContainer: {
    backgroundColor: '#E5E7EB',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  typeText: {
    fontSize: 12,
    color: '#4B5563',
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
  priceContainer: {
    flex: 1,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2DD4BF',
  },
  duration: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
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
