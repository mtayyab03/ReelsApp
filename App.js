import React, { useEffect } from "react";
import {
  Image,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  ImageBackground,
  FlatList,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//screens

import ReelCaption from "./app/screens/ReelCaption";
import ReelRecordPractice from "./app/screens/ReelRecordPractice";
import Reels from "./app/screens/Reels";

//colors
import Colors from "./app/config/Colors";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerMode: "false" }}
        initialRouteName="ReelRecordPractice"
      >
        <Stack.Screen name="ReelCaption" component={ReelCaption} />
        <Stack.Screen name="Reels" component={Reels} />
        <Stack.Screen
          name="ReelRecordPractice"
          component={ReelRecordPractice}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
