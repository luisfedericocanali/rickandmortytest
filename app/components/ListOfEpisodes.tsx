import { Text, View } from 'react-native'
import { widthPercentageToDP } from 'react-native-responsive-screen'
import React from 'react'
import { type Character } from '../services/models.ts'

const ListOfEpisodes = ({ item }: { item: Character }): React.ReactElement => {
  return (
        <View style={{ alignSelf: 'center' }}>
            <Text style={{ width: widthPercentageToDP(90), fontSize: 18, fontWeight: '400' }}>
                This Character appears in {item.episode.length > 1 ? 'these episodes' : 'this episode'}: {item.episode.map((item, index, array) => (
                <Text key={item.toString()}>
                    {item.split('/').pop()}{index < array.length - 1 ? ' - ' : '.'}
                </Text>
            ))}
            </Text>
        </View
        >)
}
export default ListOfEpisodes
