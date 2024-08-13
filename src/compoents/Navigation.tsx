//import liraries
import {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../pages/authentication/Log';
import {NavigationContainer} from '@react-navigation/native';
import Startup from '../pages/authentication/Startup/Startup';
import { AuthContext, AuthProvider } from '../context/AuthContext';
import { ActivityIndicator, View } from 'react-native';

const Stack = createNativeStackNavigator();
// create a component
const Navigation = () => {
  const {loading,showStartup}:any = useContext(AuthContext);
  if(loading){
    return (<View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <ActivityIndicator size={'large'}></ActivityIndicator>
    </View>);
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={showStartup == true  ? 'get-started' : 'login'}>
        {showStartup ?
        <Stack.Screen
          name="get-started"
          options={{headerShown: false}}
          component={Startup}></Stack.Screen>
:
        <Stack.Screen
          name="login"
          options={{headerShown: false}}
          component={Login}></Stack.Screen>
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
