import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import * as AuthSession from 'expo-auth-session';

WebBrowser.maybeCompleteAuthSession();

const LoginScreen = () => {
  const [userInfo, setUserInfo] = useState(null);

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: '249523003973-gimof3vh38617o8nrudg2bbonnf87aat.apps.googleusercontent.com',
    expoClientId: '249523003973-gimof3vh38617o8nrudg2bbonnf87aat.apps.googleusercontent.com',
  });

  useEffect(() => {
    if (response?.type === 'success') {
      getUserInfo(response.authentication.accessToken);
    }
  }, [response]);

  const getUserInfo = async (token) => {
    try {
      const response = await fetch('https://www.googleapis.com/userinfo/v2/me', {
        headers: { Authorization: `Bearer ${token}` },
      });

      const user = await response.json();
      setUserInfo(user);
      Alert.alert("Inicio de sesión exitoso", `Hola, ${user.name}`);
    } catch (error) {
      console.error(error);
    }
  };

  const handleGoogleSignIn = () => {
    promptAsync();
  };

  return (
    <View style={styles.container}>
      <Ionicons name="close" size={24} color="white" style={styles.closeIcon} />
      <Text style={styles.title}>Inicia sesión o regístrate</Text>

      <View style={styles.inputContainer}>
        <TextInput placeholder="País/Región" placeholderTextColor="gray" style={styles.input} />
        <TextInput placeholder="Número de teléfono" placeholderTextColor="gray" style={styles.input} keyboardType="phone-pad" />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Continuar</Text>
      </TouchableOpacity>

      <Text style={styles.divider}>o</Text>

      <TouchableOpacity style={styles.socialButton}>
        <Ionicons name="mail-outline" size={20} color="white" style={styles.socialIcon} />
        <Text style={styles.socialText}>Continuar con el correo electrónico</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.socialButton}>
        <Ionicons name="logo-facebook" size={20} color="white" style={styles.socialIcon} />
        <Text style={styles.socialText}>Continuar con Facebook</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.socialButton}
        onPress={handleGoogleSignIn}
        disabled={!request}
      >
        <Ionicons name="logo-google" size={20} color="white" style={styles.socialIcon} />
        <Text style={styles.socialText}>Continuar con Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.socialButton}>
        <Ionicons name="logo-apple" size={20} color="white" style={styles.socialIcon} />
        <Text style={styles.socialText}>Continuar con Apple</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 20,
    justifyContent: 'center',
  },
  closeIcon: {
    position: 'absolute',
    top: 40,
    right: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#1E1E1E',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    color: 'white',
  },
  button: {
    backgroundColor: '#E94560',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  divider: {
    color: 'gray',
    textAlign: 'center',
    marginVertical: 10,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  socialIcon: {
    marginRight: 10,
  },
  socialText: {
    color: 'white',
  },
});
