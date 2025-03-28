import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator, View, Animated } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import { useFocusEffect } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../app/views/HomeScreen';
import AlojamientosScreen from '../components/screens/AlojamientosScreen';
import ToursScreen from '../components/screens/ToursScreen';
import TransporteScreen from '../components/screens/TransporteScreen';
import RestaurantesScreen from '../components/screens/RestaurantesScreen';
import LoginScreen from '../components/screens/LoginScreen';
import TourDetail from './../components/TourDetail';
import OnboardingScreen from './../components/OnboardingScreen';

export type StackParamList = {
  OnboardingScreen: undefined;
  Home: undefined;
  AlojamientosScreen: undefined;
  ToursScreen: undefined;
  TransporteScreen: undefined;
  RestaurantesScreen: undefined;
  TourDetail: undefined;
};

// Crear Stack Navigator
const Stack = createNativeStackNavigator();


const Tab = createBottomTabNavigator();

const AnimatedTabScreen: React.FC<{ component: React.ComponentType }> = ({ component: Component }) => {
  const [fadeAnim] = useState(new Animated.Value(0)); // Iniciar la animación con opacidad 0

  useFocusEffect(
    React.useCallback(() => {
      // Iniciar la animación de opacidad cuando la pantalla se enfoca
      Animated.timing(fadeAnim, {
        toValue: 1,  // Hacer que la pantalla se vuelva opaca
        duration: 500, // Duración de la animación
        useNativeDriver: true, // Usar el controlador nativo para el rendimiento
      }).start();

      // Resetear la animación al perder el enfoque
      return () => fadeAnim.setValue(0);
    }, [fadeAnim])
  );

  return (
    <Animated.View style={{ flex: 1, opacity: fadeAnim }}>
      <Component />
    </Animated.View>
  );
};

const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Inicio') {
            iconName = 'home-outline';
          } else if (route.name === 'Alojamientos') {
            iconName = 'bed-outline';
          } else if (route.name === 'Tours') {
            iconName = 'map-outline';
          } else if (route.name === 'Transporte') {
            iconName = 'car-outline';
          } else if (route.name === 'Restaurantes') {
            iconName = 'restaurant-outline';
          }

          return <Ionicons name={iconName as any} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#FFD700',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: '#333', // Fondo oscuro para la barra de navegación
          borderTopLeftRadius: 20,  // Bordes redondeados
          borderTopRightRadius: 20,
          paddingBottom: 10,        // Espaciado extra para los iconos
        },
        headerShown: false, // Ocultar encabezado en tabs
        
      })}
    >
      <Tab.Screen name="Inicio" component={() => <AnimatedTabScreen component={HomeScreen} />} />
      <Tab.Screen name="Alojamientos" component={() => <AnimatedTabScreen component={AlojamientosScreen} />} />
      <Tab.Screen name="Tours" component={() => <AnimatedTabScreen component={ToursScreen} />} />
      <Tab.Screen name="Transporte" component={() => <AnimatedTabScreen component={TransporteScreen} />} />
      <Tab.Screen name="Restaurantes" component={() => <AnimatedTabScreen component={RestaurantesScreen} />} />
    </Tab.Navigator>
  );
};


const AppNavigator = () => {
  const [loading, setLoading] = useState(true);
  const [onboardingSeen, setOnboardingSeen] = useState(false);

  useEffect(() => {
    const checkOnboardingStatus = async () => {
      const seen = await AsyncStorage.getItem('onboardingSeen');
      setOnboardingSeen(seen === 'true');
      setLoading(false);
    };

    checkOnboardingStatus();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
  return (
    <Stack.Navigator initialRouteName={onboardingSeen ? 'Main' : 'OnboardingScreen'}
      screenOptions={{
        animation: 'slide_from_right', // Aquí aplicamos la animación de deslizamiento
      }}
    >
      <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Main" component={BottomTabsNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="TourDetail" component={TourDetail}
        options={{
          animation: 'fade_from_bottom', // Aquí agregamos una animación de desvanecimiento
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};


export default AppNavigator;