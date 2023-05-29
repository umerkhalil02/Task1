import * as React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

const BuyNow = ({data,id}) => {
    const item = data.find(item => item.id===id)
    return (
        <View style = {styles.container}>
            <Text style = {styles.price}>
                {item.price}
            </Text>
            <Text style = {styles.buy}>
                BUY ENTRY NOW
            </Text>
        </View>
    )
};
const styles = StyleSheet.create({
    container:{
        borderBottomLeftRadius:40,
        borderBottomRightRadius:40,
        paddingLeft:20,
        paddingRight:20,
        backgroundColor:'black',
        width:Dimensions.get('screen').width*.98,
        height:Dimensions.get('screen').height*.05,
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row'
    },
    price:{
        color:'white',
        fontSize:Dimensions.get('screen').width*.04,
        // marginRight:20,
        // textAlign:'left',
    },
    buy:{
        color:'white',
        fontSize:Dimensions.get('screen').width*.04,
        textAlign:'right'
    }
});
export default BuyNow;