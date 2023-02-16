import { StyleSheet, Text, View, Image, TouchableOpacity,} from 'react-native'
import {React,useState} from 'react'


import IdentityProf from './IdentityProf';
import PictureModal from './PictureModal';


const Dashboard = ({navigation}) => {

const [ selected, setSelected ] = useState ("Passport")
const [ selected2, setSelected2 ] = useState (null)
const [ selected3, setSelected3 ] = useState (null)




function MyDrawer({navigation}) {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="IdentityProf" component={IdentityProf} />
        <Drawer.Screen name="PictureModal" component={PictureModal} />
      </Drawer.Navigator>
    );
  }


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
            <Text style = {styles.subTitle}>Select a Document To Start The Verification Process.</Text>
            <View style={styles.subtextContainer}>
                <Text style = {styles.subText}>Choose Your Identity Type</Text>
                    <TouchableOpacity >
                        <Image
                            source={require('../../assets/recycle.png')}
                            style={{width: 18, height: 18,  }}
                            resizeMode= {'contain'}
                        />
                    </TouchableOpacity>
            </View>        
        </View>
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
            img:selected == 'Passport' ? require('../../assets/Objects.png') : require('../../assets/licence.png'),
            selected:selected
        })}> 
            <View style={styles.uploadImg}>
                <Text style={styles.uploadingTextPassport}>Upload an Image of Your {selected}.</Text>
                <Text style={styles.verifyText}>We Accept Only Clear Images.</Text>
            </View>
            <Image
                source={require('../../assets/passport.png')}
                style={{width: 40, height: 40, marginTop:5, marginEnd: 5,  }}
                resizeMode= {'contain'}
            />
            </TouchableOpacity>

        </View>
        
        <View style={styles.step2Container}>
        <Text style={styles.step2title}>STEP 2</Text>
        <TouchableOpacity style={styles.selfieimg} onPress={() => navigation.navigate('SelfieCamera')}> 
            
            <View style={styles.selfiContainer}>
                <View style={styles.uploadImg}>
                    <Text style={styles.uploadingText}>Upload a Selfie For Identification.</Text>
                    <Text style={styles.verifyText}>We Accept Only Clear Selfies.</Text>
                </View>
                <Image
                    source={require('../../assets/selfie.png')}
                    style={{width: 35, height: 35, marginTop:10 }}
                    resizeMode= {'contain'}
                />
            </View>
            </TouchableOpacity>
        </View>    
        <View style={styles.step3Container}>
            <Text style={styles.step3title}>STEP 3</Text>
                <View style={styles.verifyBtn}>
                    <TouchableOpacity 
                    onPress={()=> setSelected2('Utility Bills')}
                    style={[styles.verifyModBill,{backgroundColor:selected2 === "Utility Bills" ? '#5461FA' : '#D9D9D9'}]}>
                        <Text style={styles.verifymodtextBill}>Utility Bills</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={()=> setSelected2('Other Document')}
                    style={[styles.verifyModFace,{backgroundColor:selected2 === "Other Document"? '#5461FA' : '#D9D9D9'}]}>
                        <Text style={styles.verifymodtext}>Other Document</Text>
                    </TouchableOpacity>
                </View>
            
            <TouchableOpacity style={styles.uploadbill} onPress={()=>navigation.navigate("CameraLicence")}>
                <View style={styles.billContainer}>
                    <View style={styles.uploadImg}>
                        <Text style={styles.uploadingTextBill}>Upload an Image of Your {selected2}.</Text>
                        <Text style={styles.verifyText}>(To Verify The Authenticity of Your ID)</Text>
                    </View>
                    
                    <Image
                        source={require('../../assets/billHolder.png')}
                        style={{width: 35, height: 35, marginTop:10 }}
                        resizeMode= {'contain'}
                    />  
                </View>
            </TouchableOpacity>
        </View>   
    </View>
  )
}

export default Dashboard

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
        marginBottom: 50,
    },
    subText:{
        color:'#000',
        fontSize:16,
        fontFamily:'Poppins',
        fontWeight:700,
    },
    verifyBtn:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom:20,
        
    },
    verifyModFace:{
        backgroundColor: '#D9D9D9',
        padding: 15,
        justifyContent: 'center',
        borderRadius:8,
        alignItems: 'center',
        flex:0.48,
        
    },
    // selfieimg:{
    //     width: 320,
    //     height:300,
    // },
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
    subtextContainer:{
        flexDirection: 'row',
        marginBottom:20,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingEnd:10,
        
    },
    verifymodtextBill:{
        fontSize:14,
        fontFamily:'Poppins',
        fontWeight:500,
        color: '#FFFFFF',
    },
    uploadImg:{
        
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
    step2Container:{
        marginBottom:20,
       
    },
    step2title:{
        fontSize:14,
        fontFamily:'Poppins',
        fontWeight:700,
        color: '#989898', 
        marginBottom:15,
    },
    selfiContainer:{
        borderWidth:1,
        borderStyle: 'dashed',
        borderColor: '#5461FA',       
        padding:15,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    step3Container:{
  
       
    },
    step3title:{
        fontSize:14,
        fontFamily:'Poppins',
        fontWeight:700,
        color: '#989898', 
        marginBottom:15,
    },
    billContainer:{
        borderWidth:1,
        borderStyle: 'dashed',
        borderColor: '#5461FA',       
        padding:15,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
})