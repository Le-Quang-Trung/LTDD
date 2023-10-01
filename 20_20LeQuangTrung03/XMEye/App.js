import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     
        <Image style={{width:140,height:140}}
          source={require('./img/eyeball.png')} 
        />

        <View style = {
            { flexDirection: 'row', width: 325, height: 40, paddingHorizontal: 8, paddingVertical: 5, alignItems: 'center'}
        }>
          <Image style={{width:30,height:30}}
          source={require('./img/user.png')} 
          />
          <Text style = {styles.title1 }>  Please input user  </Text> 
        </View>

        <View style = {
            { flexDirection: 'row', width: 325, height: 40, paddingHorizontal: 8, paddingVertical: 5, alignItems: 'center' }
        }>
            <Image style={{width:30,height:30}}
            source={require('./img/lock.png')} 
            />
            <Text style = {styles.title1 }>  Please input password  </Text> 
              
        </View>

        <View style = {styles.containerBtn}>
            <TouchableOpacity style={styles.btn}>
                <Text style={{fontSize:20,fontWeight:'600', color:'#fff'}}>LOGIN</Text>
            </TouchableOpacity>
        </View>

        <View style ={{flexDirection:'row'}}>
          <Text style={{fontSize: 18}}>Register</Text>
          <Text style={{fontSize: 18}}>Forgot Password</Text>
        </View>

        <Text style={{fontSize: 18}}>________Other Login Methods________</Text>

        <View style={styles.BTN}>
          <TouchableOpacity >
            <Image
              source={require('./img/Group 8.png')}
              style={{ width: 108, height: 30, flex: 1,  }}
            />
          </TouchableOpacity>

          <TouchableOpacity >
            <Image
              source={require('./img/Group 9.png')}
              style={{ width: 108, height: 30, flex: 1  }}
            />
          </TouchableOpacity>

          <TouchableOpacity style={[ { backgroundColor: 'rgb(39,90,141)', justifyContent: 'center', alignItems: 'center' }]} >
            <Text style={{fontSize:85,fontWeight:'600',color:'#fff', width:108, textAlign: 'center'}}>f</Text>
          </TouchableOpacity>

        </View>

      
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
  btn:{
    display:'flex',
    width: 325, 
    height: 40,
    backgroundColor:'#386FFC',
    alignItems:'center',
    justifyContent:'center',
  },
  title1: {
    fontSize: 20,
    alignItems: 'flex-start',
    justifyContent:  'flex-start',
    color:'#C4C4C4',
  },
  BTN:{
      display: 'flex',
      flexDirection:'row',
      width: 325,
      height: 100,
  },
  
});



