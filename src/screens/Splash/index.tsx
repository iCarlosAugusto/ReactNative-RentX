import React from "react";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { StyleSheet, Button, Dimensions } from "react-native";

export function Splash() {
  const offset = useSharedValue(0);

  const WIDTH = Dimensions.get('window').width;

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{  translateX: withTiming(offset.value) }],
    };
  });

  return (
    <>
      <Animated.View style={[styles.box, animatedStyles]} />
      <Button
         onPress={() => (offset.value = Math.random() * WIDTH - 100)}
        title="Move"
      />
    </>
  );
}

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: "red",
  },
});
