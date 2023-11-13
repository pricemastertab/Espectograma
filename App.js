import React from "react";
import { View, Text, ImageBackground, StyleSheet, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('./foodmenu.png')} // Substitua pelo caminho da sua imagem
        style={styles.imageBackground}
      >
        {/* Seu conteúdo */}
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover', // Ajusta o modo de exibição da imagem de fundo (pode ser 'cover', 'contain', etc.)
    justifyContent: 'center',
    width: '100%', // Largura igual a 100% da tela
    height: '100%', // Altura igual a 100% da tela
  },
})
