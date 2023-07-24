import React, { useState } from "react";
import { Image, TouchableOpacity, StyleSheet, View, Text } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

//config
import Colors from "../../config/Colors";

export default function HeaderMode({ title, onpress }) {
  return (
    <>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={onpress}
        style={styles.arrowMain}
      >
        <Image
          style={styles.arrowimg}
          source={require("../../../assets/images/arowblogo.png")}
        />
      </TouchableOpacity>

      <Text style={styles.titleMain}>{title}</Text>
    </>
  );
}
const styles = StyleSheet.create({
  arrowMain: { position: "absolute", left: RFPercentage(2) },
  arrowimg: {
    width: RFPercentage(2.5),
    height: RFPercentage(2.5),
  },
  titleMain: {
    fontWeight: "600",
    fontSize: RFPercentage(2.5),
    color: Colors.secondary,
  },
});
