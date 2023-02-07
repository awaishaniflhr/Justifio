import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const BillVerification = () => {
  return (
    <View style={styles.Container}>
        <TouchableOpacity style={styles.billPlacHolder} >
            <Image
                source={require('../../assets/bill.png')}
                style={{width: 200, height: 280, backgroundColor: '#FFFFFF' }}
                resizeMode= {'contain'}
            />
        </TouchableOpacity>
        <Text style={styles.titetext}>Utility Bills Verification</Text>
        <Text style={styles.descriptiontext}>Now place your phone directly on top of your DRIVING LICENCE so we can scan securely</Text>
        <TouchableOpacity style={styles.getBtn} >
            <Text style={styles.getText}>Get Started</Text>
        </TouchableOpacity>
    </View>
  )
}

export default BillVerification

const styles = StyleSheet.create({
    Container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding:20,
        backgroundColor: '#FFFFFF',
        
    },
    billPlacHolder:{
        padding:20,
        backgroundColor:'#FFFFFF',
    },
    titetext:{
        fontSize:22,
        fontFamily:'Poppins',
        fontWeight:700,
        marginTop:30,
        color: '#5461FA', 
        textAlign:'center',

    },
    descriptiontext:{
        fontSize:16,
        fontFamily:'Poppins',
        fontWeight:500,
        margin:30,
        color: '#000000', 
        textAlign:'center',

    },
    getBtn:{
        width:150,
        height:46,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor:'#5461FA',
        borderRadius:8,
        
    },
    getText:{
        fontSize:16,
        fontFamily:'Poppins',
        fontWeight:700,
        color: '#FFF', 
        textAlign:'center',
    }
})