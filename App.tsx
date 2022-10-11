/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import React, { useEffect, useState} from 'react';
 import {
  Animated,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View
} from 'react-native';
 
 import { getCollections } from './src/api/getCollections'
 import SwiperScreen from './src/components/SwiperScreen/index'
 import Header from './src/components/Header';
 import Description from './src/components/Description';
 import {PriceType, ImageType} from './src/utils/interfaces' ;
 import OnLoadScreen from './src/components/OnLoadScreen';
import CustomButton from './src/components/CustomButton';
import LinearGradientSwipe from './src/components/LinearGradientSwipe';
import { colors } from './src/utils/colors';

 const App = () => {
   const [collections, setCollections] = useState([]);
   const [index, setIndex] = useState(0);
   const [images, setImages] = useState<ImageType[]>([]);
   const [price, setPrice] = useState<PriceType[]>([]);
   const [currentIndex, setCurrentIndex] = useState(0);

  const scrolling = React.useRef(new Animated.Value(0)).current;
  const height =  scrolling.interpolate({
    inputRange: [13, 50],
    outputRange:['40%', '100%'],
  })
  const marginTop = scrolling.interpolate({
    inputRange: [13, 100],
    outputRange:[72, 33],
  })
  
  const swiperRef = React.useRef(null);
  const scrollRef = React.useRef(null);

   const loadCollections = async () => {
     const temp = await getCollections();
     setCollections(temp);
   }

   const sortCollection = () => {
    let imageArray:ImageType[] = [];
    let priceArray:PriceType[] = [];
    for (let i = 0; i < collections[index]?.items.length; i++)
    {
      const linksPair = {
        links: {
          url: collections[index]?.items[i].image,
          link: collections[index]?.items[i].item_url
        }
      }
      imageArray = [...imageArray, linksPair];
      const pricePair = {
        eth: collections[index]?.items[i].price_eth,
        usd: collections[index]?.items[i].price_usd
      }
      priceArray = [...priceArray, pricePair]
    }
    setImages(imageArray);
    setPrice(priceArray);
   }
   
   const nextCollection = () => {
    setIndex(index + 1);
    swiperRef?.current?.scrollBy(-currentIndex, false);
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
   }

 useEffect(() => {
  loadCollections();
 }, []);
 useEffect(() => {
  sortCollection();
 }, [collections, index]);

 if (!collections || collections.length === 0)
{
  return (
    <OnLoadScreen />
  );
}
else {
   return (
    <SafeAreaView style={styles.container}>
          <Animated.ScrollView
            onScrollEndDrag={nextCollection}
            ref={scrollRef}
            bounces={true}
            scrollEventThrottle={16}
            onScroll={Animated.event(
              [{
                nativeEvent: {
                  contentOffset: {
                    // 
                    y: scrolling,
                  },
                },
              }],
              { useNativeDriver: false },
            )}
          >
        <StatusBar
        backgroundColor='#05071B'
        barStyle='light-content'
        showHideTransition='slide'
        hidden={false} />
        <Header
          name={collections[index]?.creator_name}
          logo={collections[index]?.creator_pic}
          price={price}
          currentIndex={currentIndex}
          />
        <View style={{height: 390}}>
          <SwiperScreen 
            imageArray={images}
            onChange={setCurrentIndex}
            collUrl={collections[index]?.collection_url}
            swiperRef={swiperRef}
            />
        </View>

          <Description 
            text={collections[index]?.description}
          />

            <CustomButton
              collUrl={collections[index]?.collection_url}
              buttonText={'Browse collection'}
            />

          
        <View style={{height: 178}}>
          <Animated.View style={{height, marginTop}}>
              <LinearGradientSwipe/>
          </Animated.View>
          </View>
        </Animated.ScrollView>
    </SafeAreaView>
   );
}
 };
 
 const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: colors.MAINSCREEN_BACKGROUND,
  },
   sectionContainer: {
     marginTop: 32,
     paddingHorizontal: 24,
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
   },
   highlight: {
     fontWeight: '700',
   },
 });
 
 export default App;
 