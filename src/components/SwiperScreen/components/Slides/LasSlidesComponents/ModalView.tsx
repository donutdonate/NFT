import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { CollectionUrl } from "../../../../../utils/interfaces";
import { colors } from "../../../../../utils/colors";
import CustomButton from  '../../../../CustomButton'

const ModalView = ({collUrl, buttonText=''}:CollectionUrl) => {
    return(
    <View style={styles.modal}>
        <Text style={styles.modalText}
        >{'Browse all NTFs\nfrom this collection'}</Text>
            <CustomButton collUrl={collUrl} buttonText={'Browse collection'}/>
    </View>
    )
}

const styles = StyleSheet.create({
    modal: {
        backgroundColor: colors.MODAL_BACKGROUND,
        position:'absolute',
        zIndex:1,
        width: '100%',
        height: 390,
        alignItems: 'center',
        justifyContent: 'center'
    },
    modalText: {
        color: colors.MODAL_TEXT_COLOR,
        //fontFamily: 'Popins',
        fontWeight: '600',
        fontSize: 32,
        lineHeight: 36.4,
        textAlign: 'center'
    },
    lastSlideButtonText: {
        color: colors.LAST_SLIDE_BUTTON_TEXT,
        //fontFamily: 'Popins',
        fontWeight: '600',
        fontSize: 14,
        lineHeight: 16.8,
        textAlign: 'center'
    },
})

export default ModalView;