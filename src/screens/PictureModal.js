import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Pressable, Modal, Alert } from 'react-native'

import React, {useState} from 'react';
import OTPInputView from '@twotalltotems/react-native-otp-input'

const PictureModal = ({navigation}) => {
    const [modalVisible, setModalVisible] = useState(true);
  return (
    <View style={styles.Container}>



        <View style={styles.pictureModal}>

<View style={styles.buttons}>
    <TouchableOpacity
        onPress={() => setModalVisible(!modalVisible)}>
        <Image
            source={require('../../assets/close.png')}
            onPress={() => setModalVisible(!modalVisible)}
            style={{width: 14, height: 14, marginTop:100, marginEnd:20, }}
            resizeMode= {'contain'}
        />
    </TouchableOpacity>

</View>

<View style={styles.subContainer}>
    <TouchableOpacity>
        <Image
            source={require('../../assets/Objects.png')}
            style={{width: 208, height: 296, marginBottom: 30, marginTop:40}}
            resizeMode= {'contain'}
        />
    </TouchableOpacity>
    <Text style={styles.title}>Passport</Text>
    <Text style={styles.titleText}>Make sure that all the information on the document is visible and easy to read Document is readable</Text>


    <View style={styles.passportButtons}>
        <TouchableOpacity style={styles.passportbtn} onPress={()=>navigation.navigate("VerificationReport1")}>
            <Text style={styles.passportbtntext}>Document is Readable</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.retakebtn} onPress={()=>navigation.goBack()}>
            <Text style={styles.retakebtntext}>Retake Photo</Text>
        </TouchableOpacity>

    </View>

</View>
</View>
    </View>
    
  )
}

export default PictureModal

const styles = StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor:'#FFFFFF',
        justifyContent: 'center'
    },
    pictureModal: {
        justifyContent: 'center',
        backgroundColor: 'white',
        alignItems: 'flex-end',
        padding:20,
        flex:1, 
      },
    subContainer:{
        backgroundColor:'white',
        width:'100%',
        alignItems: 'center',
        height: '100%',
    },
    title:{
        fontSize:26,
        fontFamily:'Poppins',
        color: '#5461FA',
        textAlign: 'center',
        marginBottom:10,
        fontWeight: 700,
    },
    titleText:{
        fontSize:14,
        fontFamily:'Poppins',
        color: '#000000',
        marginBottom:40,
        textAlign: 'center',
        fontWeight: 500,
    },
    passportButtons:{
        justifyContent: 'center',
        alignItems: 'center',
        width:"100%",
        
    },
    passportbtn:{
        borderWidth:1,
        borderColor: '#5461FA',
        borderRadius:8,
        backgroundColor: '#5461FA',
        justifyContent: 'center',
        marginBottom: 20,
        width: "100%",
        height:46,
    },
    passportbtntext:{
        fontSize:16,
        fontFamily:'Poppins',
        color: '#FFFFFF',   
        textAlign: 'center',
        fontWeight: 600, 
    },
    retakebtn:{
        borderWidth:1,
        borderColor: '#5461FA',
        borderRadius:8,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        width: "100%",
        height:46,
    },
    retakebtntext:{
        fontSize:16,
        fontFamily:'Poppins',
        color: '#989898',   
        textAlign: 'center',
        fontWeight: 600, 
    },

    // Modal Classes End Here

})