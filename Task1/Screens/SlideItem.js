import * as React from 'react';
import { View, ImageBackground, StyleSheet, Image, Dimensions,Text } from 'react-native';
import CountDown from 'react-native-countdown-component'
import CircularProgress from 'react-native-circular-progress-indicator'
const {width, height} = Dimensions.get('screen');
const SlideItem = ({item}) => {
    
    return(
        <View style = {styles.container}>
            <ImageBackground source={item.img} style = {styles.bg_img} resizeMode='stretch'>
                <View style = {{top:-20}}>
                <CountDown 
                size ={30}
                until = {item.until}
                digitStyle = {{
                    backgroundColor: "transparent"
                }}
                digitTxtStyle = {{color:'white'}}
                timeLabelStyle = {{color:'white'}}
                /> 
                </View>
                <View style = {styles.arrow_heart} >
                    <Image  source={require('../assets/arrow.png')}  />
                    <Image  source={require('../assets/heart.png')}  />
                </View>
                
                <View style = {styles.bar} >
                    <CircularProgress 
                    value={25}
                    radius={20}
                    valueSuffix='%'
                    activeStrokeColor='#BE9F56'
                    duration={10000}
                    /> 
                    <Text style = {{color:'white',fontSize:Dimensions.get('screen').width*.04,}}>
                        £5,000,000 GBP
                    </Text>
                    
                    <View>
                        <Text style = {{color:'white',fontSize:Dimensions.get('screen').width*.04,}}>
                            Sotheby's 
                        </Text>
                        <Text style = {{color:'white',fontSize:Dimensions.get('screen').width*.015,}}>
                        INTERNATIONAL REALITY
                    </Text>
                    </View>   
                </View> 
                <View style = {{flexDirection:'row',justifyContent:'space-around',}}>
                <Text style ={styles.text}>
                    SHELTON STREET
                </Text >
                <Text style ={styles.text}>
                    COVENT GARDEN
                </Text>
                <Text style ={styles.text}>
                    LONDON WC2H
                </Text>
                <Text style ={styles.text}>
                    UNITED KINGDOM
                </Text>
            </View>  
            </ImageBackground>
            
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        paddingLeft:5,
        paddingRight:5,
        width:Dimensions.get('window').width,
        height:Dimensions.get('screen').height*.3,
        alignItems:'center',
        justifyContent:'center'
    },
    bg_img:{
        height:'100%',
        width:'100%'
    },
    arrow_heart:{
        flexDirection:'row',
        justifyContent:'flex-end',
        paddingRight:5
    },
    bar:{
        paddingTop:Dimensions.get('screen').height*.05,
        flexDirection:'row',
        justifyContent:'space-around',
    },
    text:{
        color:'white',
        fontSize:Dimensions.get('screen').width*.02,
        
    }
});
export default SlideItem;