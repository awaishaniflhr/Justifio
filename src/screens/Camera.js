import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Pressable, Modal, Alert } from 'react-native'

import React, {useState, useEffect} from 'react';



const Camera = ({navigation,route}) => {
    const {img,selected} = route.params;
    const [modalVisible, setModalVisible] = useState(true);
    // useEffect(() => { const timer = setTimeout(()=>{ navigation.replace('Camera')}, 5000);}, []);

  return (
    <View style={styles.Container}>

        <View style={styles.RegisterButton}>
            <TouchableOpacity
                style={[styles.button, styles.registerBtn]}
                onPress={() => setModalVisible(true)}>
                <Text style={styles.registerText}>Camera Screen</Text>
            </TouchableOpacity>

        </View>
      
        {/*///////////////////////////////////////// modal start here /////////////////////////////////////////*/}

        <Modal
        
        
            animationType="slide"
            transparent={true}
            visible={modalVisible}

            
            onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
            }}>
                
                <View style={{flex:1, justifyContent:'center', alignItems: 'center',}}>
                    <View style={{justifyContent:'center', alignItems: 'center', }}>

                        
                        <View style={styles.modalView}>

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
                                        source={img} 
                                        style={{width: 208, height: 296, marginBottom: 30, marginTop:40}}
                                        resizeMode= {'contain'}
                                    />
                                </TouchableOpacity>
                                <Text style={styles.title}>{selected} Verification</Text>
                                <Text style={styles.titleText}>Now place your passport in front of camera within the frame </Text>


                                <View style={styles.buttons}>
                                    <TouchableOpacity style={styles.getstartedbtn} onPress={()=>navigation.navigate("PictureModal")}>
                                        <Text style={styles.getstartedbtntext}>Get Started</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
        </Modal>



        {/*///////////////////////////////////////// Modal end here /////////////////////////////////////////*/}
        

    </View>
    
  )
}

export default Camera

const styles = StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor:'#FFFFFF',
        justifyContent: 'center'
    },
    titleText:{
        color: '#5461FA',
        fontSize:24,
        fontFamily: 'Poppins',
        marginBottom: 30,
        fontWeight:700,
        
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
        alignItems: 'flex-end',
        padding:20,
        flex:1,

        
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
    getstartedbtn:{
        borderWidth:1,
        borderColor: '#5461FA',
        borderRadius:8,
        backgroundColor: '#5461FA',
        justifyContent: 'center',
        width:150,
        height:46,
    },
    getstartedbtntext:{
        fontSize:16,
        fontFamily:'Poppins',
        color: '#FFFFFF',   
        textAlign: 'center',
        fontWeight: 600, 
    },

    // Modal Classes End Here

})