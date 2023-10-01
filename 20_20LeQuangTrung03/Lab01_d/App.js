import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Image} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./img/background1d.png')} style={styles.image}>

        
        <Text style={styles.title}>LOGIN</Text>

        <View style = {
            { flexDirection: 'row', backgroundColor: '#C4C4C4', width: 325, height: 40, paddingHorizontal: 8, paddingVertical: 5 }
        }>
          <Text style = {styles.title4 }>  Email  </Text>     
        </View>

        <View style = {
            { flexDirection: 'row', backgroundColor: '#C4C4C4', width: 325, height: 40, paddingHorizontal: 8, paddingVertical: 5, justifyContent: 'space-between', alignItems: 'center' }
        }>
          <Text style = {styles.title4 }>  Password  </Text>    
          <Ionicons name='eye' size={24} color='black' />  
        </View>

        <View style = {styles.containerBtn}>
            <TouchableOpacity style={styles.btn}>
                <Text style={{fontSize:20,fontWeight:'600', color:'#fff'}}>LOGIN</Text>
            </TouchableOpacity>
        </View>

        <Text style={styles.title1}>When you agree to terms and conditions</Text>
        <Text style={styles.title2}>For got your password?</Text>
        <Text style={styles.title3}>Or login with</Text>

        <View style={styles.BTN}>

          <TouchableOpacity style={[ { backgroundColor: 'rgb(39,90,141)' }]} >
            <Text style={{fontSize:32,fontWeight:'600',color:'#fff', width:108, textAlign: 'center'}}>f</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[{ backgroundColor: 'rgba(6, 128, 241, 1)' },]}>
            <Text style={{fontSize:32,fontWeight:'600',color:'#fff', width:108, textAlign: 'center'}}>Z</Text>
          </TouchableOpacity>

          <TouchableOpacity >
            <Image
              source={require('./img/gg.png')}
              style={{ width: 108, height: 30, flex: 1  }}
            />
          </TouchableOpacity>
          

        </View>

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
    title2: {
      fontSize: 14,
      color: 'rgba(93,37, 250, 1)',
      fontWeight: '400',
    },
    title3: {
        fontSize: 14,
        fontWeight: '400',
    },
    title4: {
        alignItems: 'flex-start',
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
    BTN:{
      display: 'flex',
      flexDirection:'row',
      width: 325,
      height: 45,
    },
});

