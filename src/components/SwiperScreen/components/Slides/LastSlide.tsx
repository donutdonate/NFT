import React from "react"
import {View} from 'react-native'
import { ImageArray } from "../../../../utils/interfaces";
import ModalView from "./LasSlidesComponents/ModalView";
import PairImages from "./LasSlidesComponents/PairImages";

const LastSlide = ({
    imageArray,
    collUrl
}:ImageArray) => {
    if (imageArray.length !== 0) {
        return(
            <View >
                <PairImages 
                    url_1={imageArray[0].links.url}
                    url_2={imageArray[1].links.url}
                />
                <PairImages 
                    url_1={imageArray[3].links.url}
                    url_2={imageArray[2].links.url}
                />
                <ModalView collUrl={collUrl} buttonText={''}/>
            </View>
        )
    }
    else {
        return (
            <View>
            </View>
        )
    }
}

export default LastSlide;