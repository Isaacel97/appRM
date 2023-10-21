import React, { useState, useCallback } from "react"
import { getFavorites } from "../api/favorito"
import { useFocusEffect } from "@react-navigation/native"
import { enviroment as ENV } from "../util/constants"
import axios from "axios"
import HomeScreen from "./HomeScreen"

export default function FavoritesScreen() {
  const [personajes, setPersonajes] = useState([])
  const [characters, setCharacters] = useState([])

  useFocusEffect(
    useCallback(() => {
      (async () => {
        const response = await getFavorites()
        console.log(response)
        setPersonajes(response)

        try {
          const responseCharacters = await axios.get(ENV.API_URL_RM);
          setCharacters(responseCharacters.data.results);
        } catch (error) {
          console.log(error);
        }
      })();
    }, [])
  )

  return (
    <HomeScreen 
      characters={
        characters.filter((character) => personajes.includes(character.id))
      } 
      title={'Favoritos'} 
    />
  )
}