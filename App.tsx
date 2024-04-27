/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StatusBar,
  Text,
  View,
} from 'react-native';
import { CalculatorScreen } from './src/presentation';
import { styles } from './src/config/theme/app-theme';

function App() {


  return (
    <View style={styles.background} >
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'dark'}
      />
      <CalculatorScreen />
    </View>
  );
}


export default App;
