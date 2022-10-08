import React from "react"
import { View, Image, StyleSheet } from 'react-native'

interface imageType {
    image:string
}

const Slide = ({image}:imageType) => {
    return(
        <View style={styles.slideContainer}>
            <Image source={{uri: image}} style={styles.image}/>
        </View>
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