import AsyncStorage from "@react-native-async-storage/async-storage";
import { enviroment as ENV } from "../util/constants"
import { includes, pull } from "lodash"

export const getFavorites = async () => {
  try {
    const response = await AsyncStorage.getItem(ENV.STORAGE.FAVORITE)
    console.log("res getFavorites::: ", response)
    return JSON.parse(response) || []
  } catch (error) {
    console.error("ERR getFavorites", error)
    return []
  }
}

export const addFavorites = async (id) => {
  try {
    console.log("añadir favoritos")
    const favorites = await getFavorites()
    favorites.push(id)
    console.log("favoritos API::: ", favorites)
    await AsyncStorage.setItem(ENV.STORAGE.FAVORITE, JSON.stringify(favorites))
  } catch (err) {
    console.error("ERR addFavorites: ", err)
  }
}

export const isFavoriteApi = async (id) => {
  try {
    const favorites = await getFavorites()
    console.log("isFavoriteApi::: ", includes(favorites, id));
    return includes(favorites, id)
  } catch (error) {
    console.error("ERR isFavoriteApi::: ", error)
    return false
  }
}

export const removeFavorite = async (id) => {
  console.log("Eliminando favorito id: ", id)

  try {
    const favorites = await getFavorites()
    const newFavorites = pull(favorites, id)
    await AsyncStorage.setItem(ENV.STORAGE.FAVORITE, JSON.stringify(newFavorites))
  } catch (error) {
    console.error("ERR removeFavorite::: ", error)
  }
}