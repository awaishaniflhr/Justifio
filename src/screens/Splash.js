import { StyleSheet, Text, View, Image} from 'react-native'
import React, { useEffect } from 'react'

const Splash = ({navigation}) => {
  useEffect(() => { const timer = setTimeout(()=>{ navigation.replace('Login')}, 5000);}, []);
  return (
    <View style={styles.container}>
        <Image
            source={require('../../assets/logo.png')}
            style={{width: 282, height: 121, marginTop:14,  }}
            resizeMode= {'contain'}
        />
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#5461FA',
        alignItems: 'center',
        justifyContent: 'center',
    }
})