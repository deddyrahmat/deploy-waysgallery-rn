import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import * as Font from 'expo-font';
// import AppLoading from 'expo-app-loading';
// import { Ionicons } from '@expo/vector-icons';

// import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';

// component
import Home from './src/screen/Home';
import Login from "./src/screen/Login"
import Register from './src/screen/Register';

const Stack = createStackNavigator();

export default function App() {

  // const [isReady, setIsReady] = useState(false);

  // const startUp = async () => {
  //   await Font.loadAsync({
  //     Roboto: require('native-base/Fonts/Roboto.ttf'),
  //     Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
  //     ...Ionicons.font,
  //   });
  //   setIsReady(true)
  // }

  // useEffect(() => {
  //   startUp();
  // }, [])

  // if (!isReady) {
  //   return <AppLoading />
  // }

  // console.log(isReady);


  return (
    <NavigationContainer>
      {/*  initialRouteName="LoginScreen" */}
      <Stack.Navigator> 
        <Stack.Screen name="LoginScreen" component={Login} options={{title: "WaysGallery"}} />
        <Stack.Screen name="RegisterScreen" component={Register} options={{title: "Register"}}/>
        <Stack.Screen name="HomeScreen" component={Home} options={{title: "Home"}}/>
      </Stack.Navigator>
    </NavigationContainer>
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app Cuy!</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
