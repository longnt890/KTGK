import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';// or any other icon pack you prefer
import HomeScreen from '../Screens/HomeScreen';
import Transaction from '../Screens/Transaction';
import Customer from '../Screens/Customer';
import Settings from '../Screens/Settings';
import { useRoute } from '@react-navigation/native';
import { View } from 'react-native';



const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {

  const route = useRoute();
  const email = route.params?.data;

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Transaction') {
            iconName = focused ? 'list' : 'list'; // choose appropriate icon
          } else if (route.name === 'Customer') {
            iconName = focused ? 'users' : 'users'; // choose appropriate icon
          } else if (route.name === 'Setting') {
            iconName = focused ? 'gear' : 'gear'; // choose appropriate icon
          }
          return <FontAwesome name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} 
        options={{
          headerTitle: email, 
          headerRight: () => (
            <View style={{marginRight:20}}>
                <FontAwesome name='user-circle' size={30}/>
            </View>
            
          ),
          headerTintColor:'#DA0C81'
        }}
      />
      <Tab.Screen name="Transaction" component={Transaction} />
      <Tab.Screen name="Customer" component={Customer} />
      <Tab.Screen name="Setting" component={Settings} />
    </Tab.Navigator>
  );
}
