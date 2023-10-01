import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Image} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./img/background2a.png')} style={styles.image}>

        
        <Text style={styles.title}>LOGIN</Text>

        <View style = {
            { flexDirection: 'row', backgroundColor: '#C4C4C4', width: 325, height: 40, paddingHorizontal: 8, paddingVertical: 5 }
        }>
          <Image style={{width:30,height:30}}
          source={require('./img/avatar_user.png')} 
          />
          <Text style = {styles.title2 }>  Email  </Text>      
        </View>

        <View style = {
            { flexDirection: 'row', backgroundColor: '#C4C4C4', width: 325, height: 40, paddingHorizontal: 8, paddingVertical: 5, alignItems: 'center', justifyContent: 'space-between' }
        }>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image style={{width:30,height:30}}
            source={require('./img/lock.png')} 
            />
            <Text style = {styles.title2 }>  Password  </Text> 
          </View>   
          <Ionicons name='eye' size={24} color='black'  />  
        </View>

        <View style = {styles.containerBtn}>
            <TouchableOpacity style={styles.btn}>
                <Text style={{fontSize:20,fontWeight:'600', color:'#fff'}}>LOGIN</Text>
            </TouchableOpacity>
        </View>

        <Text style={styles.title1}>CREATE ACCOUNT</Text>
        

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
      textAlign: 'left',
      fontWeight: 'bold',
    },
    title1: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    title2: {
        alignItems: 'flex-start',
        justifyContent:  'flex-start',
        fontSize: 20,
    },
    btn:{
        display:'flex',
        width: 325, 
        height: 40,
        backgroundColor:'#060000',
        alignItems:'center',
        justifyContent:'center',
    },
    BTN:{
      display: 'flex',
      flexDirection:'row',
      width: 325,
      height: 45,
    },
});


