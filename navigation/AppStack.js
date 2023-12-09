import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { AuthenticatedUserContext } from '../providers'
import HomeScreen from '../Screens/HomeScreen'
import LoginScreen from '../Screens/LoginScreen'
import SignupScreen from '../Screens/SignupScreen'
import ForgotPasswordScreen from '../Screens/ForgotPasswordScreen'
import AddProduct from '../Screens/AddProduct'
import DetailsScreen from '../Screens/DetailsScreen'
import Tab from './TabNavigate'


const Stack = createStackNavigator();
export const AppStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='LoginScreen' component={LoginScreen} options={{headerShown:false}}/>
        <Stack.Screen name='Tab' component={Tab} options={{ headerShown: false }}/>
        <Stack.Screen name='AddProduct' component={AddProduct} options={{ headerTitle: "Service", headerStyle:{backgroundColor:'#DA0C81' }, headerTintColor:'white'}}/>
        <Stack.Screen name='DetailsScreen' component={DetailsScreen} options={{ headerTitle: "Service Details", headerStyle:{backgroundColor:'#DA0C81' }, headerTintColor:'white'}}/>
    </Stack.Navigator>
  );
};

export default AppStack;
