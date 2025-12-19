import { Link } from "expo-router";
import { StyleSheet, Pressable, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useThemeColor } from "@/hooks/use-theme-color";

export default function SettingsScreen() {
  const backgroundColor = useThemeColor({}, "background");
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      style={{ backgroundColor, flex: 1 }}
      contentContainerStyle={[
        styles.container,
        { paddingTop: insets.top, paddingBottom: insets.bottom },
      ]}
    >
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
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
