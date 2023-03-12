import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes';
import Home from './src/pages/Home';

export default function App() {
  return (
    <NavigationContainer>
        <Routes/>
        <StatusBar style='light' backgroundColor='#495BCC' />
    </NavigationContainer>
  );
}