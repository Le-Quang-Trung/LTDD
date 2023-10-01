
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./img/background1b.png')} style={styles.image}>

        
        <Image style={{width:140,height:140}}
          source={require('./img/lock.png')} 
        />
        <Text style={styles.title}>FORGET PASSWORD</Text>
        <Text style={styles.title2}>Provide your account's email for which you want to reset your password</Text>

        <View style = {
            { flexDirection: 'row', backgroundColor: '#C4C4C4', width: 325, height: 40, paddingHorizontal: 8, borderRadius: 10, paddingVertical: 5 }
        }>
          <MaterialIcons name = 'email' size = { 30 } color = 'grey' />
          <Text style = {styles.title3 }>   Email   </Text>   
        </View>
      
        <View style = {styles.containerBtn}>
            <TouchableOpacity style={styles.btn}>
                <Text style={{fontSize:20,fontWeight:'700'}}>NEXT</Text>
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
        height:48,
        width:360,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly'
    },
    title: {
        width: 169,
        height: 58,
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    title2: {
        width: 325,
        height: 36,
        fontSize: 15,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    title3: {
      height: 150,
      fontSize: 18,
      textAlign: 'center',
      justifyContent: 'center',
  },
    btn:{
        display:'flex',
        width: 325,
        height: 48,
        backgroundColor:'rgba(227, 192, 0, 1)',
        alignItems:'center',
        justifyContent:'center',
    }
});