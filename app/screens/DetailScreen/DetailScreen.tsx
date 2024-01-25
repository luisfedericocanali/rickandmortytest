import React from 'react'
import Container from '../../components/Container.tsx'

import Header from '../../components/HeaderScreen.tsx'
import { useCharacter } from '../../context/characterContext.tsx'
import CharacterDetailsCard from '../../components/CharacterDetailsCard.tsx'
interface DetailsScreenProps {
  navigation: any
}
export const DetailScreen: React.FC<DetailsScreenProps> = ({ navigation }) => {
  const { character } = useCharacter()
  console.log(character)
  return (
    <Container>
      <Header title={'Character details'} onPress={() => navigation.goBack()}/>
        <CharacterDetailsCard item={character}/>
    </Container>
  )
}
