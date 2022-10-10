import React from 'react';
import { StyleSheet, View } from 'react-native';
//import Swiper from 'react-native-web-swiper';
import LastSlide from './LastSlide';
import Slide from './Slide'
import Swiper from 'react-native-swiper'

interface urlArray {
  links: {
    url:string,
    link:string
  },
 }

interface imageArrType {
  imageArray:urlArray[],
  onChange(index:number):void,
  collUrl:string,
  swiperRef: React.MutableRefObject<null>
 }

const NFTSwiper = ({imageArray, onChange, collUrl, swiperRef}:imageArrType) => {
  
if (imageArray.length !== 0)
{
    return (
        <Swiper
            ref={swiperRef}
            dot={<View style={styles.inActiveDot}></View>}
            activeDot={<View style={styles.activeDot}></View>}
            index={0}
            onIndexChanged={(index) => onChange(index)}
            loop={false}
        >

          <Slide image={imageArray[0].links} />
          <Slide image={imageArray[1].links} />
          <Slide image={imageArray[2].links} />
          <Slide image={imageArray[3].links} />
          <LastSlide imageArray={imageArray} collUrl={collUrl}/>

        </Swiper>
    );
}
else {
  return(
    <View></View>
  )
}
}
const styles = StyleSheet.create({
    activeDot: {
        width:12,
        height:12,
        backgroundColor:'#FFFFFF',
        borderRadius:6,
        margin: 3
    },
    inActiveDot: {
        width:12,
        height:12,
        borderRadius:6,
        borderWidth:2,
        borderColor:'#F3F3F4',
        margin: 3
    }
  });

export default NFTSwiper;