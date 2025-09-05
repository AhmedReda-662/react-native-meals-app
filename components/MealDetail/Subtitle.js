import { Text, View, StyleSheet } from "react-native";

export default function Subtitle({ children }) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  subtitle: {
    textAlign: "center",
    color: "#e2b497",
    fontSize: 18,
    fontWeight: "bold",
  },
  subtitleContainer: {
    padding: 6,
    marginVertical: 4,
    borderBottomColor: "#e2b497",
    marginHorizontal: 12,
    borderBottomWidth: 2,
  },
});
