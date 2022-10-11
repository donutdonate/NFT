import React from 'react';
import { View } from 'react-native';
import LastSlide from './components/Slides/LastSlide';
import Slide from './components/Slides/Slide'
import Swiper from 'react-native-swiper'
import { ImageArrType } from '../../utils/interfaces';
import Dot from './components/Dot';

const NFTSwiper = ({
  imageArray,
  onChange,
  collUrl,
  swiperRef
}:ImageArrType) => {
  
if (imageArray.length !== 0)
{
    return (
        <Swiper
            ref={swiperRef}
            index={0}
            onIndexChanged={(index) => onChange(index)}
            loop={false}
            dot={<Dot active={false}/>}
            activeDot={<Dot active={true}/>}
        >

          <Slide links={imageArray[0].links} />
          <Slide links={imageArray[1].links} />
          <Slide links={imageArray[2].links} />
          <Slide links={imageArray[3].links} />
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

export default NFTSwiper;