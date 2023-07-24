import React, { useState } from "react";
import {
  Image,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  TextInput,
  FlatList,
  ImageBackground,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

//Components
import Screen from "../components/Screen";
import HeaderMode from "../components/common/HeaderMode";
import AppButton from "../components/common/AppButton";

//config
import Colors from "../config/Colors";

export default function ReelCaption(props) {
  const [description, onChangeDescription] = useState("");
  return (
    <Screen style={styles.screen}>
      {/* headerMode */}
      <View style={styles.mainCtn}>
        <HeaderMode
          title="Reels Record"
          onpress={() => {
            props.navigation.navigate("ReelRecordPractice");
          }}
        />
      </View>

      <View style={styles.vidmainCtn}>
        <ImageBackground
          style={styles.imgbg}
          source={require("../../assets/images/pinkgirl.png")}
        >
          <View style={styles.overlayvid}>
            <TouchableOpacity activeOpacity={0.7} style={styles.iconTouch}>
              <Image
                style={styles.playIcon}
                source={require("../../assets/images/playicon.png")}
              />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>

      {/* caption */}
      <View style={styles.inpMainCtn}>
        <TextInput
          style={styles.txtinp}
          onChangeText={onChangeDescription}
          value={description}
          placeholder="write a caption"
          placeholderTextColor={Colors.placeholder}
        />
      </View>

      {/* button */}
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          props.navigation.navigate("Reels");
        }}
        style={styles.btnmain}
      >
        <AppButton title="Publish" />
      </TouchableOpacity>
    </Screen>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: Colors.lightWhite,
  },
  imgbg: {
    width: RFPercentage(20),
    height: RFPercentage(20),
  },
  btnmain: { marginTop: RFPercentage(4), marginBottom: RFPercentage(4) },
  txtinp: { fontSize: RFPercentage(2), width: RFPercentage(45) },
  inpMainCtn: {
    width: RFPercentage(45),
    height: RFPercentage(12),
    backgroundColor: "#F2F3F7",
    color: Colors.black,
    paddingLeft: RFPercentage(2),
    paddingTop: RFPercentage(1.5),
    borderRadius: RFPercentage(1),
    marginTop: RFPercentage(7),
  },
  vidmainCtn: {
    width: RFPercentage(20),
    height: RFPercentage(20),
    alignItems: "center",
    justifyContent: "center",
    marginTop: RFPercentage(7),
  },
  overlayvid: {
    width: RFPercentage(20),
    height: RFPercentage(20),
    backgroundColor: "#868686",
    opacity: 0.6,
    alignItems: "center",
    justifyContent: "center",
  },
  iconTouch: { alignItems: "center", justifyContent: "center" },
  playIcon: {
    width: RFPercentage(5),
    height: RFPercentage(5),
  },
  mainCtn: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: RFPercentage(4),
  },
});
