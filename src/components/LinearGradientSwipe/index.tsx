import React from "react";
import { Text, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const LinearGradientSwipe = () => {
    return(
        <LinearGradient
        colors={['rgba(31, 236, 252, 1)', 'rgba(31, 236, 252, 0)']}
        style={styles.linearGradient}
        >
          <Text style={styles.gradient}>
            {'Scroll for next gem'}
          </Text>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    linearGradient: {
        height: '40%',
      },
      gradient: {
        textAlign: 'center',
        paddingTop: 18,
        paddingBottom: 35,
        //fontFamily: 'Poppins',
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 18.2,
        color: '#FFFFFF',
      },
})

export default LinearGradientSwipe;