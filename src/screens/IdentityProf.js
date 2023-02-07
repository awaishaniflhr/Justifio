import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const IdentityProf = () => {
  return (
    <View style={styles.container}>
        <View style={styles.navmenu}>
            <Image
                    source={require('../../assets/menu.png')}
                    style={{width: 25, height: 30, }}
                    resizeMode= {'contain'}
                />
        </View>
        <View style={styles.titleContainer}>
            <Text style = {styles.tileText}>Prof of Identity</Text>
            <Text style = {styles.subTitle}>Select a document to start the verification process.</Text>
        </View>
        <View style={styles.verifyBtn}>
            <TouchableOpacity style={styles.verifyModFace}>
                <Text style={styles.verifymodtext}>Face Verify</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.verifyModBill}>
                <Text style={styles.verifymodtextBill}>Utility Bills</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.imageContainer}>
            <View style={styles.uploadImg}>
                <Text style={styles.uploadingText}>Upload an image of your utility bills.</Text>
                <Text style={styles.verifyText}>(To verify the authenticity of your ID)</Text>
            </View>
            <TouchableOpacity style={styles.uploadbill}>
                                <Image
                                source={require('../../assets/invoice1.png')}
                                style={{width: 70, height: 70, }}
                                resizeMode= {'contain'}
                            />
            </TouchableOpacity>

        </View>

      
    </View>
  )
}

export default IdentityProf

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingStart:20,
        paddingEnd:20,
        paddingTop:40,
        backgroundColor: 'white',
    },
    navmenu:{

    },
    titleContainer:{
        marginTop:20,
    },
    tileText:{
        color:'#5461FA',
        fontSize:25,
        fontFamily:'Poppins',
        marginBottom:10,
        fontWeight:700,
    },
    subTitle:{
        color:'#000',
        fontSize:14,
        fontFamily:'Poppins',
        fontWeight:500,
    },
    verifyBtn:{
        flexDirection: 'row',
        marginTop: 30,
        justifyContent: 'space-between',
        
    },
    verifyModFace:{
        backgroundColor: '#D9D9D9',
        padding: 15,
        justifyContent: 'center',
        borderRadius:8,
        alignItems: 'center',
        flex:0.48,
        
    },
    verifyModBill:{
        backgroundColor: '#5461FA',
        padding: 15,
        justifyContent: 'center',
        borderRadius:8,
        alignItems: 'center',
        flex:0.48,
        
    },
    verifymodtext:{
        fontSize:14,
        fontFamily:'Poppins',
        fontWeight:800,
        color: '#989898',
    },
    verifymodtextBill:{
        fontSize:14,
        fontFamily:'Poppins',
        fontWeight:800,
        color: '#FFFFFF',
    },
    uploadImg:{
        
    },
    uploadingText:{
        fontSize:14,
        fontFamily:'Poppins',
        fontWeight:700,
        color: '#000000',  
    },
    verifyText:{
        fontSize:14,
        fontFamily:'Poppins',
        fontWeight:500,
        marginTop:10,
        color: '#000000',   
    },
    imageContainer:{
        borderWidth:1,
        borderStyle: 'dashed',
        borderColor: '#5461FA',       
        marginTop:30,
        padding:15,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})