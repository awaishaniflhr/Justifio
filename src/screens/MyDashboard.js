import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, onPress} from 'react-native'
import {React,useState} from 'react'

const MyDashboard = ({navigation}) => {
const [ selected, setSelected ] = useState ("Passport")


  return (
    <View style={styles.containerMyDashboard}>
        <TouchableOpacity style={styles.navmenu}>
            <Image
                source={require('../../assets/menu.png')}
                style={{width: 25, height: 30, }}
                resizeMode= {'contain'}
            />
        </TouchableOpacity>
        <View style={styles.componentMyDashboard}>
            
            <Image
                
                source={require('../../assets/Component3.png')}
                style={{width: 340, marginTop:14,   }}
               
            />
        </View>
        <View style={styles.stepNavigation}>
            <Image    
                source={require('../../assets/step1.png')}
                style={{   }}
                resizeMode= {'contain'}  
            />
            <Image    
                source={require('../../assets/stepSeprationbar.png')}
                style={{  }}
                resizeMode= {'contain'}  
            />
            <Image    
                source={require('../../assets/step2.png')}
                style={{   }}
                resizeMode= {'contain'}  
            />
            <Image    
                source={require('../../assets/stepSeprationbar.png')}
                style={{   }}
                resizeMode= {'contain'}  
            />
            <Image    
                source={require('../../assets/step3.png')}
                style={{    }}
                resizeMode= {'contain'}  
            />
        </View>
        <Text style={styles.verifyTextMyDb}>Verify Your Identity</Text>
        <View style={styles.verifyBtn}>
            <TouchableOpacity
            onPress={()=> setSelected('Passport')}
            style={[styles.verifyModBill,{backgroundColor:selected === "Passport" ? '#5461FA' : '#D9D9D9'}]}>
                <Text style={[styles.verifymodtextBill, {}]}>Passport</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() =>setSelected("Driving Licence")
            }
            style={[styles.verifyModFace,{backgroundColor:selected === "Driving Licence" ? '#5461FA' : '#D9D9D9', color:selected === "Driving Licence" ? '#000000' : '#FFFFFF'}]}>
                <Text style={styles.verifymodtextBill}>Driving Licence</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.uploadbill}>
        <TouchableOpacity style={styles.DrivingContainer} onPress={() => navigation.navigate('Camera',{
            img:selected == 'Passport' ? require('../../assets/passportPicker.png') : require('../../assets/licencePicker.png'),
            
        })}> 
            <View style={styles.uploadImg}>
                <Text style={styles.uploadingTextPassport}>Upload an Image of Your {selected}.</Text>
                <Text style={styles.verifyText}>We Accept Only Clear Images.</Text>
            </View>
            <Image
                source={require('../../assets/passportPicker.png')}
                style={{width: 48, height: 56, marginTop:5, marginEnd: 5,  }}
                resizeMode= {'contain'}
            />
            </TouchableOpacity>

        </View>
        
    </View>
  )
}

export default MyDashboard

const styles = StyleSheet.create({


    containerMyDashboard:{
        flex: 1,
        paddingStart:20,
        paddingEnd:20,
        paddingTop:40,
        backgroundColor: '#FFF',
    },
    componentMyDashboard:{
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 50,
        marginTop:50,
        Image: ""

    },
    textcomponentMyDb:{
        color: '#000000',
        position: 'relative',
        
    },
    stepNavigation:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom:30,
    },
    verifyTextMyDb:{
        fontSize:18,
        fontFamily:'Poppins',
        fontWeight:700,
        color: '#000000',
        marginBottom:30,
    },
    verifyBtn:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom:20,
        
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
        fontWeight:700,
        color: '#989898',
    },
    verifyModFace:{
        backgroundColor: '#D9D9D9',
        padding: 15,
        justifyContent: 'center',
        borderRadius:8,
        alignItems: 'center',
        flex:0.48,
        
    },
    DrivingContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        borderWidth:1,
        borderStyle: 'dashed',
        borderColor: '#5461FA',       
        padding:15,
    },
    uploadingText:{
        fontSize:16,
        fontFamily:'Poppins',
        fontWeight:700,
        color: '#000000',  
    },
    uploadingTextPassport:{
        fontSize:16,
        fontFamily:'Poppins',
        fontWeight:700,
        color: '#000000', 
        width:"95%",
    },
    uploadingTextBill:{
        fontSize:16,
        fontFamily:'Poppins',
        fontWeight:700,
        color: '#000000', 
        width:"90%",
    },
    verifyText:{
        fontSize:14,
        fontFamily:'Poppins',
        fontWeight:500,
        marginTop:10,
        color: '#000000',   
    },
    passportContainer:{
        borderWidth:1,
        borderStyle: 'dashed',
        borderColor: '#5461FA',       
        padding:15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom:20,
    },
})