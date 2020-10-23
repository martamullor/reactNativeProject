import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native';
import Home from './screens/Home';
import ScreenExample from './screens/ScreenExample';
import { createStackNavigator } from '@react-navigation/stack';
import {
  useFonts,
  Rubik_700Bold,
  Rubik_300Light,
} from '@expo-google-fonts/rubik';

const Stack = createStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Rubik_700Bold,
    Rubik_300Light,
  });

  if (!fontsLoaded) {
    return <Text>Loading</Text>;
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="ScreenExample" component={ScreenExample} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
