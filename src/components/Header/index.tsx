import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"
import Vector from '../../svg/Vector.svg'

interface priceType {
    eth:number,
    usd:number
   }

interface Props {
    name:string,
    logo:string,
    price:priceType[],
    index:number
}
const Header = ({name, logo, price, index}:Props) => {
    let eth = 0;
    let usd = 0;
    const totalCost = () => {
        for (let i = 0; i < price.length; i++)
        {
            eth+=price[i].eth;
            usd+=price[i].usd;
        }
    }
    totalCost();
    
    return(
      <View style={styles.container}>
        
            <Image source={{uri: logo}} style={styles.logo} />
        
        <View style={styles.collectionInfo}>
            <Text style={styles.collectionName}>{name}</Text>
            <View style={{flexDirection: 'row'}}>
                <Vector width={8} height={12}/>
                <Text style={styles.collectionCostEth}>
                    {index < price.length ? price[index].eth.toFixed(2): eth.toFixed(2)}
                </Text>
                <Text style={styles.collectionCostUSD}>
                    (${index < price.length ? price[index].usd.toFixed(2): usd.toFixed(2)})
                </Text>
            </View>
        </View>
      </View>
    )
   }

const styles = StyleSheet.create({
    container: {
        height: 56,
        backgroundColor: '#1E2032',
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
        color: '#1FECFC',
        //fontFamily: 'Poppins'
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 24
    },
    collectionCostEth: {
        color: '#FFFFFF',
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
        color: '#CDCDD1',
        marginLeft: 4,
        //fontFamily: 'Poppins'
    }
})
export default Header;