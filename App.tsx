import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import axios from "axios";
import { useFetch } from "./useFetch";

export default function App() {
  const [zipcode, setipCode] = useState("02893");
  const { data, loading } = useFetch("urlHolder");

  const urlHolder =
    "http://api.weatherapi.com/v1/" +
    "current.json" +
    "?q=02893" +
    "&key=a704e79f06554918bc6230316231608";

  return console.log(useFetch(urlHolder));
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
