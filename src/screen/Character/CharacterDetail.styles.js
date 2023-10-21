import { StyleSheet } from "react-native"
import Colors from "../../constant/Color"

export const styles = StyleSheet.create({
  container: {
    margin: 46,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    marginBottom: 30,
  },
  title: {
    color: Colors.blueRM,
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
  },
  fondo: {
    flex: 1,
  }
})