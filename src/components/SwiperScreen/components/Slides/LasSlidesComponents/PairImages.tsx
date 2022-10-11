import React from "react";
import { Image, View, StyleSheet } from "react-native";
import { ImagePair } from "../../../../../utils/interfaces";

const PairImages = ({url_1, url_2}:ImagePair) => {
    return(
        <View style={{flexDirection: 'row'}}>
            <Image
                source={{uri: url_1}}
                style={styles.halfImage}
            />
            <Image
                source={{uri: url_2}}
                style={styles.halfImage}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    halfImage: {
        width: 195,
        height: 195
      },
})

export default PairImages;