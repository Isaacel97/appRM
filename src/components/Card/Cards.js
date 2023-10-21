import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./Card.styles";
import { Card } from 'react-native-paper';
import { useNavigation } from "@react-navigation/native"

const Cards = (props) => {
  const { character } = props;
  const navigation = useNavigation();

  const goToPersonaje = () => {
    navigation.navigate("Detail", character)
  };

  return (
    <TouchableOpacity 
      onPress={goToPersonaje}
      style={styles.touchable}>
      <Card style={styles.cardContainer}>
        <Card.Cover source={{ uri: character.image }}/>
        <Card.Content>
          <Text style={styles.cardTitle}>{character.name}</Text>
          <Text style={styles.cardText}>{character.species} </Text>
        </Card.Content>
        <Text style={styles.cardTextId}>#{character.id} </Text>
      </Card>
    </TouchableOpacity>
  );
}

export default Cards;
