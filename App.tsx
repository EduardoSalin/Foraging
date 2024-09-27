import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';

const Tab = createBottomTabNavigator();

const HomeScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Home Screen</Text>
  </View>
);

const PlaceholderScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Placeholder Screen</Text>
  </View>
);

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let emoji = '';

            if (route.name === 'Garden') {
              emoji = '🌷'; // Plant emoji for Garden
            } else if (route.name === 'Add') {
              emoji = '📸'; // Plus emoji for Add
            } else if (route.name === 'Badges') {
              emoji = '🏅'; // Trophy emoji for Badges
            }

            // Return emoji as text
            return <Text style={{ fontSize: size }}>{emoji}</Text>;
          },
          tabBarActiveTintColor: 'green',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Garden" component={HomeScreen} />
        <Tab.Screen name="Add" component={PlaceholderScreen} />
        <Tab.Screen name="Badges" component={PlaceholderScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
