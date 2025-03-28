import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator, View, Animated, Easing, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useTheme, useFocusEffect } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

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

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AnimatedTabScreen: React.FC<{ component: React.ComponentType }> = ({ component: Component }) => {
  const [fadeAnim] = useState(new Animated.Value(0));

  useFocusEffect(
    React.useCallback(() => {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        easing: Easing.out(Easing.exp),
        useNativeDriver: true,
      }).start();

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
  const { colors } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          switch (route.name) {
            case 'Inicio': iconName = 'home-outline'; break;
            case 'Alojamientos': iconName = 'bed-outline'; break;
            case 'Tours': iconName = 'map-outline'; break;
            case 'Restaurantes': iconName = 'restaurant-outline'; break;
            case 'Perfil': iconName = 'person-outline'; break;

          }
          return <Ionicons name={iconName as any} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#FFD700',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: '#1C1C1C',
          borderTopWidth: 0,
          elevation: 5,
          shadowColor: '#000',
        },
        tabBarBackground: () => (
          <LinearGradient
            colors={['#121212', '#232323']}
            style={{ flex: 1 }}
          />
        ),
        headerShown: false,
      })}
    >
      <Tab.Screen name="Inicio" component={() => <AnimatedTabScreen component={HomeScreen} />} />
      <Tab.Screen name="Alojamientos" component={() => <AnimatedTabScreen component={AlojamientosScreen} />} />
      <Tab.Screen name="Tours" component={() => <AnimatedTabScreen component={ToursScreen} />} />
      <Tab.Screen name="Restaurantes" component={() => <AnimatedTabScreen component={RestaurantesScreen} />} />
      <Tab.Screen name="Perfil" component={() => <AnimatedTabScreen component={LoginScreen} />} />

    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  const [loading, setLoading] = useState(true);
  const [onboardingSeen, setOnboardingSeen] = useState(false);
  const { colors } = useTheme();

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
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.background }}>
        <ActivityIndicator size="large" color="#FFD700" />
        <Text style={{ color: colors.text, marginTop: 10 }}>Cargando...</Text>
      </View>
    );
  }

  return (
    <Stack.Navigator
      initialRouteName={onboardingSeen ? 'Main' : 'OnboardingScreen'}
      screenOptions={{
        animation: 'fade_from_bottom',
        gestureEnabled: true,
        headerShown: false,
      }}
    >
      <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
      <Stack.Screen name="Main" component={BottomTabsNavigator} />
      <Stack.Screen name="TourDetail" component={TourDetail} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
