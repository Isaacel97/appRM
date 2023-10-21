
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import { Avatar, Button } from 'react-native-paper';
import { useAuth } from '../hooks/useAuth';

export default function MiCuenta() {
    const { user, logout } = useAuth();
    
  return (
    <ScrollView style={styles.header}>
        <View style={styles.mainContainer}>
            <Avatar.Image size={100} source={require('../assets/img/person1.jpeg')} />       
            <Text> {user.username}</Text>      
            <Text> {user.email}</Text>
            <Button onPress={logout} > 
                Cerrar sesión
            </Button>   
        </View>
    </ScrollView> 

  )
}

const styles = StyleSheet.create({
    header : {
        flex: 1,
        padding: 16,
    },
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});