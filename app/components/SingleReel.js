import React, { useRef, useState } from "react";
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { Video } from "expo-av";
import Ionic from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";

const SingleReel = ({ item, index, currentIndex }) => {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  const videoRef = useRef(null);

  const onBuffer = (buffer) => {
    console.log("buffring", buffer);
  };
  const onError = (error) => {
    console.log("error", error);
  };

  const [mute, setMute] = useState(false);

  const [like, setLike] = useState(item.isLike);

  return (
    <View
      style={{
        width: windowWidth,
        height: windowHeight,
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => setMute(!mute)}
        style={styles.reelmute}
      >
        <Video
          ref={videoRef}
          source={item.video}
          isLooping
          shouldPlay={currentIndex === index}
          resizeMode="cover"
          isMuted={mute}
          style={{ flex: 1 }}
          onBuffer={onBuffer}
          onError={onError}
        />
      </TouchableOpacity>

      <View
        style={{
          position: "absolute",
          width: windowWidth,
          zIndex: 1,
          bottom: 0, //edited
          padding: 10,
        }}
      >
        <View>
          <TouchableOpacity style={{ width: 150 }}>
            <View style={styles.mainctn}>
              <View style={styles.secCtn}>
                <Image source={item.postProfile} style={styles.profileimg} />
              </View>
              <Text style={styles.profiletitle}>{item.title}</Text>
            </View>
          </TouchableOpacity>
          <Text style={styles.description}>{item.description}</Text>
          <View style={{ flexDirection: "row", padding: 10 }}>
            <Ionic name="ios-musical-note" style={styles.noteIcon} />
            <Text style={styles.textaudio}>Original Audio</Text>
          </View>
        </View>
      </View>
      <View style={styles.lefticonsmain}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setLike(!like)}
          style={{ padding: 10 }}
        >
          <AntDesign
            name={like ? "heart" : "hearto"}
            style={{ color: like ? "red" : "white", fontSize: 25 }}
          />
          <Text style={{ color: "white" }}>{item.likes}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ padding: 10 }}>
          <Ionic
            name="ios-chatbubble-outline"
            style={{ color: "white", fontSize: 25 }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{ padding: 10 }}>
          <Ionic
            name="paper-plane-outline"
            style={{ color: "white", fontSize: 25 }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{ padding: 10 }}>
          <Feather
            name="more-vertical"
            style={{ color: "white", fontSize: 25 }}
          />
        </TouchableOpacity>
        <View style={styles.mainImg}>
          <Image source={item.postProfile} style={styles.imgProfile} />
        </View>
      </View>
    </View>
  );
};

export default SingleReel;
const styles = StyleSheet.create({
  reelmute: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  mainctn: { width: 100, flexDirection: "row", alignItems: "center" },
  secCtn: {
    width: 32,
    height: 32,
    borderRadius: 100,
    backgroundColor: "white",
    margin: 10,
  },
  profileimg: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 100,
  },
  profiletitle: { color: "white", fontSize: 16 },
  description: { color: "white", fontSize: 14, marginHorizontal: 10 },
  noteIcon: { color: "white", fontSize: 16 },
  textaudio: { color: "white" },
  lefticonsmain: {
    position: "absolute",
    bottom: 10, //edited
    right: 0,
  },
  mainImg: {
    width: 30,
    height: 30,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "white",
    margin: 10,
  },
  imgProfile: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    resizeMode: "cover",
  },
});
