import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import GasolineSvg from "../../assets/gasoline.svg";
import { CarInterface } from "../../interfaces/CarInterface";

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
import { getAccessoryIcon } from "../../utils/getAccessoryIcon";

interface Props extends RectButtonProps {
  data: CarInterface;
  onPress?: () => void;
};

export function Car({ data, onPress, ...rest} : Props) {

  const MotorIcon = getAccessoryIcon(data.fuel_type);

  return (
    <Container {...rest} onPress={onPress}>
      <Details>
        <Brand>{data.brand}</Brand>
        <Name>{data.name}</Name>

        <About>
          <Rent>
            <Period>{data.period}</Period>
            <Price>{data.price}</Price>
          </Rent>

          <Type>
            <MotorIcon/>
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
