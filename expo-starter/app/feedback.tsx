import { useRouter } from "expo-router";
import { StyleSheet, TextInput, Pressable, ScrollView } from "react-native";
import { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useThemeColor } from "@/hooks/use-theme-color";

export default function FeedbackScreen() {
  const [feedback, setFeedback] = useState("");
  const router = useRouter();
  const backgroundColor = useThemeColor({}, "background");
  const insets = useSafeAreaInsets();

  const handleSubmit = () => {
    // Placeholder for form submission logic
    console.log("Feedback submitted:", feedback);
    setFeedback("");
  };

  return (
    <ScrollView
      style={{ backgroundColor, flex: 1 }}
      contentContainerStyle={[
        styles.container,
        { paddingTop: insets.top, paddingBottom: insets.bottom },
      ]}
    >
      <ThemedText type="title">Feedback & Support</ThemedText>
      <ThemedText style={styles.description}>
        We'd love to hear from you. Share your thoughts or report issues.
      </ThemedText>

      <TextInput
        style={styles.input}
        placeholder="Enter your feedback..."
        placeholderTextColor="#888"
        multiline
        numberOfLines={6}
        value={feedback}
        onChangeText={setFeedback}
      />

      <Pressable style={styles.button} onPress={handleSubmit}>
        <ThemedText type="defaultSemiBold">Submit</ThemedText>
      </Pressable>

      <Pressable onPress={() => router.back()} style={styles.link}>
        <ThemedText type="link">Close</ThemedText>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    flexGrow: 1,
  },
  description: {
    marginTop: 10,
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 15,
    minHeight: 120,
    textAlignVertical: "top",
    backgroundColor: "#fff",
    color: "#000",
  },
  button: {
    marginTop: 15,
    padding: 15,
    borderRadius: 8,
    backgroundColor: "rgba(0, 122, 255, 1)",
    minWidth: 200,
    alignItems: "center",
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
