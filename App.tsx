//import liraries
import React from 'react';
import Navigation from './src/compoents/Navigation';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AuthProvider} from './src/context/AuthContext';

// create a component
const App = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <AuthProvider>
        <Navigation />
      </AuthProvider>
    </SafeAreaView>
  );
};
//make this component available to the app
export default App;
