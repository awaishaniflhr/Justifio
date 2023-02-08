import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const Register = () => {
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
            <TouchableOpacity style={styles.registerBtn} >
                <Text style={styles.registerText}>Register</Text>
            </TouchableOpacity>
        </View>

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

})