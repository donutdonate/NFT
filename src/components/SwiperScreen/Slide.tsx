import React from "react"
import { Image, StyleSheet, TouchableOpacity, Linking } from 'react-native'

interface imageType {
       image: {
        url:string,
        link:string
    }
}

const Slide = ({image}:imageType) => {

    return(
        <TouchableOpacity 
            style={styles.slideContainer}
            onPress={() => Linking.openURL(image.link)
            .catch(err =>
            console.error('An error occured', err))
            }
        >
            <Image source={{uri: image.url}} style={styles.image}/>
        </TouchableOpacity>
)
}

const styles = StyleSheet.create({
    slideContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      image: {
        width: 390,
        height: 390
      },
})

export default Slide;