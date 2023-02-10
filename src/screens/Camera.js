import { StyleSheet, Text, View, CustomButton, TouchableOpacity  } from 'react-native'
import React from 'react'

import { RNCamera } from 'react-native-camera';



const Camera=() =>{

    

    const captureHandle = async () => {
        try{
            const data = await takePicture();
            console.log(data.uri);
        } catch (error){
            console.log(error);
        }
    }

    return (
        <View style={styles.container}>
            <RNCamera
                
                type={RNCamera.Constants.Type.back}
                style={styles.preview}
            >
                <TouchableOpacity style={{height:60,  width: 60, borderRadius:30, backgroundColor: 'white', marginBottom:30, opacity:0.50}} onPress={()=>{captureHandle()}}>

                </TouchableOpacity>

            </RNCamera>
        </View>
    )


}
export default  Camera()


const styles = StyleSheet.create({

    container: {
        flex: 1,
        
    },
    preview:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    }
})