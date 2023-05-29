import * as React from 'react';
import { View, StyleSheet, FlatList,Dimensions} from 'react-native';
import SlideItem from './SlideItem'
import Pagination from './Pagination';
import BuyNow from './BuyNow';
import { Text } from 'react-native-svg';

function Cards(){
    const [id, setid ] = React.useState(0)

    const handleOnViewAbleItemsChanged = React.useRef(({viewableItems}) => {
        console.log(viewableItems)
        setid(viewableItems[0].index)
    }).current;
    const viewabilityConfig = React.useRef({
        itemVisiblePercentThreshold: 50,
    }).current

    const data = [
        {
            id:0,
            img:require('../assets/img2.png'),
            until:1000,
            price:'£35.00 GBP'
        },
        {
            id:1,
            img:require('../assets/img1.png'),
            until:1000,
            price:'£25.00 GBP'

        },
        {
            id:2,
            img:require('../assets/img1.png'),
            until:1000,
            price:'£25.00 GBP'
        }
    ]
    return (
        <View style = {styles.main}>
            <FlatList 
            data={data}
            keyExtractor={item => item.id}
            renderItem={({item}) => <SlideItem item = {item} />}
            horizontal
            pagingEnabled
            // snapToAlignment='center'
            style={{marginTop:20,flexGrow:0}}
            onViewableItemsChanged={handleOnViewAbleItemsChanged}
            viewabilityConfig={viewabilityConfig}
            /> 
            <Pagination data = {data} id = {id} />
            <BuyNow data = {data} id = {id} />
            
        </View>
    )
}
const styles = StyleSheet.create({
    main:{
        width:"100%",
        height:"100%",
        justifyContent:'center',
        alignItems:'center',

    },
    card:{
        width:375,
        height:375,
        
    },
    bg_img:{
        height:'100%',
        width:'100%'
    },
    arrow:{
        top:93,
        left:295,
    },
    heart:{
        top:70,
        left:320,
    },
    progressbar:{
        top:250,
        left:20
    },
    
});
export default Cards;