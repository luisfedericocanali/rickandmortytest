import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { ListingScreen } from './app/screens/ListingScreen/ListingScreen'
import { DetailScreen } from './app/screens/DetailScreen/DetailScreen.tsx'
import { CharacterProvider } from './app/context/characterContext.tsx'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { EpisodesScreen } from './app/screens/EpisodesScreen/EpisodesScreen.tsx'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()
function App (): React.JSX.Element {
  function MyTabs (): React.JSX.Element {
    return (
            <Tab.Navigator screenOptions={{ headerShown: false }}>
                <Tab.Screen name="Details" component={DetailScreen} />
                <Tab.Screen name="Episodes" component={EpisodesScreen} />
            </Tab.Navigator>
    )
  }
  return (
    <NavigationContainer>
        <CharacterProvider>
          <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="ListingScreen">
            <Stack.Screen name="ListingScreen" component={ListingScreen} />
            <Stack.Screen name="DetailsScreen" component={MyTabs} />
          </Stack.Navigator>
        </CharacterProvider>
    </NavigationContainer>
  )
}

export default App
