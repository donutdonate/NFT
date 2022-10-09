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
 import {ActivityIndicator, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
 
 import { getCollections } from './src/api/getCollections'
 import SwiperScreen from './src/components/SwiperScreen/index'
 import Header from './src/components/Header';
 import Description from './src/components/Description';
 import LinearGradient from 'react-native-linear-gradient';

const buttonText = 'Browse collection'

 const App = () => {
   const [collections, setCollections] = useState([]);
   const [index, setIndex] = useState(0);
   const [images, setImages] = useState([]);
   const [price, setPrice] = useState([]);
   const [currentIndex, setCurrentIndex] = useState(0);

   const loadCollections = async () => {
     const temp = await getCollections();
     setCollections(temp);
   }
   interface priceType {
    eth:number,
    usd:number
   }

   interface urlArray {
    links: {
      url:string,
      link:string
    },
   }

   const sortCollection = () => {
    let imageArray:urlArray[] = [];
    let priceArray:priceType[] = [];
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
    //console.log(images, index);
   }
   
 useEffect(() => {
  loadCollections();
 }, []);
 useEffect(() => {
  sortCollection();
 }, [collections, index]);
//  console.log(collections)

//  if (collections.length !== 0 && images.length === 0)
//   sortCollection();
 if (!collections || collections.length === 0)
{
  return (
    <SafeAreaView style={[styles.container, {alignItems:'center', justifyContent: 'center'}]}>
      <ActivityIndicator size="large" color="#1FECFC" />
    </SafeAreaView>
  );
}
else {
  // console.log(images)
   return (
    <SafeAreaView style={styles.container}>
          <ScrollView>
        <StatusBar
        backgroundColor='#05071B'
        barStyle='light-content'
        showHideTransition='slide'
        hidden={false} />
        <Header
          name={collections[index]?.creator_name}
          logo={collections[index]?.creator_pic}
          price={price}
          index={currentIndex}
          />
        <View style={{height: 390}}>
          <SwiperScreen 
            imageArray={images}
            onChange={setCurrentIndex}
            collUrl={collections[index]?.collection_url}/>
        </View>
        <View style={{flex:1, backgroundColor: 'black'}}>
          <Description 
            text={collections[index]?.description}
          />
          <TouchableOpacity style={styles.button} onPress={() => setIndex(index + 1)}>
            <Text style={styles.textButton}>{buttonText}</Text>
          </TouchableOpacity>
        </View>
        
          <LinearGradient
          colors={['rgba(31, 236, 252, 1)', 'rgba(31, 236, 252, 0)']}
          style={styles.linearGradient}
          >
            <Text style={styles.gradient}>
              {'Scroll for next gem'}
            </Text>
          </LinearGradient>
        
        </ScrollView>
    </SafeAreaView>
   );
}
 };
 
 const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#05071B',
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  gradient: {
    height: 71,
    textAlign: 'center',
    paddingTop: 18,
    //fontFamily: 'Poppins',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 18.2,
    color: '#FFFFFF'
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  button:{
    borderWidth: 1.5,
    borderColor: '#1FECFC',
    marginLeft: 12,
    marginRight: 12,
    borderRadius: 8,
    paddingTop: 12,
    paddingBottom: 11,
    alignItems: 'center',
    marginBottom: 72
  },
  textButton:{
    //fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 16.8,
    color: '#FFFFFF'
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
 