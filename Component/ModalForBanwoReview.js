import React, { useState } from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
  Item,
  Button,
  ScrollView,
  Modal,
} from "react-native";
import Task1 from "./Task1";
import { LinearGradient } from "expo-linear-gradient";
import { profile } from "./data";
import { PieChart } from "react-native-chart-kit";

const ModalBanwo = () => {
  const [text, settext] = useState("");
  const [description, setDescription] = useState("");
  const [descriptions, setDescriptions] = useState([]);
  const [input, setInput] = useState("");
  const [heading, setHeading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [myArr, setMyArr] = useState([
    { name: "home", type: 70, color: "#003f5c" },
    { name: "bills", type: 70, color: "#444e86" },
    { name: "fuel", type: 70, color: "#955196" },
    { name: "driving", type: 70, color: "#dd5182" },
    { name: "Food", type: 70, color: "#ff6e54" },
    { name: "logistic", type: 70, color: "#ffa600" },
  ]);

  const combinedObj = myArr.reduce((acc, curr) => {
    const name = curr.name;
    const color = curr.color;
    if (!acc[name]) {
      acc[name] = { name, type: parseInt(curr.type, 10), color };
    } else {
      acc[name].type += parseInt(curr.type, 10);
    }
    return acc;
    }, {});
  const combinedArr = Object.values(combinedObj);

  const changeHandler = (val) => {
    //setInput(val) //uses the val input and sets it as setInput
    setInput(parseInt(val, 10));
    console.log(val);
  };
  const submitHandler = (text) => {
    settext(text);
    console.log(text);
  };
  const descriptionHandler = (val) => {
    setDescription(val);
    console.log(description);
  };

  const submittingexpense2 = () => {
    setDescriptions([
      ...descriptions,
      { input: input, description: description },
    ]);
  };

  const submittingexpense = () => {
    //created array my new value and added to the old one
    const arr = [{ name: text, type: input }];
    setMyArr([...myArr, ...arr]);
  };

  const imgrender = ({ item }) => (
    <View>
      <TouchableOpacity
        style={styles.categories}
        onPress={() => {
          submitHandler(item.heading);
          setHeading(true);
          setModalVisible(true);
        }}
      >
        <View>
          <Image source={item.img} style={styles.img} />
        </View>
        <Text style={styles.text}>{item.heading}</Text>
      </TouchableOpacity>
    </View>
  );
  const chartConfig = {
    //    backgroundGradientFrom: "#1E2923",
    //    backgroundGradientFromOpacity: 100,
    //backgroundGradientTo: "#08130D",
    //   backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    //   strokeWidth: 2, // optional, default 3
    // barPercentage: 0.5,
    //useShadowColorFromDataset: false // optional
  };
  return (
    <LinearGradient colors={["white", "teal"]} style={styles.container}>
      <View>
        <PieChart
          style={styles.pychart}
          data={combinedArr}
          width={400}
          height={250}
          chartConfig={chartConfig}
          accessor={"type"}
          backgroundColor={"transparent"}
          paddingLeft={"10"}
          center={[20, 10]}
          absolute
        />
      </View>
      <FlatList
        horizontal={true}
        data={profile}
        renderItem={imgrender}
        // rendering the data.js
      />
      <Modal
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          <TextInput
            style={styles.modalText}
            placeholder={"enter spending"}
            value={input} //value get stored input
            onChangeText={changeHandler}
            //onchangeText i store the input in setInput
          />
          <TextInput
            style={styles.modalText}
            placeholder={"enter description"}
            value={description} //value get stored 
            onChangeText={descriptionHandler} //store the value on setDescription 
          />
          <Button
            title="Enter"
            onPress={() => {
              setModalVisible(false);
              submittingexpense();
              submittingexpense2();
              setDescription(''); // reset description
              setInput(''); // reset input
            }}
          />
        </View>
      </Modal>
      <ScrollView>
        {descriptions.map((item, index) => (
          //<Text>text={item.name} {item.type}</Text>
          //maps the myArr in text or Task
          //<Task1 name={item.name} type={item.type} />
          // <Text>{description} </Text>
          <View>
            <Task1 name={item.input} type={item.description} />
          </View>
        ))}
      </ScrollView>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    marginTop: 100,
  },
  pychart: {
    height: 250,
  },
  categories: {
    height: 110,
    backgroundColor: "white",
    borderRadius: 20,
    marginRight: 10,
    marginBottom: 50,
    justifyContent: "flex-start",
    alignSelf: "flex-start",
  },
  img: {
    height: 70,
    width: 70,
    marginRight: 30,
    alignItems: "center",
    alignContent: "center",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: "#ffa600",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffa600",
  },
  modalText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
  },
});
export default ModalBanwo;
