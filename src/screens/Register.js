import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Pressable, Modal, Alert } from 'react-native'

import React, {useState} from 'react';
import OTPInputView from '@twotalltotems/react-native-otp-input'

const Register = ({navigation}) => {
    const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.Container}>
      <Text style={styles.titleText}>Register</Text>
        <View style={styles.inputFields}>
            <View style={styles.inputView}>
                <TextInput style={styles.inputText}
                placeholder="First Name" 
                placeholderTextColor="#9D9D9D"/>
            </View>
            <View style={styles.inputView}>
                <TextInput style={styles.inputText}
                placeholder="Last Name" 
                placeholderTextColor="#9D9D9D"/>
            </View>
        </View>
        <View style={styles.inputViewEmailOrignal}>
                <TouchableOpacity>
                    <Image
                        source={require('../../assets/email.png')}
                        style={{width: 20, height: 20, marginTop:14,  }}
                        resizeMode= {'contain'}
                    />
                </TouchableOpacity>
                <Image
                    source={require('../../assets/seprator.png')}
                    style={{width: 10, height: 30, marginStart:12, marginEnd:5, marginTop:10, }}
                    resizeMode= {'contain'}
                />
                <TextInput style={styles.inputText}
                placeholder="Email" 
                placeholderTextColor="#9D9D9D"/>
        </View>
        <View style={styles.inputViewEmail}>
                <TextInput style={styles.inputText}
                placeholder="Address" 
                placeholderTextColor="#9D9D9D"/>
        </View>
        <View style={styles.inputViewEmail}>
                <TextInput style={styles.inputText}
                placeholder="Apt, Suite Etc. ( Optional)" 
                placeholderTextColor="#9D9D9D"/>
        </View>
        <View style={styles.inputFields}>
            <View style={styles.inputView}>
                <TextInput style={styles.inputText}
                placeholder="City" 
                placeholderTextColor="#9D9D9D"/>
            </View>
            <View style={styles.inputView}>
                <TextInput style={styles.inputText}
                placeholder="State" 
                placeholderTextColor="#9D9D9D"/>
            </View>
        </View>
        <View style={styles.inputFields}>
            <View style={styles.inputView}>
                <TextInput style={styles.inputText}
                placeholder="Zip/ Postcode" 
                placeholderTextColor="#9D9D9D"/>
            </View>
            <View style={styles.inputView}>
                <TextInput style={styles.inputText}
                placeholder="Country" 
                placeholderTextColor="#9D9D9D"/>
            </View>
        </View>
        <View style={styles.inputViewEmail}>
                <TextInput style={styles.inputText}
                placeholder="Your Phone Number" 
                placeholderTextColor="#9D9D9D"/>
        </View>
        <View style={styles.inputViewEmailOrignal}>
                <TouchableOpacity>
                    <Image
                        source={require('../../assets/calander.png')}
                        style={{width: 20, height: 20, marginTop:14,  }}
                        resizeMode= {'contain'}
                    />
                </TouchableOpacity>
                <Image
                    source={require('../../assets/seprator.png')}
                    style={{width: 10, height: 30, marginStart:12, marginEnd:5, marginTop:10, }}
                    resizeMode= {'contain'}
                />
                <TextInput style={styles.inputText}
                placeholder="Date of Birth" 
                placeholderTextColor="#9D9D9D"/>
        </View>
        <View style={styles.inputViewEmailOrignal}>
                <TouchableOpacity>
                <Image
                    source={require('../../assets/password.png')}
                    style={{width: 20, height: 20, marginTop:14,  }}
                    resizeMode= {'contain'}
                />
                </TouchableOpacity>
                <Image
                    source={require('../../assets/seprator.png')}
                    style={{width: 10, height: 30, marginStart:12, marginEnd:5, marginTop:10, }}
                    resizeMode= {'contain'}
                />
                <TextInput style={styles.inputText}
                placeholder="Password" 
                placeholderTextColor="#9D9D9D"/>
        </View>
        <View style={styles.inputViewEmailOrignal}>
                <TouchableOpacity>
                <Image
                    source={require('../../assets/password.png')}
                    style={{width: 20, height: 20, marginTop:14,  }}
                    resizeMode= {'contain'}
                />
                </TouchableOpacity>
                <Image
                    source={require('../../assets/seprator.png')}
                    style={{width: 10, height: 30, marginStart:12, marginEnd:5, marginTop:10, }}
                    resizeMode= {'contain'}
                />
                <TextInput style={styles.inputText}
                placeholder="Confirm Password" 
                placeholderTextColor="#9D9D9D"/>
        </View>
        <View style={styles.RegisterButton}>
            <Pressable
                style={[styles.button, styles.registerBtn]}
                onPress={() => setModalVisible(true)}>
                <Text style={styles.registerText}>Register</Text>
            </Pressable>
            {/* <TouchableOpacity style={styles.registerBtn} >
                <Text style={styles.registerText}>Register</Text>
            </TouchableOpacity> */}
        </View>

        {/*////////////////////////////////////////////////// modal start here ////////////////////////////////////////////////// */}

        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            
            onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
            }}>
                <View style={{flex:1, justifyContent:'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.7)'}}>
                    <View style={{justifyContent:'center', alignItems: 'center', }}>
                        
                        <View style={styles.modalView}>
                            <View style={styles.subContainer}>
                                <Text style={styles.title}>Please check your email</Text>
                                <Text style={styles.titleText}>We've Sent a Code to sherry.webevis@gmail.com</Text>
                                <View style={styles.otpViewcontainer}>
                                    <OTPInputView
                                        style={{width: '90%', height: 20}}
                                        pinCount={6}
                                        autoFocusOnLoad={false}
                                        codeInputFieldStyle={styles.underlineStyleBase}
                                        codeInputHighlightStyle={styles.underlineStyleHighLighted}
                                        onCodeFilled = {code => {console.log(`Code is ${code}, you are good to go!`)}}
                                    />
                                </View>
                                <TouchableOpacity>
                                    <Text style={styles.resendText}>Didn't Get a Code? Click to Resend.</Text>
                                </TouchableOpacity>
                                <View style={styles.buttons}>
                                    <TouchableOpacity
                                        style={[styles.button, styles.cancelBtn]}
                                        onPress={() => setModalVisible(!modalVisible)}>
                                        <Text style={styles.cancelBtntext}>Cancel</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.verifyBtn}
                                    onPress={()=>navigation.navigate("MyDashboard")} >
                                        <Text style={styles.verifyBtntext}>Verify</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
            </View>
        </Modal>



        {/* Modal end here */}
        

    </View>
    
  )
}

