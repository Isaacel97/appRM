import { View, Text, SafeAreaView, FlatList, ImageBackground } from 'react-native'
import React from 'react'
import Cards from '../components/Card/Cards';
import { styles } from '../styles/HomeScreen.styles'
import fondoSpace from '../assets/img/fondoSpace.jpg'

const HomeScreen = (props) => {
  const { characters } = props;
  const { title } = props;

  return (
    <ImageBackground source={fondoSpace} resizeMode="cover" style={styles.fondo}>
      <SafeAreaView>
        <Text style={styles.title}>
            {title}
        </Text>

        <FlatList
          data={characters}
          showsVerticalScrollIndicator={false}
          keyExtractor={(characters) => String(characters.id)}
          numColumns={2}
          renderItem={({ item }) => (
            <Cards character={item} />
          )}
        />
      </SafeAreaView>
    </ImageBackground>
  )
}

export default HomeScreen