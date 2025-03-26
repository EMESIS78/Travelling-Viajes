import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';

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
        headerShown: false, // Ocultar encabezado en tabs
      })}
    >
      <Tab.Screen name="Inicio" component={HomeScreen} />
      <Tab.Screen name="Alojamientos" component={AlojamientosScreen} />
      <Tab.Screen name="Tours" component={ToursScreen} />
      <Tab.Screen name="Transporte" component={TransporteScreen} />
      <Tab.Screen name="Restaurantes" component={RestaurantesScreen} />
    </Tab.Navigator>
  );
};


const StackNavigator = () => {
  return (

    <Stack.Navigator initialRouteName="OnboardingScreen">

      <Stack.Screen
        name="OnboardingScreen"
        component={OnboardingScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="AlojamientosScreen" component={AlojamientosScreen} />
      <Stack.Screen name="ToursScreen" component={ToursScreen} />
      <Stack.Screen name="TransporteScreen" component={TransporteScreen} />
      <Stack.Screen name="RestaurantesScreen" component={RestaurantesScreen} />
      <Stack.Screen name="TourDetail" component={TourDetail} />
    </Stack.Navigator>

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
    <Stack.Navigator initialRouteName={onboardingSeen ? 'Main' : 'OnboardingScreen'}>
      <Stack.Screen name="AlojamientosScreen" component={AlojamientosScreen} />
      <Stack.Screen name="ToursScreen" component={ToursScreen} />
      <Stack.Screen name="TransporteScreen" component={TransporteScreen} />
      <Stack.Screen name="RestaurantesScreen" component={RestaurantesScreen} />
      <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Main" component={BottomTabsNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="TourDetail" component={TourDetail} />
    </Stack.Navigator>
  );
};


export default AppNavigator;