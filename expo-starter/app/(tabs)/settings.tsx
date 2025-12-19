import { Link } from "expo-router";
import { StyleSheet, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";

export default function SettingsScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ThemedView style={styles.container}>
        <ThemedText type="title" style={styles.title}>
          Settings
        </ThemedText>

        <ThemedView style={styles.section}>
          <Link href="/feedback" asChild>
            <Pressable style={styles.button}>
              <ThemedText type="defaultSemiBold">Feedback & Support</ThemedText>
            </Pressable>
          </Link>
        </ThemedView>
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
    padding: 20,
  },
  title: {
    marginBottom: 20,
  },
  section: {
    marginTop: 10,
  },
  button: {
    padding: 15,
    borderRadius: 8,
    backgroundColor: "rgba(128, 128, 128, 0.1)",
    marginBottom: 10,
  },
});
