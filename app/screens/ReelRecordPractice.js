import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import { Camera } from "expo-camera";
import { Video } from "expo-av";
import { Ionicons } from "@expo/vector-icons";
import { RFPercentage } from "react-native-responsive-fontsize";
import * as ImagePicker from "expo-image-picker";

//config
import Colors from "../config/Colors";

export default function ReelRecordPractice(props) {
  const [hasAudioPermission, setHasAudioPermission] = useState(null);
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [record, setRecord] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const video = React.useRef(null);
  const [image, setImage] = useState(null);

  const pickVideo = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === "granted");

      const audioStatus = await Camera.requestMicrophonePermissionsAsync();
      setHasAudioPermission(audioStatus.status === "granted");
    })();
  }, []);

  const takeVideo = async () => {
    if (camera) {
      const data = await camera.recordAsync({
        maxDuration: 10,
      });
      setRecord(data.uri);
      console.log(data.uri);
    }
  };

  const stopVideo = async () => {
    camera.stopRecording();
  };

  if (hasCameraPermission === null || hasAudioPermission === null) {
    return <View />;
  }
  if (hasCameraPermission === false || hasAudioPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{ flex: 1 }}>
      <Camera
        ref={(ref) => setCamera(ref)}
        style={styles.fixedRatio}
        type={type}
        ratio={"4:3"}
      >
        <View style={styles.topbar}>
          <TouchableOpacity activeOpacity={0.7}>
            <Image
              style={styles.cancelicon}
              source={require("../../assets/images/cancelicon.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("ReelCaption");
            }}
            activeOpacity={0.7}
            style={{ position: "absolute", right: RFPercentage(3) }}
          >
            <Text style={styles.nexttext}>Next</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bottommain}>
          <View style={styles.secMain}>
            <TouchableOpacity
              style={styles.camerapress}
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}
            >
              <Ionicons
                name={Platform.OS === "ios" ? "camera" : "md-reverse-camera"}
                size={50}
                color="white"
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.presshold}
              onLongPress={() => takeVideo()}
              onPressOut={() => stopVideo()}
            >
              <View style={styles.redbtnmain}>
                <View style={styles.redbtnInterior}></View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.7} onPress={pickVideo}>
              {image ? null : (
                <Image
                  style={styles.selectimg}
                  source={require("../../assets/images/videogallery.png")}
                />
              )}
              {image && (
                <Image source={{ uri: image }} style={styles.afterselectimg} />
              )}
            </TouchableOpacity>
          </View>
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  fixedRatio: {
    flex: 1,
    // aspectRatio: 1
  },
  video: {
    width: 350,
    height: 220,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  topbar: {
    width: "90%",
    marginLeft: RFPercentage(3),
    flexDirection: "row",
    marginTop: RFPercentage(5),
    alignItems: "center",
  },
  cancelicon: {
    width: RFPercentage(4),
    height: RFPercentage(4),
    borderRadius: RFPercentage(1),
  },
  nexttext: {
    fontSize: RFPercentage(3),
    fontWeight: "600",
    color: Colors.lightWhite,
  },
  bottommain: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "flex-end",
    marginBottom: RFPercentage(8),
  },
  secMain: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  camerapress: {
    flex: 0.2,
    alignSelf: "flex-end",
  },
  presshold: { alignSelf: "center" },
  redbtnmain: {
    borderWidth: 2,
    borderRadius: 30,
    borderColor: "red",
    height: 60,
    width: 60,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  redbtnInterior: {
    borderWidth: 2,
    borderRadius: 25,
    borderColor: "red",
    height: 50,
    width: 50,
    backgroundColor: "red",
  },
  selectimg: {
    width: RFPercentage(6),
    height: RFPercentage(6),
    borderRadius: RFPercentage(1),
  },
  afterselectimg: {
    width: RFPercentage(14),
    height: RFPercentage(6),
    borderRadius: RFPercentage(6),
  },
});
