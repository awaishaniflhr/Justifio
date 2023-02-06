import { ImageBackground, StyleSheet, Text, View, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native'
import React, { useState } from 'react'
import CheckBox from '@react-native-community/checkbox';

{/* ///////////////////////////////////////////////// Flat List Start Here ////////////////////////////////////////////////*/}

const DATA = [
  {
    id: '01',
    photo: '',
    title: 'Issue Date',
  },
  {
    id: '02',
    title: 'Document No',
  },
  {
    id: '03',
    title: 'Documant Type',
  },
  {
    id: '04',
    title: 'Visibility',
  },
  {
    id: '05',
    title: 'DOB',
  },
  {
    id: '06',
    title: 'Name',
  },
  {
    id: '07',
    title: 'Must not be expired',
  },
  {
    id: '08',
    title: 'Originality',
  },
];

const Item = ({title}) => (
  <View style={styles.itemflatelist}>
    <Image style={styles.verificationcheck} source={require('./assets/check.png')} resizeMode= {'contain'}/>
    <Text style={styles.title}>{title}</Text>
  </View>
);

{/* ///////////////////////////////////////////////// Flat List End Here ////////////////////////////////////////////////*/}

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
      <TouchableOpacity style={styles.acceptedBtn} >
        <Text style={styles.btntxt}>Accepted</Text>
      </TouchableOpacity>

      </View>
      <View style = {styles.docText}>
        <Text style ={styles.docVerifiText}>Document Verification</Text>
      </View>
      <View style = {styles.verifiCheckContainer}>
        <View style = {styles.itemContainer}>
{/* ///////////////////////////////////////////////// Flat List Start Here ////////////////////////////////////////////////*/}


      <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />


{/* ///////////////////////////////////////////////// Flat List End Here ////////////////////////////////////////////////*/}

        </View>  
      </View>
      <TouchableOpacity style={styles.gotoHomeBtn} >
        <Text style={styles.btntxt}>GO To Home</Text>
      </TouchableOpacity>
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
  gotoHomeBtn:{
    backgroundColor: 'linear-gradient(#5461FA 90%, rgba(150, 85, 243, 0.80396) 119.78%)',
    // marginTop: 50,
    // marginBottom:30,
    borderRadius:10,
    position: 'absolute',
    bottom:20,
    alignSelf:'center',
    width: 350,
    height:55,
    padding: 15,
   
    flex: 1,
    alignItems:'center',
    justifyContent: 'center',
    flex:1,

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
  },
  itemflatelist: {
    flexDirection: 'row',
    padding: 10,
    alignContent: 'center',    
  },
  title: {
    fontSize: 16,
    color: '#000000',
    alignContent: 'center',
    
  },
  verificationcheck:{
    marginTop:5,
    marginEnd:15,
    width:15,
    height:15,
  }
})