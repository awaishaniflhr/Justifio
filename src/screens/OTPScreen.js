import { StyleSheet, Text, View, TouchableOpacity, Modal, Alert, Pressable} from 'react-native'

import React, {useState} from 'react';
import OTPInputView from '@twotalltotems/react-native-otp-input'

const OTPScreen = (navigation) => {
    const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
        {/* <View style={styles.subContainer}>
        <Text style={styles.title}>Please check your email</Text>
        <Text style={styles.titleText}>We've Sent a Code to sherry.webevis@gmail.com</Text>
        <View style={styles.otpViewcontainer}>
            <OTPInputView
                style={{width: '80%', height: 20}}
                pinCount={6}
                autoFocusOnLoad
                codeInputFieldStyle={styles.underlineStyleBase}
                codeInputHighlightStyle={styles.underlineStyleHighLighted}
                onCodeFilled = {(code => {console.log(`Code is ${code}, you are good to go!`)})}
            />
        </View>
        <Text style={styles.resendText}>Didn't Get a Code? Click to Resend.</Text>
        <View style={styles.buttons}>
            <TouchableOpacity style={styles.cancelBtn}>
            <Text style={styles.cancelBtntext}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.verifyBtn}>
            <Text style={styles.verifyBtntext}>Verify</Text>
            </TouchableOpacity>
        </View>

        </View> */}
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
                
                <View style={styles.modalView}>
                    <View style={styles.subContainer}>
                        <Text style={styles.title}>Please check your email</Text>
                        <Text style={styles.titleText}>We've Sent a Code to sherry.webevis@gmail.com</Text>
                        <View style={styles.otpViewcontainer}>
                            <OTPInputView
                                style={{width: '90%', height: 20}}
                                pinCount={6}
                                autoFocusOnLoad
                                codeInputFieldStyle={styles.underlineStyleBase}
                                codeInputHighlightStyle={styles.underlineStyleHighLighted}
                                onCodeFilled = {(code => {console.log(`Code is ${code}, you are good to go!`)})}
                            />
                        </View>
                        <Text style={styles.resendText}>Didn't Get a Code? Click to Resend.</Text>
                        <View style={styles.buttons}>
                            <TouchableOpacity
                                style={[styles.button, styles.cancelBtn]}
                                onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={styles.cancelBtntext}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.verifyBtn}>
                                <Text style={styles.verifyBtntext}>Verify</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
        <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setModalVisible(true)}>
            <Text style={styles.textStyle}>Show Modal</Text>
        </Pressable>
    </View>
 
  )
}

export default OTPScreen

const styles = StyleSheet.create({
    container:{
        backgroundColor:'lightgrey',
        flex: 1,
        alignItems: 'center',
    },
    modalView: {
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
      },
      buttonOpen: {
        backgroundColor: '#F194FF',
        marginTop:600,
      },
      buttonClose: {
        backgroundColor: '#2196F3',
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
    subContainer:{
        backgroundColor:'white',
        width:'100%',
        height: '70%',
        borderRadius: 35,
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
    resendText:{
        fontSize:14,
        fontFamily:'Poppins',
        color: '#000000',
        marginTop:30,
        textAlign: 'center',
        fontWeight: 700,  
    },    
    borderStyleHighLighted: {
        borderColor: "#03DAC6",
    },
    underlineStyleHighLighted: {
        borderColor: "#5461FA",
    },
    otpViewcontainer:{
        alignItems: 'center',   
    },
    buttons:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop:30,
    },
    cancelBtn:{
        borderWidth:1,
        borderColor: '#5461FA',
        borderRadius:8,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        width:150,
        height:46,
    },
    cancelBtntext:{
        fontSize:16,
        fontFamily:'Poppins',
        color: '#000000',   
        textAlign: 'center',
        fontWeight: 600, 
    },
    verifyBtn:{
        borderWidth:1,
        borderColor: '#5461FA',
        borderRadius:8,
        backgroundColor: '#5461FA',
        justifyContent: 'center',
        width:140,
        height:46,
    },
    verifyBtntext:{
        fontSize:16,
        fontFamily:'Poppins',
        color: '#FFFFFF',   
        textAlign: 'center',
        fontWeight: 600, 
    },
})