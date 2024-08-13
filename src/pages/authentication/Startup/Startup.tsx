//import liraries
import React, {Component, useContext, useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Animated,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import StartupItem from './StartupItem';
import Pagination from './Pagination';
import BtnBlock from '../../../compoents/Input/Button';
import Button from '../../../compoents/Input/Button';
import { useNavigation } from '@react-navigation/native';
import StorageHelper from '../../../helpers/StorageHelper';
import { AuthContext } from '../../../context/AuthContext';
// create a component
const Slides: Array<StartupItemType> = [
  {
    title: 'Gain total control of your money',
    description: 'Become your own money manager and make every paisa count',
    image: require('../../../assets/get-started/image-01.jpg'),
  },
  {
    title: 'Know where your money goes',
    description:
      'Track your transaction easily,with categories and financial report',
    image: require('../../../assets/get-started/image-02.jpg'),
  },
  {
    title: 'Planning ahead',
    description: 'Setup your buget for each category so you in control',
    image: require('../../../assets/get-started/image-03.jpg'),
  },
];


const {width, height} = Dimensions.get('screen');

const Startup = () => {
  const {setShowStartup,showStartup}:any = useContext(AuthContext);
  const [index, setIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();

  const handleOnScroll = (event: any) => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {
        useNativeDriver: false,
      },
    )(event);
  };

  const handleOnViewableItemsChanged = useRef(({viewableItems}: any) => {
    // console.log('viewableItems', viewableItems);
    if(viewableItems && viewableItems.length > 0){
      setIndex(viewableItems[0].index);
    }
  }).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  return (
    <>
    
    <View style={styles.container}>
      <FlatList
        data={Slides}
        renderItem={({item}) => <StartupItem item={item} />}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={handleOnScroll}
        onViewableItemsChanged={handleOnViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        />
      <Pagination data={Slides} scrollX={scrollX} index={index} />
     
    </View>
    <View style={styles.btnContainer}>
    <Button width={width-30} onPress={async (e)=>{
        await StorageHelper.save('showStartup',false);
        setShowStartup(false);
    }}>Get Started </Button>
    <Text>{showStartup ? 'show' : 'not show'}</Text>
    </View>
        </>
  );
};

//make this component available to the app
export default Startup;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex:1
  },
  btnContainer:{
    backgroundColor:'#fff',
    display:'flex',
    alignItems:'center',
    paddingBottom:30
  },

});
