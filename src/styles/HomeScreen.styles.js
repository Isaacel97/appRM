import { StyleSheet } from "react-native";
import Colors from "../constant/Color";

export const styles = StyleSheet.create({
  fondo: {
    flex: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: Colors.greenRM,
    textAlign: "center",
    marginTop: 20,
    marginBottom: 8,
  },
  spinner: {
    marginTop: 20, 
    alignItems: 'center',
    color: Colors.greenRM,
  }
});