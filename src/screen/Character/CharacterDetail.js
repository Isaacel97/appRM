import { SafeAreaView, Text, ImageBackground, ScrollView } from "react-native"
import React from "react"
import { styles } from "./CharacterDetail.styles"
import { Avatar } from "react-native-paper"
import Favoritos from "../../components/Favoritos/Favoritos"
import fondoSpace from "../../assets/img/fondoSpace.jpg"

export default function CharacterDetail(props) {
  const { route: { params } } = props

  return (
    <ScrollView>
      <ImageBackground source={fondoSpace} resizeMode="cover">
        <SafeAreaView style={styles.container}>
          <Avatar.Image
            size={250}
            source={{ uri: params.image }}
            style={styles.image}
          />
          
          <Text style={styles.title}> {params.name}</Text>
          <Text style={styles.title}> {params.species}</Text>
          <Text style={styles.title}> {params.status}</Text>
          {params.type === "" ? null : <Text style={styles.title}> {params.type}</Text>}
          <Text style={styles.title}> {params.gender}</Text>
          <Text style={styles.title}> Ubicacion: {params.location.name}</Text> 
          {params.location.name === params.origin.name ? 
            null :
            <Text style={styles.title}> Origen: {params.origin.name}</Text>
          }
          <Favoritos id={params.id} />
        </SafeAreaView>
      </ImageBackground>
    </ScrollView>
  )
}