import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"
import { HeaderInfo } from "../../utils/interfaces"
import Price from "./components/Price";
import { colors } from "../../utils/colors";

const Header = ({name, logo, price, currentIndex}:HeaderInfo) => {
    let totalEth = 0;
    let totalUsd = 0;
    const totalCost = () => {
        for (let i = 0; i < price.length; i++)
        {
            totalEth+=price[i].eth;
            totalUsd+=price[i].usd;
        }
    }
    totalCost();
    
    return(
      <View style={styles.container}>
            <Image source={{uri: logo}} style={styles.logo} />
        <View style={styles.collectionInfo}>
            <Text style={styles.collectionName}>{name}</Text>
            <Price 
                currentIndex={currentIndex}
                totalEth={totalEth}
                totalUsd={totalUsd}
                length={price.length}
                price={price}
            />
        </View>
      </View>
    )
   }

const styles = StyleSheet.create({
    container: {
        height: 56,
        backgroundColor: colors.HEADER_BACKGROUND,
        flexDirection: 'row',
        paddingLeft: 12,
        paddingTop: 8,
        paddingBottom: 8,
    },
    logo: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10
    },
    collectionInfo: {
        flexDirection: 'column'
    },
    collectionName: {
        color: colors.HEADER_NAME,
        //fontFamily: 'Poppins'
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 24
    }
})
export default Header;