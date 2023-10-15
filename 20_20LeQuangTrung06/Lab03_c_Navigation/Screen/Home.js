import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";

const Home = ({ navigation, route }) => {
  const [numStar, setNumStar] = useState(0);

  const handleSelectedStar = (starSelected) => {
    setNumStar(starSelected);
  };

  const renderStar = (numStarRender) => {
    return (
      <TouchableOpacity onPress={() => handleSelectedStar(numStarRender)}>
        <AntDesign
          name={numStarRender <= numStar ? "star" : "staro"}
          size={24}
          color={numStarRender <= numStar ? "gold" : "black"}
        />
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Image style={styles.img} source={route.params?.img}></Image>
        </View>

        <Text style={styles.text}> Điện thoại Vsmart Joy 3 - Hàng chính hãng</Text>
        
        <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 10, right: 15}}>
          <View style={styles.star}>
            {renderStar(1)}
            {renderStar(2)}
            {renderStar(3)}
            {renderStar(4)}
            {renderStar(5)}

            <View style={{ justifyContent: "center", alignItems: "center", marginLeft: 30,}}>
              <Text>Xem 828 danh gia</Text>
            </View>
          </View>
        </View>

        <View style ={styles.containerprice}>
          <Text style={styles.price}>1.790.000đ</Text>
          <Text style={{textDecorationLine: 'line-through', marginTop: 2}}>1.790.000đ</Text>
        </View> 

        <View style={{flexDirection:'row'}}>
          <Text style={styles.cheap}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
          <AntDesign name="questioncircleo" size={18} color="black" />
        </View>
        
        <TouchableOpacity style={{width:300, height:34}} 
          onPress={() => navigation.navigate("ChoiceColor")}
        >
          <View style={{flexDirection: 'row', marginTop: 10, borderWidth: 1, borderRadius: 10, width: 300, height: 34, justifyContent: 'space-between', alignItems: 'center'}}>
              <Text style={styles.color}>4 MÀU-CHỌN MÀU</Text>
              <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
          </View>
        </TouchableOpacity>

        <View style={styles.containerbtn}> 
          <TouchableOpacity onPress={() => navigation.navigate("Choose")}>
            <Text style={styles.btn}>CHỌN MUA</Text>
          </TouchableOpacity>
        </View>

    </View>
     
    
  );
};
export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 390,
    height: 844,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    height: 301,
    width: 361,
    resizeMode: "contain",
  },
  text: {
    marginTop: 15,
    fontWeight: 'Roboto',
    fontSize: 15,
  },
  star: {
    flexDirection: "row",
  },
  containerprice:{
    flexDirection: 'row',
    marginTop: 15,
  },
  price:{
    fontWeight: 'Roboto',
    fontSize: 16,
    fontWeight: 700,
    right: 70,
  },
  cheap:{
    color: 'red',
    fontSize: 12,
    fontWeight: 'Roboto',
    fontWeight: 700,
    marginTop: 15,
    right: 55, 
  },
  color: {
    left: 100,
  },
  containerbtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  btn: {
    display: "flex",
    width: 295,
    height: 44,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    marginTop: 60,
    borderRadius: 15,
  },
});
