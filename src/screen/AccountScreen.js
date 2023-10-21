import { View, Text, ScrollView, StyleSheet, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import Login from '../components/Login/Login';
import Register from '../components/Register/Register';


export default function AccountScreen() {
  return (
    <View style={styles.container}>
        <View style={styles.header}>

        </View>
        <ScrollView>
            <View style={styles.mainContainer}>
                <Text>AccountScreen</Text>
            </View>
        </ScrollView>
        <View style={styles.footer}>

        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header : {
        backgroundColor: 'red',
        flexDirectio: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
    },
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flexDirection: 'row',
        padding: 10
    }
});