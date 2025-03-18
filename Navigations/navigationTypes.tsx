import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
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

const AppNavigator = () => {
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

export default AppNavigator;