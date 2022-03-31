import React from "react";
import { ActivityIndicator } from "react-native";
import { RectButtonProps } from "react-native-gesture-handler";
import { Container, Title } from "./styles";
import { useTheme } from "styled-components";

interface Props extends RectButtonProps {
  title: string;
  color?: string;
  enabled?: boolean;
  loading?: boolean;
  light?: boolean;
}

export function Button({
  title,
  color,
  enabled = true,
  loading = false,
  light = false,
  onPress,
  ...rest
}: Props) {

  const theme = useTheme();
  return (
    <Container
      {...rest}
      color={color}
      onPress={onPress}
      enabled={enabled}
      style={{ opacity: enabled ? 1 : 0.5 }}
    >
      {loading === true && enabled === false ? <ActivityIndicator color={theme.colors.shape} /> : <Title light={light}>{title}</Title> }   
    </Container>
  );
}
