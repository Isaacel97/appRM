import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React from "react"
import Rm from "../../../api/rm"
import CharacterDetail from "../../../screen/Character/CharacterDetail"
import Colors from "../../../constant/Color"

export default function StackNavigation() {
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="RickAndMortyApi"
        component={Rm}
        options={{
          title: "",
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Detail"
        component={CharacterDetail}
        options={{
          title: 'Detalle',
          headerStyle: {
            backgroundColor: Colors.greenClaroRM,
          },
          // headerTintColor: Colors.blueRM,
        }}
      />
    </Stack.Navigator>
  )
}