import React from 'react';
import { StyleSheet, View } from 'react-native';
import Swiper from 'react-native-web-swiper';
import LastSlide from './LastSlide';
import Slide from './Slide'

const ActiveDot = () => {
    return <View style={styles.activeDot}></View>
}

const InActiveDot = () => {
    return <View style={styles.inActiveDot}></View>
}

interface imageArrType {
  imageArray:string[],
  onChange(index:number):void
}

const NFTSwiper = ({imageArray, onChange}:imageArrType) => {

if (imageArray.length !== 0)
{
    return (
        <Swiper
            controlsProps={{
                dotActiveStyle: { backgroundColor: '#FFFFFF' },
                DotComponent: ({ index, isActive }) => {
                    if (isActive) {
                      onChange(index);
                      return <ActiveDot />
                    }
                      return <InActiveDot />;
                  }
            }}
        >

          <Slide image={imageArray[0]} />
          <Slide image={imageArray[1]} />
          <Slide image={imageArray[2]} />
          <Slide image={imageArray[3]} />
          <LastSlide imageArray={imageArray}/>

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