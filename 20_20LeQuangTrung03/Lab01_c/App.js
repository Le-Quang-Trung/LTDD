
import { StyleSheet, Text, View,TextInput, TouchableOpacity, ImageBackground} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./img/background1c.png')} style={styles.image}>

        
        <Text style={styles.title}>CODE</Text>
        <Text style={styles.title1}>VERIFICATION</Text>
        <Text style={styles.title2}>Enter on time password sent on ++849092605798</Text>

      <View style={styles.rowInput}>
        <TextInput style={styles.input} keyboardType='numeric' maxLength={1} />
        <TextInput style={styles.input} keyboardType='numeric' maxLength={1} />
        <TextInput style={styles.input} keyboardType='numeric' maxLength={1} />
        <TextInput style={styles.input} keyboardType='numeric' maxLength={1} />
        <TextInput style={styles.input} keyboardType='numeric' maxLength={1} />
        <TextInput style={styles.input} keyboardType='numeric' maxLength={1} />
      </View>

        <View style = {styles.containerBtn}>
            <TouchableOpacity style={styles.btn}>
                <Text style={{fontSize:20,fontWeight:'700'}}>VERIFY CODE</Text>
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
        fontSize: 60,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    title1: {
      width: 205,
      height: 58,
      fontSize: 20,
      textAlign: 'center',
      fontWeight: 'bold',
    },
    title2: {
        width: 300,
        fontSize: 15,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    rowInput: {
      height: 50,
      display: 'flex',
      flexDirection: 'row',
    },
    input: {
      width: 50,
      height: 50,
      borderWidth: 1,
      borderColor: 'black',
      textAlign: 'center',
      fontSize: 20,
      fontWeight: '500',
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
