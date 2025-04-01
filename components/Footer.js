import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>Footer</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    width: "100%",
    padding: 15,
    backgroundColor: "#7c3050",
    alignItems: "center",
    justifyContent: "center", 
    position: "absolute",
    bottom: 0,
  },
  footerText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center", 
  },
});
