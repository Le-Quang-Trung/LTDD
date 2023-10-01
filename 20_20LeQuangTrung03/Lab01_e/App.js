import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground} from 'react-native';

export default function App() {

  const [selectedRadio, setSelectedRadio] = useState(0)

  return (
    <View style={styles.container}>
      <ImageBackground source={require('./img/background1e.png')} style={styles.image}>

        
        <Text style={styles.title}>REGISTER</Text>
        <View style = {
            { flexDirection: 'row', backgroundColor: '#C4C4C4', width: 325, height: 40, paddingHorizontal: 8, paddingVertical: 5 }
        }>
          <Text style = {styles.title2 }>  Name  </Text>      
        </View>

        <View style = {
            { flexDirection: 'row', backgroundColor: '#C4C4C4', width: 325, height: 40, paddingHorizontal: 8, paddingVertical: 5 }
        }>
          <Text style = {styles.title2 }>  Phone  </Text>      
        </View>

        <View style = {
            { flexDirection: 'row', backgroundColor: '#C4C4C4', width: 325, height: 40, paddingHorizontal: 8, paddingVertical: 5 }
        }>
          <Text style = {styles.title2 }>  Email  </Text>      
        </View>

        <View style = {
            { flexDirection: 'row', backgroundColor: '#C4C4C4', width: 325, height: 40, paddingHorizontal: 8, paddingVertical: 5, justifyContent: 'space-between', alignItems: 'center' }
        }>
          <Text style = {styles.title2 }>  Password  </Text>    
          <Ionicons name='eye' size={24} color='black' />  
        </View>

        <View style = {
            { flexDirection: 'row', backgroundColor: '#C4C4C4', width: 325, height: 40, paddingHorizontal: 8, paddingVertical: 5 }
        }>
          <Text style = {styles.title2 }>  Birthday  </Text>      
        </View>

        <View style = {
            { flexDirection: 'row', width: 325, height: 60, paddingHorizontal: 8, paddingVertical: 5 }
        }>
          <TouchableOpacity onPress={()=>setSelectedRadio(1)}>
            <View style={styles.wrapper}>
              <View style={styles.radio}>
                {selectedRadio==1? <View style={styles.radioBg}></View>:null}  
                </View>
              <Text style={styles.radioText}>Male</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>setSelectedRadio(2)}>
            <View style={styles.wrapper}>
              <View style={styles.radio}>
                {selectedRadio==2? <View style={styles.radioBg}></View>:null}
                </View>
              <Text style={styles.radioText}>Female</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style = {styles.containerBtn}>
            <TouchableOpacity style={styles.btn}>
                <Text style={{fontSize:20,fontWeight:'600', color:'#fff'}}>REGISTER</Text>
            </TouchableOpacity>
        </View>

        <Text style={styles.title1}>When you agree to terms and conditions</Text>

      </ImageBackground>

    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
    image: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
    containerBtn:{
      flex:0,
      height:40,
      width:360,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-evenly'
    },
    title: {
      width: 169,
      height: 58,
      fontSize: 35,
      textAlign: 'center',
      fontWeight: 'bold',
    },
    title1: {
      fontSize: 14,
      fontWeight: '400',
    },
    title2: {alignItems: 'flex-start',
    justifyContent:  'flex-start',
    fontSize: 20,
    },
    btn:{
        display:'flex',
        width: 325, 
        height: 40,
        backgroundColor:'rgba(229, 57, 53, 1)',
        alignItems:'center',
        justifyContent:'center',
    },


    radioText:{
      fontSize: 20,
      color: 'black',
    },
    radio:{
      width: 30,
      height: 30,
      borderRadius: 20,
      borderWidth: 3,
      margin: 10,
    },
    wrapper:{
      flexDirection: 'row', alignItems: 'center',
    },
    radioBg:{
      backgroundColor: 'black',
      height: 18,
      width: 18,
      margin: 3,
      borderRadius: 20,
    },
});
