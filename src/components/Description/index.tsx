import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { DescriveType } from "../../utils/interfaces";
import {colors} from '../../utils/colors';

const Description = ({text}:DescriveType) => {
    return (
    <View style={styles.describeBlock}>
        <Text style={styles.describtion}>
        {text}
        </Text>
    </View>
)
}

const styles = StyleSheet.create({
    describeBlock: {
        paddingLeft: 12,
        paddingRight: 12,
        paddingTop: 8,
        backgroundColor: colors.DESCRIPTION_BACKGROUND,
        paddingBottom: 25
    },
    describtion: {
        color: colors.DESCRIBTION_FONT,
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 18.2,
        //fontFamily: 'Poppins'
    }
}
)

export default Description;