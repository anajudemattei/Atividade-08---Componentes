import React from "react";
import { View, Text, StyleSheet, Dimensions, Platform } from "react-native";

const { width, height } = Dimensions.get("window");

export default function Card({ title }) {
  const getItems = () => {
    if (title === "Músicas") {
      return ["Rock", "Pop", "Sertanejo", "Clássica"];
    } else if (title === "Comprar") {
      return ["Bolsas", "Roupas", "Livros", "Esmaltes"];
    } else if (title === "Esportes") {
      return ["Futebol", "Dança", "Tênis", "Ginastica"];
    }
    return [];
  };

  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>
      <View style={styles.list}>
        {getItems().map((item, index) => (
          <Text key={index} style={styles.listItem}>
            - {item}
          </Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: width * 0.9,
    maxWidth: 400,
    padding: height * 0.02,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    marginTop: height * 0.03,
    justifyContent: "center", 
    alignItems: "center", 
    gap: 10,
  },
  cardTitle: {
    fontSize: Platform.OS === "ios" ? width * 0.05 : width * 0.045,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center", // Centraliza horizontalmente
  },
  list: {
    marginVertical: height * 0.01,
    alignItems: "center", // Centraliza os itens horizontalmente
  },
  listItem: {
    fontSize: width * 0.035,
    color: "#555",
    textAlign: "center", // Centraliza horizontalmente
  },
});
