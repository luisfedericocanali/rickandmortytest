import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, FlatList } from 'react-native';
import Container from '../../components/Container.tsx';
import { Character } from '../../services/models.ts';
import { fetchCharacters } from '../../services/api.ts';
import CharactersCard from '../../components/CharactersCard.tsx';
import HeaderList from '../../components/HeaderList.tsx';
import { useCharacter } from '../../context/characterContext.tsx';

interface ListingScreenProps {
  navigation: any;
}

export const ListingScreen: React.FC<ListingScreenProps> = ({ navigation }) => {
  const [data, setData] = useState<Character[]>([]);
  const [pageLoaded, setPageLoaded] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [lastPage, setLastPage] = useState<number>(1);
  const { setCharacter } = useCharacter();

  const fetchData = async (page: number): Promise<void> => {
    try {
      setLoading(true);
      const response = await fetchCharacters(page);
      const lastPage = response.info.pages;
      setLastPage(lastPage);
      const result = response.results;
      if (result.length > 0) {
        setData(prevData => [...prevData, ...result]);
        setPageLoaded(page + 1);
      }
    } catch (error) {
      Alert.alert('Alert', 'Connection failed, try again later', [{ text: 'Accept' }]);
    } finally {
      setLoading(false);
    }
  };

  const handleEndReached = (): void => {
    if (!loading && pageLoaded <= lastPage) {
      fetchData(pageLoaded);
    }
  };

  const renderItem = ({ item }: { item: Character }): React.ReactElement => (
      <CharactersCard
          item={item}
          onPress={() => {
            setCharacter(item);
            navigation.navigate('DetailsScreen');
          }}
      />
  );

  useEffect(() => {
    fetchData(pageLoaded);
  }, []);

  return (
      <Container>
        <FlatList
            refreshing={loading}
            onRefresh={() => fetchData(1)}
            data={data}
            keyExtractor={(item) => item.id.toString()}
            ListHeaderComponent={() => <HeaderList />}
            renderItem={renderItem}
            onEndReached={handleEndReached}
            onEndReachedThreshold={0.1}
            ListFooterComponent={loading ? <ActivityIndicator size="large" color="#0000ff" /> : null}
        />
      </Container>
  );
};
