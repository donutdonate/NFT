import React from "react";
import {Text, StyleSheet} from 'react-native';
import { PriceTextProps } from "../../../utils/interfaces";
import {colors} from '../../../utils/colors'

const PriceText = ({cripto, currentIndex, priceLength, totalCost, price}:PriceTextProps) => {
    return(
        <Text 
            style={cripto ? styles.collectionCostEth:
            styles.collectionCostUSD}
        >
                {!cripto ? '($': false}
                {
                currentIndex < priceLength ? price?.toFixed(2):
                totalCost.toFixed(2)
                }
                {!cripto ? ')': false}
        </Text>
    )
}

const styles = StyleSheet.create({
    collectionCostEth: {
        color: colors.ETH_COST,
        //fontFamily: 'Poppins'
        fontWeight: '600',
        fontSize: 14,
        lineHeight: 15.4,
        marginLeft: 4
    },
    collectionCostUSD: {
        fontWeight: '500',
        fontSize: 10,
        lineHeight: 15,
        color: colors.USD_COST,
        marginLeft: 4,
        //fontFamily: 'Poppins'
    }
})

export default PriceText;