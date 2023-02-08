import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'

const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
        <View style={styles.imgholder}>
            <Image
                source={require('../../assets/profile.png')}
                style={{width: 241 , height: 258, marginTop:50,  }}
                resizeMode= {'contain'}
            />
        </View>
        <View style={styles.title}>
        <Text style={styles.titletext}>Sign in to Verify</Text>
        <Text style={styles.subtitletext}>Experience The User Journey Similar Toour Sdk’s Flow</Text>
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
        <View style={styles.BtnContainer}>
            <TouchableOpacity style={styles.loginBtn} onPress={()=>navigation.navigate("IdentityProf")} >
                <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
            <View style={styles.optionContainer}>
                <Text style={styles.orSeprator}>______________________</Text>
                <Text style={styles.orText}>Or</Text>
                <Text style={styles.orSeprator}>______________________</Text>
            </View>
            
            <TouchableOpacity  style={styles.registerBtn} onPress={()=>navigation.navigate("Register")} >
                <Text style={styles.registerText}>Register</Text>
            </TouchableOpacity>
        </View>
      
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#FFFFFF',
        padding:20,
    },
    imgholder:{
        alignItems: 'center',
        marginBottom:40,
    },
    title:{
        marginBottom:20,
        
    },
    titletext:{
        fontSize:24,
        fontFamily:'Poppins',
        color: '#5461FA',
        fontWeight:700,
        marginBottom:10,
    },
    subtitletext:{
        fontSize:16,
        fontFamily:'Poppins',
        color: '#000000',
        fontWeight:700,
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
      BtnContainer:{    
        alignItems: 'center',
      },
      loginBtn:{
        width:"70%",
        height:50,
        backgroundColor:'#5461FA',
        borderRadius:30,
        justifyContent:"center",
      },
      loginText:{
        textAlign:'center',
        fontFamily: 'Poppins',
        fontSize:16,
        color: '#FFFFFF',
        fontWeight:700,
      },
      registerBtn:{
        width:"70%",
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
      orText:{
        textAlign:'center',
        fontFamily: 'Poppins',
        fontSize:18,
        color: '#000000',
        marginEnd:10,
        marginStart:10,
        fontWeight:500,
      },
      optionContainer:{
        flexDirection:'row',
        marginBottom:15,
        marginTop:15,
      },
      orSeprator:{
        
        color:'#D6D6D6',
      }
})