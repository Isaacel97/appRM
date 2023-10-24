import React from 'react'
import { Text, SafeAreaView, FlatList, ImageBackground } from 'react-native'
import Cards from '../components/Card/Cards';
import { styles } from '../styles/HomeScreen.styles'
import fondoSpace from '../assets/img/fondoSpace.jpg'
import { ActivityIndicator } from 'react-native-paper';

const HomeScreen = (props) => {
  const { characters, title, loadMoreData } = props;

  const loadMore = () => {
    loadMoreData();
  }

  return (
    <ImageBackground source={fondoSpace} resizeMode="cover" style={styles.fondo}>
      <SafeAreaView style={{flex: 1}}>
        <Text style={styles.title}>
            {title}
        </Text>

        <FlatList
          data={characters}
          showsVerticalScrollIndicator={false}
          keyExtractor={(characters) => String(characters.id)}
          onEndReached={loadMore}
          onEndReachedThreshold={0.2}
          numColumns={2}
          ListFooterComponent={<ActivityIndicator size="large" />}
          ListFooterComponentStyle={styles.spinner}
          renderItem={({ item }) => (<Cards character={item}/>)}
        />
      </SafeAreaView>
    </ImageBackground>
  )
}

export default HomeScreen