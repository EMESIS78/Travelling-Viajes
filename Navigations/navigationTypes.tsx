import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Index from '../app/index';
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

export type DrawerParamList = {
    HomeStack: undefined;
};

// Crear navegadores
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// 🚀 Stack Navigator (para navegar desde el carrusel)
const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Index" component={Index} />
            <Stack.Screen name="AlojamientosScreen" component={AlojamientosScreen} />
            <Stack.Screen name="ToursScreen" component={ToursScreen} />
            <Stack.Screen name="TransporteScreen" component={TransporteScreen} />
            <Stack.Screen name="RestaurantesScreen" component={RestaurantesScreen} />
        </Stack.Navigator>
    );
};

// 🚀 Drawer Navigator (para navegación lateral)
const DrawerNavigator = () => {
    return (
        <Drawer.Navigator screenOptions={{ headerShown: false }}>
            <Drawer.Screen name="HomeStack" component={HomeStack} />
        </Drawer.Navigator>
    );
};

// 📌 Exportamos la navegación principal
const AppNavigator: React.FC = () => {
    return (
        <NavigationContainer>
            <DrawerNavigator />
        </NavigationContainer>
    );
};


export default AppNavigator;