import React, { type ReactNode } from 'react'
import { SafeAreaView, StatusBar, type ViewStyle, Platform } from 'react-native'
import { heightPercentageToDP } from 'react-native-responsive-screen'

interface ContainerProps {
  children: ReactNode
  color?: string
  style?: ViewStyle
}

const Container: React.FC<ContainerProps> = ({ children, color, style }) => {
  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === 'android' ? heightPercentageToDP(3) : 0,
        flex: 1,
        backgroundColor: color ?? 'white',
        ...(style as object)
      }}
    >
      <StatusBar
        backgroundColor={color ?? 'white'}
        barStyle="dark-content"
      />
      {children}
    </SafeAreaView>
  )
}

export default Container
