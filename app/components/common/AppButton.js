import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

//config
import Colors from "../../config/Colors";

export default function AppButton({ title }) {
  return (
    <View style={styles.mainCtn}>
      <Text style={styles.btnText}>{title}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  mainCtn: {
    width: RFPercentage(45),
    height: RFPercentage(6),
    borderRadius: RFPercentage(1),
    alignItems: "center",
    justifyContent: "center",
    marginTop: RFPercentage(2),
    backgroundColor: Colors.black,
  },
  btnText: {
    color: Colors.white,
    fontSize: RFPercentage(2.2),
    fontWeight: "700",
  },
});
