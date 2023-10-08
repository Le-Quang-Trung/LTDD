import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style = {styles.container1}>

        <Text style = {styles.tpass}>
          <center>PASSWORD<br></br>GENERATOR</center>
        </Text>

        <center>
          <View style = {styles.boxblack}></View>
        </center>

        <View style = {styles.passleng}>
          <Text style = {styles.text}>Password length</Text>
          <View style = {styles.vpassleng}></View>
        </View>

        <View style = {styles.check}>
          <Text style = {styles.text}>Include lower case letters</Text>
          <View style = {styles.vcheck}>
            <Image style ={styles.imgtick} source={require('./img/tick.jpg')} />
          </View>
        </View>

        <View style = {styles.check}>
          <Text style = {styles.text}>Include upcase letters</Text>
          <View style = {styles.vcheck}></View>
        </View>

        <View style = {styles.check}>
          <Text style = {styles.text}>Include number</Text>
          <View style = {styles.vcheck}>
            <Image style ={styles.imgtick} source={require('./img/tick.jpg')} />
          </View>
        </View>

        <View style = {styles.check}>
          <Text style = {styles.text}>Include special symbol</Text>
          <View style = {styles.vcheck}></View>
        </View>

        <View style = { styles.vgene }>
              <TouchableOpacity >
                <Text style = {styles.genetext}> <center>GENERATE PASSWORD</center>  </Text> 
              </TouchableOpacity > 
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    backgroundImage: 'linear-gradient(to bottom, #3B3B98, #C4C4C400 )',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container1:{
    width: 322,
    height: 605,
    backgroundColor: '#23235B',
    borderRadius: 20,
  },
  tpass:{
    color: '#ffffff',
    fontSize: 25,
    marginTop: 39,
  },
  boxblack:{
    marginTop: 20,
    backgroundColor: '#151537',
    height: 55,
    width: 290,
  },
  passleng:{
    width: 280,
    marginTop: 40,
    left : 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text:{
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  vpassleng:{
    backgroundColor: '#ffffff',
    width: 100,
    height: 30,
  },
  check:{
    width: 280,
    marginTop: 25,
    left : 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  vcheck:{
    backgroundColor: '#ffffff',
    width: 30,
    height: 30,
  },
  imgtick:{width: 30,
    height: 30,
  },
  vgene:{
    display: 'flex',
    alignItems: 'center',
    marginTop: 30
  },
  genetext:{
    fontSize: 17,
    fontWeight: 'bold',
    display: 'flex',
    color: 'white',
    backgroundColor: '#3B3B98',
    width: 250,
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 5,
  }
});
