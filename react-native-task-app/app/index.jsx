import { View, Text, StyleSheet } from "react-native";
import React from "react";
import {
  FlatList,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native-gesture-handler";

import { DrawerActions } from "@react-navigation/native";
import { useNavigation } from "expo-router";

const index = () => {
  const navigation = useNavigation();

  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };
  return (
    <View style={styles.screen}>
      <View style={styles.heroView}>
        <Text style={styles.heroTxt}>Welcome back, Demo!</Text>
        <Text style={styles.secondaryTxt}>
          <Text style={{ fontSize: 20, color: "#f7f7f7" }}>
            You're now logged in to the Dashboard.
          </Text>
          {"\n"}
          {"\n"}
          <Text>
            Access all the tools and features to manage your account, analyze
            data, and more from here.
          </Text>
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: "#ff5e00",
            padding: 5,
            paddingHorizontal: 50,
            marginTop: 50,
            borderRadius: 5,
          }}
          onPress={openDrawer}
        >
          <Text style={{ color: "white", padding: 5, fontSize: 15 }}>
            Explore
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.applications}>
        <Text style={styles.applicationsTab}>Applied Jobs</Text>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  heroView: {
    height: "50%",
    backgroundColor: "#636dc9",
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  heroTxt: {
    fontSize: 40,
    color: "white",
    fontWeight: "800",
  },
  secondaryTxt: {
    fontSize: 15,
    color: "#d3cfcf",
    fontWeight: "600",
    textAlign: "center",
    padding: 10,
  },
  applications: {
    padding: 20,
  },
  applicationsTab: {
    backgroundColor: "#bdbaba84",
    width: 100,
    textAlign: "center",
    padding: 5,
    borderRadius: 5,
    fontWeight: "bold",
  },
});

export default index;
