import React, { useCallback, useState, useEffect } from 'react'
import { useFocusEffect } from '@react-navigation/native';
import { Text, ScrollView, Alert } from 'react-native'
import { Button } from 'react-native-paper';
import { useAuth } from '../hooks/useAuth';
import { styles } from '../styles/MiCuenta.styles';
import Menu from '../components/Menu/Menu';

const MiCuenta = () => {
    const { logout, user: authUser } = useAuth();
    const [user, setUser] = useState(authUser);

    getAuth = () => {
        setUser(authUser);
    };

    const logoutAlert = () => {
        Alert.alert(
            "Cerrar sesión",
            "¿Estás seguro de que quieres cerrar sesión?",
            [
                {
                    text: "No",
                    style: "cancel"
                },
                { text: "Sí", onPress: () => logout() }
            ],
            { cancelable: false }
        );
    }

    useFocusEffect(
        useCallback(() => {
            getAuth();
        }, [authUser]),
    );

    useEffect(() => {
       console.log('Data user:', user);
    }, []);
  return (
    <ScrollView style={styles.container}>
        <Text style={styles.title}>Bienvenido</Text>
        <Text style={styles.subtitle}> {
        user.firstname && user.lastname 
            ? `${user.firstname} ${user.lastname}`
            : user.email}
        </Text>
        <Menu />
        <Button
            mode="contained"
            onPress={logoutAlert}>
            Cerrar sesión
        </Button>
    </ScrollView> 
  )
}

export default MiCuenta