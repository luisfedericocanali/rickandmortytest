import { type Character } from '../services/models.ts'
import React from 'react'
import { Image, Text, View } from 'react-native'
import Separator from './Separator.tsx'
import { styles } from './Styles.ts'
const CharactersDetailsCard = ({ item }: { item: Character | null }): React.ReactElement => {
  if (item === null) {
    return <Text>No character details available</Text>
  }
  return (
            <View style={styles.characterDetailsCard}>
                <Separator height x={1} />
                    <Image
                        style={styles.imageCardDetails}
                        source={{ uri: item.image }}
                    />
                <Separator width x={2} />
                <View style={styles.informationDetailsCard}>
                    <View>
                        <Text style={styles.title}>
                            {item.name}
                        </Text>
                        <Separator height x={0.25} />
                        <Text style={styles.textCard}>
                            {item.gender}
                        </Text>
                        <Separator height x={0.25} />
                        <Text style={styles.textCard}>
                            {item.species}
                        </Text>
                        <Separator height x={0.25} />
                        <Text style={styles.textCard}>
                           Status : {item.status}
                        </Text>
                        <Separator height x={0.25} />
                        <Text style={styles.textCard}>
                           Last Location known : {item.location.name}
                        </Text>
                        <Separator height x={0.25} />
                        <Text style={styles.textCard}>
                            Episodes: {item.episode.length}
                        </Text>
                    </View>
                </View>
            </View>
  )
}
export default CharactersDetailsCard
