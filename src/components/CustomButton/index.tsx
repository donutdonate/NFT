import React from "react";
import { Linking, Text, TouchableOpacity, StyleSheet } from "react-native";
import { CollectionUrl } from "../../utils/interfaces";
import { colors } from "../../utils/colors";

const CustomButton = ({collUrl, buttonText}:CollectionUrl) => {
return(
    <TouchableOpacity
        style={styles.button}
        onPress={() => Linking.openURL(collUrl)
        .catch(err =>
        console.error('An error occured', err))
        }
    >
        <Text style={styles.textButton}
            >{buttonText}
        </Text>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    textButton: {
        color: colors.LAST_SLIDE_BUTTON_TEXT,
        //fontFamily: 'Popins',
        fontWeight: '600',
        fontSize: 14,
        lineHeight: 16.8,
        textAlign: 'center'
    },
      button: {
        borderWidth: 1.5,
        borderRadius: 8,
        borderColor: colors.LAST_SLIDE_BUTTON_BACK,
        paddingTop: 12,
        paddingBottom: 11,
        paddingLeft: 16,
        paddingRight: 16,
        marginTop: 12,
        alignItems: 'center',
        marginLeft: 12,
        marginRight: 12
    },
})

export default CustomButton;