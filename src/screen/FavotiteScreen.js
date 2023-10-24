import React, { useState, useCallback } from "react"
import { getFavorites } from "../api/favorito"
import { useFocusEffect } from "@react-navigation/native"
import { enviroment as ENV } from "../util/constants"
import axios from "axios"
import HomeScreen from "./HomeScreen"

export default function FavoritesScreen() {
  const [personajes, setPersonajes] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  useFocusEffect(
    useCallback(() => {
      (async () => {
        const response = await getFavorites()
        console.log(response)
        setPersonajes(response)

        try {
          const responseCharacters = await axios.get(ENV.API_URL_RM);
          console.log('response info1::: ', responseCharacters.data.info);
          setCharacters(responseCharacters.data.results);
          setNextUrl(responseCharacters.data.info.next);
        } catch (error) {
          console.error('ERR fetchDataFavorite:::', error);
        }
      })();
    }, [])
  )

  const loadMoreData = async () => {
    if (isLoadingMore) return;

    setIsLoadingMore(true);
    try {
        if (nextUrl) {
            const response = await axios.get(nextUrl);
            setCharacters([...characters, ...response.data.results]);
            setNextUrl(response.data.info.next);
        }
    } catch (error) {
        console.error('ERR loadMoreData::: ', error);
    } finally {
        setIsLoadingMore(false);
    }
}

  return (
    <HomeScreen 
      characters={
        characters.filter((character) => personajes.includes(character.id))
      } 
      title={'Favoritos'} 
      loadMoreData={loadMoreData}
    />
  )
}