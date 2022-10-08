import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {
    text:string
}

const Description = ({text}:Props) => {
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
        backgroundColor: '#05071B',
        paddingBottom: 25
    },
    describtion: {
        color: '#F3F3F4',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 18.2,
        //fontFamily: 'Poppins'

    }
}
)

export default Description;