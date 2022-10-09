import React from "react"
import {View, Image, StyleSheet, Text, TouchableOpacity, Linking} from 'react-native'

interface urlArray {
    links: {
      url:string,
      link:string
    },
   }
  
  interface imageArrType {
    imageArray:urlArray[],
    collUrl:string
   }

const LastSlide = ({imageArray, collUrl}:imageArrType) => {
    if (imageArray.length !== 0) {
        return(
            <View >
                <View style={{flexDirection: 'row'}}>
                    <Image source={{uri: imageArray[0].links?.url}} style={styles.halfImage}/>
                    <Image source={{uri: imageArray[1].links?.url}} style={styles.halfImage}/>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Image source={{uri: imageArray[3].links?.url}} style={styles.halfImage}/>
                    <Image source={{uri: imageArray[2].links?.url}} style={styles.halfImage}/>
                </View>
                <View style={styles.modal}>
                    <Text style={styles.modalText}
                    >{'Browse all NTFs\nfrom this collection'}</Text>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => Linking.openURL(collUrl)
                            .catch(err =>
                            console.error('An error occured', err))
                            }
                        >
                        <Text style={styles.buttonText}
                        >{'Browse collection'}
                        </Text>
                    </TouchableOpacity>
                </View>
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

const styles = StyleSheet.create({
    halfImage: {
        width: 195,
        height: 195
      },
      modal: {
        backgroundColor: 'rgba(5,7,27,0.72)',
        position:'absolute',
        zIndex:1,
        width: '100%',
        height: 390,
        alignItems: 'center',
        justifyContent: 'center'
    },
    modalText: {
        color:'#FFFFFF',
        //fontFamily: 'Popins',
        fontWeight: '600',
        fontSize: 32,
        lineHeight: 36.4,
        textAlign: 'center'
    },
    button: {
        borderWidth: 1.5,
        borderRadius: 8,
        borderColor: '#1FECFC',
        paddingTop: 12,
        paddingBottom: 11,
        paddingLeft: 16,
        paddingRight: 16,
        marginTop: 12
    },
    buttonText: {
        color:'#FFFFFF',
        //fontFamily: 'Popins',
        fontWeight: '600',
        fontSize: 14,
        lineHeight: 16.8,
        textAlign: 'center'
    }
})

export default LastSlide;