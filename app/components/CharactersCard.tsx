import { type Character } from '../services/models.ts'
import React from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import Separator from './Separator.tsx'
import UnknownView from './UnknownView.tsx'
import AliveView from './AliveView.tsx'
import DeadView from './DeadView.tsx'
import { styles } from './Styles.ts'
type Status = 'unknown' | 'Alive' | 'Dead'
const CharactersCard = ({ item, onPress }: { item: Character, onPress: any }): React.ReactElement => {
  const StatusView: Record<Status, React.FC> = {
    unknown: UnknownView,
    Alive: AliveView,
    Dead: DeadView
  }
  const statusKey = item.status as Status
  const CurrentView = StatusView[statusKey]
  return (
      <Pressable onPress={onPress}>
        <View style={styles.characterCard}>
            <View style={styles.viewBorderBlack}>
                <Image
                    style={styles.imageCard}
                    source={{ uri: item.image }}
                />
            </View>
            <Separator width x={2} />
            <View style={styles.informationCard}>
                <View>
                    <Text style={styles.title}>
                        {item.name}
                    </Text>
                    <Separator height x={0.25} />
                    <Text style={styles.textCard}>
                        {item.gender}
                    </Text>
                    <Text style={styles.textCard}>
                        Episodes: {item.episode.length}
                    </Text>
                </View>
            </View>
            <CurrentView/>
        </View>
      </Pressable>
  )
}
export default CharactersCard
