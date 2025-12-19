import { Link } from "expo-router";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";

export default function OnboardingStepTwo() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ThemedView style={styles.container}>
      <ThemedText type="title">Step 2</ThemedText>
      <ThemedText style={styles.description}>
        This is the second step of the onboarding process.
      </ThemedText>

      <Link href="/(onboarding)/step-three" style={styles.link}>
        <ThemedText type="link">Next</ThemedText>
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
  link: {
    marginTop: 30,
    paddingVertical: 15,
  },
});
