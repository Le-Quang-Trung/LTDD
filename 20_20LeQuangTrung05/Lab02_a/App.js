import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Image, TextInput } from 'react-native';
import React, { useState } from "react";

export default function App() {
  const [obj,setObj] =useState( 
  [
    {
      Name:"Trung", 
      pass:"3105"
    },
    {
      Name:"Huy", 
      pass:"2606"
    },
    {
      Name:"Triet", 
      pass:"1610"
    },
    {
      Name:"Tin", 
      pass:"2211"
    },
    
  ]
  )
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
    
  const check=()=>{
    var authen = obj.some((e)=>
    e.Name ===name && e.pass ===pass
    )
    console.log(authen);
    if(authen){
      alert("Dang nhap thanh cong")
    }
    else{
      alert("Dang nhap that bai")
    }   
  }
    return ( 
        <View style = { styles.container }>
          <ImageBackground source = { require('./img/background2a.png') } style = { styles.image }>

            <Text style = { styles.title } > LOGIN </Text>

            <View style = {
            { flexDirection: 'row', backgroundColor: '#C4C4C44D', borderWidth: 1, borderColor: '#F2F2F2', width: 325, height: 50, paddingHorizontal: 8, paddingVertical: 5, alignItems: 'center' }
            } >
              < Image style = { { width: 30, height: 30 }}
              source = { require('./img/avatar_user.png')}
              /> 
                <TextInput style ={styles.title2} placeholder="Name" onChangeText={setName} value={name}/>      
            </View >

            <View style = {
            { flexDirection: 'row', backgroundColor: '#C4C4C44D', borderWidth: 1, borderColor: '#F2F2F2', width: 325, height: 50, paddingHorizontal: 8, paddingVertical: 5, alignItems: 'center', justifyContent: 'space-between', marginTop: 20, bottom: 70 }
            } >
              <View style = {{ flexDirection: 'row', alignItems: 'center' }}>
                < Image style = {{ width: 30, height: 30 }}
                source = { require('./img/lock.png') }
                /> 
                <TextInput style = { styles.title2 } placeholder="Password" onChangeText={setPass} value = {pass}/>
              </View> 
              <Ionicons name = 'eye' size = {28} color = 'black'/>
            </View>

            <View style = { styles.containerBtn }>
              <TouchableOpacity style = { styles.btn }>
                <Text style = {{ fontSize: 20, fontWeight: '600', color: '#fff' }} onPress={()=>{check()}}> LOGIN </Text> 
              </TouchableOpacity > 
            </View>

            <Text style = { styles.title1 } > Forgot your password? </Text>
          
          </ImageBackground>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    containerBtn: {
        flex: 0,
        height: 40,
        width: 360,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    title: {
        width: 169,
        height: 58,
        fontSize: 35,
        textAlign: 'left',
        fontWeight: 'bold',
        right: 100,
    },
    title1: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 18,
        bottom: 80,
    },
    title2: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        fontSize: 18,
        margin: 15,
    },
    btn: {
        display: 'flex',
        width: 325,
        height: 40,
        backgroundColor: '#060000',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        bottom: 80,
    },
});
