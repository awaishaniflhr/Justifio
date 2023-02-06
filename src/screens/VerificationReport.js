import { ImageBackground, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import CheckBox from '@react-native-community/checkbox';

const App = () => {

  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  return (
    <View style = {styles.Container}>
      <View style = {styles.headerSection}>
        <Text style = {styles.titleText}>Verification Report</Text>
        <Image
                source={require('../VerificationReport/assets/download.png')}
                style={{width: 25, height: 30, justifyContent: 'flex-end',  }}
                resizeMode= {'contain'}
            />
      </View>
      <View>
      <TouchableOpacity style={styles.acceptedBtn} onPress={()=>navigation.navigate("#")}>
        <Text style={styles.btntxt}>Accepted</Text>
      </TouchableOpacity>

      </View>
      <View style = {styles.docText}>
        <Text style ={styles.docVerifiText}>Document Verification</Text>
      </View>
      <View style = {styles.verifiCheckContainer}>
        <View style = {styles.itemContainer}>
          <View style = {styles.item}>
            <Image
             style = {styles.itemImage}
              source = {require('../VerificationReport/assets/check.png')}
            />
            <Text style = {styles.lableText}>Issue Date</Text>
          </View> 
        </View>  

        <View style = {styles.itemContainer}>
          <View style = {styles.item}>
            <Image
             style = {styles.itemImage}
              source = {require('../VerificationReport/assets/check.png')}
            />
            <Text style = {styles.lableText}>Document No</Text>
          </View> 
        </View>
        <View style = {styles.itemContainer}>
          <View style = {styles.item}>
            <Image
             style = {styles.itemImage}
              source = {require('../VerificationReport/assets/check.png')}
            />
            <Text style = {styles.lableText}>Document Type</Text>
          </View> 
        </View>
        <View style = {styles.itemContainer}>
          <View style = {styles.item}>
            <Image
             style = {styles.itemImage}
              source = {require('../VerificationReport/assets/check.png')}
            />
            <Text style = {styles.lableText}>Visibility</Text>
          </View> 
        </View>
        <View style = {styles.itemContainer}>
          <View style = {styles.item}>
            <Image
             style = {styles.itemImage}
              source = {require('../VerificationReport/assets/check.png')}
            />
            <Text style = {styles.lableText}>DOB</Text>
          </View> 
        </View>
        <View style = {styles.itemContainer}>
          <View style = {styles.item}>
            <Image
             style = {styles.itemImage}
              source = {require('../VerificationReport/assets/check.png')}
            />
            <Text style = {styles.lableText}>Name</Text>
          </View> 
        </View>
        <View style = {styles.itemContainer}>
          <View style = {styles.item}>
            <Image
             style = {styles.itemImage}
              source = {require('../VerificationReport/assets/check.png')}
            />
            <Text style = {styles.lableText}>Must not be expired</Text>
          </View> 
        </View>
        <View style = {styles.itemContainer}>
          <View style = {styles.item}>
            <Image
             style = {styles.itemImage}
              source = {require('../VerificationReport/assets/check.png')}
            />
            <Text style = {styles.lableText}>Originality</Text>
          </View> 
        </View>
        
          
      </View>
      
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  Container:{
    flex: 1,
    backgroundColor:'white',
    paddingStart:20,
    paddingEnd:20,
    paddingTop:20,
  },
  titleText:{
    color:'black',
    fontSize: 25,
    flex: 1,
    fontWeight:800,
  },
  headerSection:{
    alignContent:'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  btntxt:{
    fontSize:18,
    textAlign: 'center',
    color: 'white',
    fontFamily: 'General Sans',
    fontWeight:700,
    
  },
  acceptedBtn:{
    backgroundColor: '#10A64A',
    marginTop: 20,
    padding: 15,
  },
  docText:{
    marginTop: 30,
  },
  docVerifiText:{
    color: '#2D2D2D',
    fontSize: 18,
    fontFamily: 'General Sans',
    fontWeight: 500,
  },
  verifiCheckContainer:{
    borderColor:'#D9D9D9',
    borderRadius: 18,
    borderWidth:1,
    marginTop:18,
    paddingTop:25,
    paddingStart:10,
    paddingBottom:15,
    
    marginBottom: 20,
  },
  itemContainer:{
    flexDirection: 'row',
    marginBottom: 15,
  },

  lableText:{
    fontSize: 16,
    fontFamily: 'General Sans',
    textAlign: 'center',
    justifyContent: 'center',
    color:'#000000',
    fontWeight: 'normal',
  },
  item:{
    color: '#000000',
    fontSize: '16',
    fontWeight: '500',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  itemImage:{
    width:15,
    height:15,
    marginEnd: 15,
    marginStart: 10,
  }
})