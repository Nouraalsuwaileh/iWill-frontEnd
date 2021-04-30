import React, { useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Tab from "./Tab";

const { width } = Dimensions.get("screen");

const TabBar = ({ state, navigation }) => {
  const [selected, setSelected] = useState("Home"); // start point screen
  const { routes } = state;
  const renderColor = (
    // on tab the icon the color change from black to red
    currentTab
  ) => (currentTab === selected ? "#ffffff" : "#333432");

  const handlePress = (activeTab, index) => {
    if (state.index !== index) {
      setSelected(activeTab);
      navigation.navigate(activeTab);
    }
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {routes.map((route, index) => (
          <Tab
            tab={route}
            icon={route.params.icon}
            onPress={() => handlePress(route.name, index)}
            color={renderColor(route.name)}
            key={route.key}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    bottom: 0,
    width,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#E88873",
    height: 60,
    width: 400,
    // borderRadius: 100,
    elevation: 2,
  },
});

export default TabBar;
