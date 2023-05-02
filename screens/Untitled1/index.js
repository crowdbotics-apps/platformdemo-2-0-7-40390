import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled1 = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><Pressable onPress={() => {
        navigation.navigate("barcodeScanner");
      }}><View style={styles.SgbAZtwm}><Text style={styles.pORyJZCx}>{"click"}</Text></View></Pressable></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  SgbAZtwm: {
    height: 60,
    width: 140,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777"
  },
  pORyJZCx: {
    width: 141,
    height: 50,
    lineHeight: 45,
    fontSize: 14,
    borderRadius: 0,
    textAlign: "center",
    position: "absolute",
    left: -0.5,
    top: 5
  }
});
export default Untitled1;