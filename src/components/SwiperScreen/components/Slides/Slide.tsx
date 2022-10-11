import React from "react";
import { ImageType } from "../../../../utils/interfaces";
import { Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const Slide = ({links}:ImageType) => {

    return(
        <TouchableOpacity 
            style={styles.slideContainer}
            onPress={() => Linking.openURL(links?.link)
            .catch(err =>
            console.error('An error occured', err))
            }
        >
            <Image
            source={{uri: links?.url}}
            style={styles.image}
            />
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