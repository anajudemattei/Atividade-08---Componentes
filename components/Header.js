import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Header</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    padding: 30,
    backgroundColor: "#7c3050",
    alignItems: "center",
    justifyContent: "center", 
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center", 
  },
});
