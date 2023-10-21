import React, { useState, useEffect } from "react"
import { IconButton } from "react-native-paper"
import { addFavorites, isFavoriteApi, removeFavorite } from "../../api/favorito"
import Colors from "../../constant/Color"

export default function Favoritos(props) {
  const { id } = props
  const [isFavorite, setIsFavorite] = useState(undefined)
  const [reloadFavorite, setReloadFavorite] = useState(false)
  const onReloadFavorite = () => setReloadFavorite(!reloadFavorite)

  useEffect(() => {
    (async () => {
      const response = await isFavoriteApi(id)
      if (response) setIsFavorite(true)
      else setIsFavorite(false)
    })()
  }, [id, reloadFavorite])

  const addFavoritos = async () => {
    try {
      console.log("ID pj en addFavoritos:::", id)
      await addFavorites(id)
      onReloadFavorite()
    } catch (error) {
      console.log("error in addFavoritos", error)
    }
  }

  const deleteFavorite = async () => {
    try {
      await removeFavorite(id)
      onReloadFavorite()
    } catch (error) {
      //mejorar gestion de error
      console.error("error in removeFavorites: ", error)
    }
  }

  const iconColor = isFavorite ? Colors.greenClaroRM : "white"
  return (
    <IconButton
      icon="heart"
      iconColor={iconColor}
      size={50}
      onPress={isFavorite ? deleteFavorite : addFavoritos}
    />
  )
}