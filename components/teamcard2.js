import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

const TeamCard = ({ item }) => {
  return (
    <Link
      href={{
        pathname: "/team/[team]",
        params: { team: item.id },
      }}
    >
      <TouchableOpacity style={styles.card}>
        {/* Gambar */}
        <Image source={{ uri: item.poster }} style={styles.cardImage} />
        {/* Teks dan Deskripsi */}
        <View style={styles.textContainer}>
          <Text style={styles.cardTitle}>{item.title}</Text>
          {item.description && (
            <Text style={styles.cardDescription}>{item.description}</Text>
          )}
        </View>
      </TouchableOpacity>
    </Link>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 10,
    borderRadius: 15,
    backgroundColor: "#5072A7",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: "hidden",
  },
  cardImage: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  textContainer: {
    padding: 8,
    alignItems: "center",
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  cardDescription: {
    fontSize: 12,
    color: "#666666",
    textAlign: "center",
    marginTop: 4,
  },
  cardDescription: {
    fontSize: 12,
    color: "#fff",
    textAlign: "left",
    marginTop: 4,
  },
});

export default TeamCard;
