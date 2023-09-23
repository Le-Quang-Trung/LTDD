import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, ImageBackground } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./img/background.png')} style={styles.image}>

        <View style={styles.viewLogo}>
          <Image style={styles.logo}
            source={require('./img/circle.png')} 
          />
        </View>

        <View style={styles.viewTitle} >

          <Text style={styles.title1}>GROW</Text>
          <Text style={styles.title2}>YOUR BUSINESS</Text>

          <Text style={styles.title3}>We will help you to grow your business using</Text>
          <Text style={styles.title4}>online server</Text>

        </View>

        <View style={styles.viewButton} >
          <Button  
            title='LOGIN'
            color= '#E3C000'
          />
          <Button 
            title='SIGN UP' 
            color= '#E3C000'
            
          />
        </View>

      </ImageBackground>

    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    viewLogo: {
      marginTop: 20,
    },
    logo: {
      width: 150,
      height: 150,
    },
    viewTitle: {
      marginTop: 80,
    },
    title1: {
      fontSize: 30,
      textAlign: 'center',
      fontWeight: 'bold',
    },
    title2: {
      fontSize: 30,
      textAlign: 'center',
      fontWeight: 'bold',
    },
    title3: {
      marginTop: 50,
      fontSize: 18,
      textAlign: 'center',
      fontWeight: 'bold',
    },
    title4: {
      fontSize: 18,
      textAlign: 'center',
      fontWeight: 'bold',
    },
    viewButton: {
      marginTop: 50,
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '70%',
      height: 50,
    },
   
});