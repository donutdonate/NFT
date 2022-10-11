import React from "react";
import {View} from 'react-native';
import Vector from '../../../svg/Vector.svg';
import { PriceProps } from "../../../utils/interfaces";
import PriceText from "./PriceText";



const Price = ({currentIndex, totalEth, totalUsd, length, price}:PriceProps) => {
    return(
        <View style={{flexDirection: 'row'}}>
        <Vector width={8} height={12}/>
            <PriceText
                cripto={true}
                currentIndex={currentIndex}
                totalCost={totalEth}
                priceLength={length}
                price={price[currentIndex]?.eth}
            />
            <PriceText
                cripto={false}
                currentIndex={currentIndex}
                totalCost={totalUsd}
                priceLength={length}
                price={price[currentIndex]?.usd}
            />
        </View>
    )
}

export default Price;