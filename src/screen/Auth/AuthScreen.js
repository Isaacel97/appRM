import { View, Image, KeyboardAvoidingView, Platform, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import Login from '../../components/Login/Login';
import Register from '../../components/Register/Register';
import { styles } from './AuthScreen.style'
import logo from '../../assets/img/pngegg.png'
import fondoSpace from '../../assets/img/fondoSpace.jpg'

export default function AuthScreen() {

  const [showLogin, setShowLogin] = useState(true)

  return (
    <View style={styles.container}>
      <ImageBackground source={fondoSpace} resizeMode="cover" style={styles.fondo}>
        <Image source={ logo } style={styles.image} resizeMode='center'/>

        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{flex: 1}}>
            {showLogin ? <Login setShowLogin={setShowLogin} /> : <Register setShowLogin={setShowLogin}/>}
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  )
}