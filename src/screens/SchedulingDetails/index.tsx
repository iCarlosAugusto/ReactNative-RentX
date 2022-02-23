import React from "react";

import {
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Brand,
  Name,
  Description,
  Rent,
  Period,
  Price,
  About,
  Accessories,
  Footer,
  RentalPeriod,
  CalendarIcon,
  DateInfo,
  DateTitle,
  DateValue,
  RentalPrice,
  RentalPriceLabel,
  RentalPriceDetails,
  RentalPriceQuota,
  RentalPriceTotal,
} from "./styles";

import { Feather } from '@expo/vector-icons';
import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";
import { Accessory } from "../../components/Accessory";
import { RFValue } from 'react-native-responsive-fontsize';
import SpeedSvg from "../../assets/speed.svg";
import AccelerationSvg from "../../assets/acceleration.svg";
import ForceSvg from "../../assets/force.svg";
import GasolineSvg from "../../assets/gasoline.svg";
import ExchangeSvg from "../../assets/exchange.svg";
import PeopleSvg from "../../assets/people.svg";
import { useTheme } from 'styled-components'

import { Button } from "../../components/Button";
import { useNavigation } from "@react-navigation/native";

export function SchedulingDetails() {
  const theme = useTheme();
  const navigation = useNavigation<any>();

  const handleGoToConfirmation = () => {
    navigation.navigate('Confirmation');
  }

  return (
    <Container>
      <Header>
        <BackButton />
      </Header>

      <CarImages>
        <ImageSlider
          imagesUrl={[
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.WE7zYfoZ6de4Tp4uTEbOSQHaEK%26pid%3DApi&f=1",
          ]}
        />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>AUDI</Brand>
            <Name>Audio v2 Machine</Name>
          </Description>

          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 140</Price>
          </Rent>
        </Details>

        <Accessories>
          <Accessory name={"360 Km/h"} icon={SpeedSvg} />
          <Accessory name={"3.2s"} icon={AccelerationSvg} />
          <Accessory name={"800 HP"} icon={ForceSvg} />
          <Accessory name={"Gasolina"} icon={GasolineSvg} />
          <Accessory name={"Auto"} icon={ExchangeSvg} />
          <Accessory name={"2 pessoas"} icon={PeopleSvg} />
        </Accessories>

        <RentalPeriod>
          <CalendarIcon>
            <Feather 
              name="calendar"
              size={RFValue(24)}
              color={theme.colors.shape}
            />
          </CalendarIcon>

          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>21/02/2022</DateValue>
          </DateInfo>

          <Feather 
              name="chevron-right"
              size={RFValue(24)}
              color={theme.colors.shape}
            />

          <Feather 
              name="chevron-right"
              size={RFValue(10)}
              color={theme.colors.text}
          />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue>23/02/2022</DateValue>
          </DateInfo>
        </RentalPeriod>

        <RentalPrice>
          <RentalPriceLabel>TOTAL</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>R$ 200 x3 diárias</RentalPriceQuota>
            <RentalPriceTotal>R$ 1000</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>
      </Content>



      <Footer>
        <Button title="Confirmar" onPress={handleGoToConfirmation}/>
      </Footer>
    </Container>
  );
}
