
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./img/background1a.png')} style={styles.image}>

        
        <Image style={{width:140,height:140}}
          source={require('./img/circle.png')} 
        />
        <Text style={styles.title}>GROW YOUR BUSINESS</Text>
        <Text style={styles.title2}>We will help you to grow your business using online server</Text>

        
        <View style = {styles.containerBtn}>
            <TouchableOpacity style={styles.btn}>
                <Text style={{fontSize:20,fontWeight:'700'}}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
                <Text style={{fontSize:20,fontWeight:'700'}}>SIGN UP</Text>
            </TouchableOpacity>
        </View>

        <Text style={styles.title3}>HOW WE WORK?</Text>
      </ImageBackground>

    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
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
        width: 302,
        height: 36,
        fontSize: 15,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    title3: {
        width: 300,
        height: 58,
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    btn:{
        display:'flex',
        width:119,
        height:48,
        backgroundColor:'rgba(227, 192, 0, 1)',
        alignItems:'center',
        justifyContent:'center',
    }
});