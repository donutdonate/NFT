import React from "react";
import { ActivityIndicator, SafeAreaView, StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

const OnLoadScreen = () => {
    return(
        <SafeAreaView style={styles.container}>
            <ActivityIndicator size="large" color="#1FECFC" />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: colors.MAINSCREEN_BACKGROUND,
        alignItems:'center',
        justifyContent: 'center'
      }
})

export default OnLoadScreen;