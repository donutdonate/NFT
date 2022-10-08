import React from "react"
import {View, Image, StyleSheet} from 'react-native'

interface imageArrType {
    imageArray:string[]
  }

const LastSlide = ({imageArray}:imageArrType) => {
    if (imageArray.length !== 0) {
        return(
            <View>
                <View style={{flexDirection: 'row'}}>
                    <Image source={{uri: imageArray[0]}} style={styles.halfImage}/>
                    <Image source={{uri: imageArray[1]}} style={styles.halfImage}/>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Image source={{uri: imageArray[3]}} style={styles.halfImage}/>
                    <Image source={{uri: imageArray[2]}} style={styles.halfImage}/>
                </View>
            </View>
        )
    }
    else {
        return (
            <View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    halfImage: {
        width: 195,
        height: 195
      },
})

export default LastSlide;