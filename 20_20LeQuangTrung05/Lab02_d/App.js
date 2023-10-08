
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
      <View style={styles.container1}>
        
      </View>

      <View style={styles.container2}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.text}>Bạn có phiếu quà tặng Tiki/Got it/Unbox?</Text>
          <Text style={styles.input}>Nhập tại đây?</Text>
        </View>
      </View>

      <View style={styles.container3}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.text1}>Tạm tính</Text>
          <Text style={styles.money}>141.800đ</Text>
        </View>
      </View>

      <View style={styles.container4}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.text2}>Thành tiền</Text>
          <Text style={styles.money}>141.800đ</Text>
        </View>

        <View style = { styles.containerbtn }>
                <TouchableOpacity >
                  <Text style = {styles.btn}>TIẾN HÀNH ĐẶT HÀNG</Text> 
                </TouchableOpacity > 
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 390,
    height: 695,
    backgroundColor: '#808080',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container1:{
    width: 390,
    height: 283,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    width: 390,
    height: 51,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  text: {
    fontSize: 12,
    fontWeight: 'bold',
    right: 13,
  },
  input: {
    fontSize: 12,
    color: '#134FEC',
    margin: 5,
  },
  container3: {
    width: 390,
    height: 51,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  text1: {
    fontWeight: 'bold',
    right: 110,
  },
  container4: {
    width: 390,
    height: 120,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 150,
  },
  money:{
    color: '#EE0D0D',
    fontSize: 15,
    fontWeight: 'bold',
    left: 110,
  },
  text2: {
    color: '#808080',
    right: 110,
  },
  containerbtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btn: {
    display: 'flex',
    width: 360,
    height: 45,
    backgroundColor: '#E53935',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    marginTop: 10,
  },
});
