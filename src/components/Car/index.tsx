import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import GasolineSvg from "../../assets/gasoline.svg";

import {
  Container,
  Details,
  Brand,
  Name,
  About,
  Rent,
  Period,
  Price,
  Type,
  CarImage,
} from "./styles";

interface CarData {
    brand: string,
    name: string,
    rent: {
        period: string,
        price: number
    },
    thumbnail: string
}

interface Props {
  data: CarData;
  onPress: () => void;
}

export function Car({ data, onPress, ...rest} : Props) {
  return (
    <Container {...rest} onPress={onPress}>
      <Details>
        <Brand>{data.brand}</Brand>
        <Name>{data.name}</Name>

        <About>
          <Rent>
            <Period>{data.rent.period}</Period>
            <Price>{data.rent.price}</Price>
          </Rent>

          <Type>
            <GasolineSvg />
          </Type>
        </About>
      </Details>

      <CarImage
        source={{
          uri: data.thumbnail,
        }}
        resizeMode="contain"
      />
    </Container>
  );
}
