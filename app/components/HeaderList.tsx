import React from 'react'
import { Text, View } from 'react-native'
import {
  heightPercentageToDP,
  widthPercentageToDP
} from 'react-native-responsive-screen'

const HeaderList: React.FC = () => {
  return (
        <View style={{ alignSelf: 'center', width: widthPercentageToDP(90), marginVertical: heightPercentageToDP(1) }}>
            <Text style={{
              fontSize: 20,
              fontWeight: 'bold',
              textAlign: 'center',
              width: widthPercentageToDP(80),
              alignSelf: 'center'
            }}>
               List of Rick and Morty characters and information
            </Text>
        </View>
  )
}

export default HeaderList
