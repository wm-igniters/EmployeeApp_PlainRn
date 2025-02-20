import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './src/navigation/AppNavigator';
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    "lexend-regular": require("./assets/fonts/Lexend-Regular.ttf"),
    "lexend-medium": require("./assets/fonts/Lexend-Medium.ttf"),
    "lexend-semibold": require("./assets/fonts/Lexend-SemiBold.ttf"),
    "lexend-bold": require("./assets/fonts/Lexend-Bold.ttf"),
  });


  if (!fontsLoaded) {
    return null; 
  }

  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}


