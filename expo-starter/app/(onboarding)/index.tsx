import { Link } from "expo-router";
import { StyleSheet, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { ThemedText } from "@/components/themed-text";
import { useThemeColor } from "@/hooks/use-theme-color";

export default function OnboardingStepOne() {
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
      <ThemedText type="title">Welcome</ThemedText>
      <ThemedText style={styles.description}>
        This is the first step of the onboarding process.
      </ThemedText>

      <Link href="/(onboarding)/step-two" style={styles.link}>
        <ThemedText type="link">Next</ThemedText>
      </Link>
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
    marginTop: 20,
    textAlign: "center",
  },
  link: {
    marginTop: 30,
    paddingVertical: 15,
  },
});
