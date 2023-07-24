import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import ReelsComponent from "../components/ReelsComponent";
const Reels = () => {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  return (
    <View
      style={{
        width: windowWidth,
        height: windowHeight,
        backgroundColor: "white",
        position: "relative",
        backgroundColor: "black",
      }}
    >
      <View style={styles.mainReels}></View>
      <ReelsComponent />
    </View>
  );
};

export default Reels;
const styles = StyleSheet.create({
  mainReels: {
    position: "absolute",
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    zIndex: 1,
    padding: 10,
  },
});
