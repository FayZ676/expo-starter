import { Link } from "expo-router";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";

export default function PaywallScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ThemedView style={styles.container}>
      <ThemedText type="title">Premium Features</ThemedText>
      <ThemedText style={styles.description}>
        Unlock premium features to get the most out of the app.
      </ThemedText>

      <ThemedView style={styles.featureList}>
        <ThemedText>• Feature 1</ThemedText>
        <ThemedText>• Feature 2</ThemedText>
        <ThemedText>• Feature 3</ThemedText>
      </ThemedView>

      <Link href="/" dismissTo style={styles.link}>
        <ThemedText type="link">Close</ThemedText>
      </Link>
    </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  description: {
    marginTop: 20,
    textAlign: "center",
  },
  featureList: {
    marginTop: 30,
    alignSelf: "stretch",
  },
  link: {
    marginTop: 30,
    paddingVertical: 15,
  },
});
