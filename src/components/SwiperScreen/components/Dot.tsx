import React from "react";
import { View, StyleSheet } from "react-native";
import { DotType } from "../../../utils/interfaces";
import { colors } from "../../../utils/colors";
const Dot = ({active}:DotType) => {
    if (active) {
        return(
            <View
                style={styles.activeDot}>
            </View>
    )} else {
        return(
            <View
                style={styles.inActiveDot}>
            </View>
    )}
}

const styles = StyleSheet.create({
    activeDot: {
        width:12,
        height:12,
        backgroundColor: colors.ACTIVE_DOT_BACKGROUND,
        borderRadius:6,
        margin: 3
    },
    inActiveDot: {
        width:12,
        height:12,
        borderRadius:6,
        borderWidth:2,
        borderColor: colors.INACTIVE_DOT_BACKGROUND,
        margin: 3
    }
})

export default Dot;