import AsyncStorage from "@react-native-async-storage/async-storage";
import { enviroment as ENV } from "../util/constants"
import { getMe } from "../api/users";
import { authFetch } from "../util/authFetch";
//dependencia de lodash (Ana Sol)
// import { includes, pull } from "lodash"

export const getFavorites = async () => {
  try {
    const user = await getMe()
    return user.favorites || [];
  } catch (error) {
    console.error("ERR getFavorites", error)
    return []
  }
}

export const addFavorites = async (idFav) => {
  try {
    const user = await getMe();
    const currentFavorites = user.favorites || [];
    currentFavorites.push(idFav);
    const url = `${ENV.API_URL}${ENV.ENDPOINTS.UPDATE_USER.replace(':id', user.id)}`;
    const response = await authFetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ favorites: currentFavorites }),
    });

    if (response.ok) {
      console.log("Favorito agregado con éxito");
    } else {
      console.error("Error al agregar favorito: ", response.status, response.statusText);
    }
  } catch (error) {
    console.error("ERR addFavorites::: ", error);
  }
}

export const isFavoriteApi = async (id) => {
  try {
    const favorites = await getFavorites()
    return favorites.includes(id)
  } catch (error) {
    console.error("ERR isFavoriteApi::: ", error)
    return false
  }
}

export const removeFavorite = async (id) => {
  console.log("Eliminando favorito id: ", id)

  try {
    const user = await getMe();
    let favorites = await getFavorites()
    favorites = favorites.filter(favorite => favorite !== id)
    const url = `${ENV.API_URL}${ENV.ENDPOINTS.UPDATE_USER.replace(':id', user.id)}`;
    const response = await authFetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ favorites: favorites }),
    });

    if (response.ok) {
      console.log("Favorito eliminado con éxito");
    } else {
      console.error("Error al eliminar favorito: ", response.status, response.statusText);
    }
  } catch (error) {
    console.error("ERR removeFavorite::: ", error)
  }
}