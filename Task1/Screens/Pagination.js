import * as React from 'react';
import { StyleSheet, View, Animated } from 'react-native';

const Pagination = ({data,id}) => {
    return (
        <View style = {styles.container} >
            {
                data.map((_, idx) => {
                    {console.log(idx)}
                    return (
                        <View 
                        key = {idx.toString()}
                        style = {[styles.dot,id===idx && styles.active]} 
                        />
                    )
                })
            }
        </View>
    )
}


const styles = StyleSheet.create({
    dot:{
        width:25,
        height:2,
        borderRadius:6,
        backgroundColor:'grey',
        marginHorizontal:3
    },
    active:{
        backgroundColor:'#BE9F56',
    },
    container:{
        flexDirection:'row',
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        top:-10
    }
});
export default Pagination;