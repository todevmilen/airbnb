import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import Colors from "@/constants/Colors";

const categories = [
  {
    name: "Tiny homes",
    icon: "home",
  },
  {
    name: "Cabins",
    icon: "home-siding",
  },
  {
    name: "Trending",
    icon: "local-fire-department",
  },
  {
    name: "Play",
    icon: "videogame-asset",
  },
  {
    name: "City",
    icon: "apartment",
  },
  {
    name: "Beachfront",
    icon: "beach-access",
  },
  {
    name: "Contryside",
    icon: "nature-people",
  },
];

const ExploreHeader = () => {
  return (
    <SafeAreaView>
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <View style={styles.container}>
          <View style={styles.actionRow}>
            <Link href="/(modals)/booking" asChild>
              <TouchableOpacity style={styles.searchBtn}>
                <Ionicons name="search" size={24} />
                <View>
                  <Text style={{ fontFamily: "mon-sb" }}>Where to</Text>
                  <Text style={{ fontFamily: "mon", color: Colors.grey }}>
                    Anywhere · Any week
                  </Text>
                </View>
              </TouchableOpacity>
            </Link>
            <TouchableOpacity style={styles.filterBtn}>
              <Ionicons name="options-outline" size={24} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: 130,
  },
  actionRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingBottom: 16,
    gap: 10,
  },
  filterBtn: {
    padding: 10,
    borderWidth: 1,
    borderColor: Colors.grey,
    borderRadius: 24,
  },
  searchBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    borderColor: "#c2c2c2",
    borderWidth: StyleSheet.hairlineWidth,
    flex: 1,
    padding: 14,
    borderRadius: 30,
    backgroundColor: "#fff",

    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 8,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
});

export default ExploreHeader;
