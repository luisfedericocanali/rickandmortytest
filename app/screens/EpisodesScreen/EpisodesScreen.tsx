import React from 'react'
import Container from '../../components/Container.tsx'
import Header from '../../components/HeaderScreen.tsx'
import { useCharacter } from '../../context/characterContext.tsx'
import Separator from '../../components/Separator.tsx'
import ListOfEpisodes from '../../components/ListOfEpisodes.tsx'
interface EpisodesScreenProps {
  navigation: any
}

export const EpisodesScreen: React.FC<EpisodesScreenProps> = ({ navigation }) => {
  const { character } = useCharacter()
  return (
        <Container>
            <Header title={'list of episodes'} onPress={() => navigation.navigate('ListingScreen')}/>
            <Separator height x={2}/>
            {(character !== null) &&
            <ListOfEpisodes item={character} />
            }
        </Container>
  )
}
