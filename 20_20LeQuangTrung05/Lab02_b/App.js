import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
      <View>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
          <Image style = {styles.imgusb}
                source = {require('./img/usb.png')}
          /> 
          <Text style={styles.textusb}>USB Bluetooth Music Receiver<br></br>HJX-001- Biến loa thường thành loa<br></br>bluetooth</Text>
        </View>
      </View>

      <Text style={styles.text}><center>Cực kỳ hài lòng</center></Text>

      <View style={styles.star}>
        <Image style = {styles.vstar}
              source = {require('./img/Star.png')}
        /> 
        <Image style = {styles.vstar}
              source = {require('./img/Star.png')}
        /> 
        <Image style = {styles.vstar}
              source = {require('./img/Star.png')}
        /> 
        <Image style = {styles.vstar}
              source = {require('./img/Star.png')}
        /> 
        <Image style = {styles.vstar}
              source = {require('./img/Star.png')}
        /> 
      </View>

      <View style={styles.img}>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 13}}>
          <FontAwesome name="camera" size={30} color="black" />
          <Text style={styles.textimg}>Thêm hình ảnh</Text>
        </View>
      </View>

      <View>
        <Text style={styles.box}>  Hãy chia sẻ những điều mà bạn <br></br>  thích về sản phẩm</Text> 
      </View>

      <View style = { styles.containerbtn }>
              <TouchableOpacity >
                <Text style = {styles.btn}>Gửi</Text> 
              </TouchableOpacity > 
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgusb: {
    width: 70,
    height: 70,
  },
  textusb: {
    fontWeight: 'bold',
    margin: 10,
  },
  text: {
    fontWeight: 'bold',
    marginTop: 30,
  },
  star: {
    flexDirection: 'row',
    marginTop: 5,
  },
  vstar: {
    width: 30,
    height: 30,
    margin: 5,
  },
  img:  {
    borderWidth: 1,
    borderColor: '#1511EB',
    width: 230,
    height: 68,
    marginTop: 20,
  },
  textimg: {
    fontSize: 15,
    fontWeight: 'bold',
    margin: 10,
  },
  box: {
    borderWidth: 1,
    borderColor: '#C4C4C4',
    width: 230,
    height: 222,
    color: '#C4C4C4',
    fontSize: 15,
    marginTop: 13,
  },
  containerbtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btn: {
    display: 'flex',
    width: 225,
    height: 41,
    backgroundColor: '#0D5DB6',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    marginTop: 20,
  },
});
