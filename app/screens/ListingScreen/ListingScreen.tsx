import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList } from 'react-native'
import Container from '../../components/Container.tsx'
import { type Character } from '../../services/models.ts'
import { fetchCharacters } from '../../services/api.ts'
import CharactersCard from '../../components/CharactersCard.tsx'
import HeaderList from '../../components/HeaderList.tsx'
import { useCharacter } from '../../context/characterContext.tsx'

interface ListingScreenProps {
  navigation: any
}

export const ListingScreen: React.FC<ListingScreenProps> = ({ navigation }) => {
  const [data, setData] = useState<Character[]>([])
  const [pageLoaded, setPageLoaded] = useState<number>(1)
  const [loading, setLoading] = useState<boolean>(false)
  const [lastPage, setLastPage] = useState<number>(1)
  const { setCharacter } = useCharacter()
  const handleEndReached = (): void => {
    if (!loading && pageLoaded <= lastPage) {
      setLoading(true)
      void fetchData(pageLoaded)
    }
  }
  useEffect(() => {
    setLoading(true)
    void fetchData(pageLoaded)
  }, [])
  const fetchData = async (page: number): Promise<void> => {
    try {
      const response = await fetchCharacters(page)
      const lastPage = response.info.pages
      setLastPage(lastPage)
      const result = response.results
      if (result.length > 0) {
        setData(prevData => [...prevData, ...result])
        setPageLoaded(page + 1)
      }
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      setLoading(false)
    }
  }

  const renderItem = ({ item }: { item: Character }): React.ReactElement => {
    return (
        <CharactersCard item={item} onPress={() => {
          setCharacter(item)
          navigation.navigate('DetailsScreen')
        }}/>
    )
  }
  return (
        <Container>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                ListHeaderComponent={() => {
                  return (
                        <HeaderList />
                  )
                }}
                renderItem={renderItem}
                onEndReached={handleEndReached}
                onEndReachedThreshold={0.1}
                ListFooterComponent={loading ? <ActivityIndicator size="large" color="#0000ff"/> : null}
            />
        </Container>
  )
}
