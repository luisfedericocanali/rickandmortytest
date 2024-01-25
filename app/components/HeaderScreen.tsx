import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { styles } from './Styles.ts'
import Separator from './Separator.tsx'
interface HeaderProps {
  title?: string
  onPress?: any
}
const Header: React.FC<HeaderProps> = ({ onPress, title }) => {
  return (
      <View style={styles.header}>
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                  <Pressable onPress={onPress}>
                <View style={styles.triangle}/>
                  </Pressable>
              </View>
         <Text style={styles.textHeader}>
             {title}
         </Text>
          <Separator width x={2}/>
      </View>
  )
}

export default Header
