import React, { useState, useRef } from "react";
import { FlatList, ViewToken } from "react-native";

import { Container, ImageIndexes, CarImageWrapper, CarImage, ImageIndex } from "./styles";

interface Props {
  imagesUrl: string[];
}

interface ChangeImageProps {
  viewableItems: ViewToken[];
  changed: ViewToken[];
}

export function ImageSlider({ imagesUrl }: Props) {
  return (
    <Container>
      <ImageIndexes>
        <ImageIndex active={true} />
        <ImageIndex active={false} />
        <ImageIndex active={false} />
      </ImageIndexes>

      <CarImageWrapper>
        <CarImage 
            source={{uri: imagesUrl[0]}}
            resizeMode="contain" 
        />
      </CarImageWrapper>
    </Container>
  );
}
