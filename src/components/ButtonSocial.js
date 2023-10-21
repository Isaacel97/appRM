import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function ButtonSocial(props) {
    const { title, color, imageType } = props

    let imageSource;

    if (imageType === 'facebook') {
        imageSource = require('../assets/img/facebook.png')
    } else if (imageType === 'google') {
        imageSource = require('../assets/img/google.png')
    } else if (imageType === 'twitter') {
        imageSource = require('../assets/img/twitter.png')        
    }

    const buttonStyle = {
        backgroundColor: color
    }

  return (
     <TouchableOpacity style={[styles.contentButton, buttonStyle]}>
         <View>
             <Image source={imageSource} style={styles.image} />
         </View>
         <Text style={styles.text}>{title}</Text>
     </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    contentButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        borderRadius: 30,
        padding: 15,
        marginVertical: 10,
        height: 50,
        color: '#fff'
    },
    image: {
        width: 20,
        height: 20,
        marginRight: 10
    }
});