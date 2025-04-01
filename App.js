import { View, StyleSheet } from "react-native";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Card title="Músicas" />
        <Card title="Comprar" />
        <Card title="Esportes" />
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center", 
    alignItems: "center", 
  },
  content: {
    flex: 1,
    justifyContent: "center", 
    alignItems: "center", 
    marginTop: 50,
    paddingBottom: 80,
  },
  cardRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    gap: 20,
  },
  card: {
    width: 320,
    padding: 20,
    backgroundColor: "#d3829f",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    marginTop: 20,
    gap: 10,
    justifyContent: "center", 
    alignItems: "center",
  },
  input: {
    height: 40,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 10,
    padding: 10,
  },
  textRed: {
    color: "red",
    marginTop: 20,
    fontSize: 20,
  },
  textGreen: {
    color: "green",
    marginTop: 20,
    fontSize: 20,
  },
});