export default Register

const styles = StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor:'#FFFFFF',
        padding:20,
    },
    titleText:{
        color: '#5461FA',
        fontSize:24,
        fontFamily: 'Poppins',
        marginBottom: 30,
        fontWeight:700,
        
    },
    centeredView:{
        
    },
    inputView:{
        width:"48%",
        backgroundColor:'#FFFFFF',
        borderRadius:25,
        height:50,
        marginBottom:15,
        borderRadius:25,
        borderWidth:1,
        borderColor:'#5461FA',
        justifyContent:"center",
        padding:20
      },
      inputViewEmailOrignal:{
        width:"100%",
        backgroundColor:'#FFFFFF',
        borderRadius:25,
        flexDirection: 'row',
        height:50,
        marginBottom:15,
        borderRadius:25,
        borderWidth:1,
        borderColor:'#5461FA',
        paddingStart:30,
      },
      inputViewEmail:{
        width:"100%",
        backgroundColor:'#FFFFFF',
        borderRadius:25,
        height:50,
        marginBottom:15,
        borderRadius:25,
        borderWidth:1,
        borderColor:'#5461FA',
        justifyContent:"center",
        padding:20
      },
      inputText:{
        height:50,
        width:"100%",
        color:"#5461FA",
        fontFamily: 'Poppins',
      },
      inputFields:{
        flexDirection:"row",
        justifyContent: 'space-between',
        
      },
      RegisterButton:{    
        alignItems: 'center',
      },
      registerBtn:{
        width:"80%",
        height:50,
        backgroundColor:'#5461FA',
        borderRadius:30,
        justifyContent:"center",
      },
      registerText:{
        textAlign:'center',
        fontFamily: 'Poppins',
        fontSize:16,
        color: '#FFFFFF',
        fontWeight:700,
      },
    //   Modal Classes Start Here

    modalView: {
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        position: 'absolute',
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
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
        color: '#000000',
      },
      underlineStyleBase: {
        fontSize:16,
        fontFamily:'Poppins',
        color: '#5461FA',

      },
    subContainer:{
        backgroundColor:'white',
        width:'100%',
        paddingTop:30,
        paddingBottom:30,
        height: '100%',
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
        width:150,
        height:46,
    },
    verifyBtntext:{
        fontSize:16,
        fontFamily:'Poppins',
        color: '#FFFFFF',   
        textAlign: 'center',
        fontWeight: 600, 
    },

    // Modal Classes End Here

})