import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { ListingScreen } from './app/screens/ListingScreen/ListingScreen'
import { DetailScreen } from './app/screens/DetailScreen/DetailScreen.tsx'

const Stack = createNativeStackNavigator()

function App (): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="ListingScreen">
        <Stack.Screen name="ListingScreen" component={ListingScreen} />
          <Stack.Screen name="DetailsScreen" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
