import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Text, View, StatusBar } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import ScreenExample from './screens/ScreenExample';
import RegisterScreen from './screens/RegisterScreen';
import { createStackNavigator } from '@react-navigation/stack';
import {
  useFonts,
  Montserrat_100Thin,
  Montserrat_100Thin_Italic,
  Montserrat_200ExtraLight,
  Montserrat_200ExtraLight_Italic,
  Montserrat_300Light,
  Montserrat_300Light_Italic,
  Montserrat_400Regular,
  Montserrat_400Regular_Italic,
  Montserrat_500Medium,
  Montserrat_500Medium_Italic,
  Montserrat_600SemiBold,
  Montserrat_600SemiBold_Italic,
  Montserrat_700Bold,
  Montserrat_700Bold_Italic,
  Montserrat_800ExtraBold,
  Montserrat_800ExtraBold_Italic,
  Montserrat_900Black,
  Montserrat_900Black_Italic,
} from '@expo-google-fonts/montserrat';

const Stack = createStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_100Thin,
    Montserrat_100Thin_Italic,
    Montserrat_200ExtraLight,
    Montserrat_200ExtraLight_Italic,
    Montserrat_300Light,
    Montserrat_300Light_Italic,
    Montserrat_400Regular,
    Montserrat_400Regular_Italic,
    Montserrat_500Medium,
    Montserrat_500Medium_Italic,
    Montserrat_600SemiBold,
    Montserrat_600SemiBold_Italic,
    Montserrat_700Bold,
    Montserrat_700Bold_Italic,
    Montserrat_800ExtraBold,
    Montserrat_800ExtraBold_Italic,
    Montserrat_900Black,
    Montserrat_900Black_Italic,
  });

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  //const user = null;

  if (!fontsLoaded) {
    return <Text>Loading</Text>;
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          {user ? (
            <Stack.Screen name="ScreenExample">
              options={{ headerShown: false }}
              {(props) => <ScreenExample {...props} extraData={user} />}
            </Stack.Screen>
          ) : (
            <>
              <Stack.Screen
                options={{ headerShown: false }}
                name="LoginScreen"
                component={LoginScreen}
              />
              <Stack.Screen
                options={{ headerShown: false }}
                name="RegisterScreen"
                component={RegisterScreen}
              />
              <Stack.Screen
                options={{ headerShown: false }}
                name="ScreenExample"
                component={ScreenExample}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
