import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../app/views/HomeScreen';
import AlojamientosScreen from '../components/AlojamientosScreen';
import ToursScreen from '../components/ToursScreen';
import TransporteScreen from '../components/TransporteScreen';
import RestaurantesScreen from '../components/RestaurantesScreen';

export type StackParamList = {
    Home: undefined;
    AlojamientosScreen: undefined;
    ToursScreen: undefined;
    TransporteScreen: undefined;
    RestaurantesScreen: undefined;
};

// Crear Stack Navigator
const Stack = createNativeStackNavigator();

const StackNavigator  = () => {
    return (

        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="AlojamientosScreen" component={AlojamientosScreen} />
            <Stack.Screen name="ToursScreen" component={ToursScreen} />
            <Stack.Screen name="TransporteScreen" component={TransporteScreen} />
            <Stack.Screen name="RestaurantesScreen" component={RestaurantesScreen} />
        </Stack.Navigator>

    );
};

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={StackNavigator} options={{ title: "Inicio" }} />
      <Drawer.Screen name="Alojamientos" component={AlojamientosScreen} />
      <Drawer.Screen name="Tours" component={ToursScreen} options={{ title: "Explorar Tours" }} />
      <Drawer.Screen name="Transporte" component={TransporteScreen} />
      <Drawer.Screen name="Restaurantes" component={RestaurantesScreen} />
    </Drawer.Navigator>
  );
};

const AppNavigator = () => {
    return (
        <DrawerNavigator />
    );
  };
  

export default AppNavigator;