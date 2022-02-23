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
  Footer
} from "./styles";

import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";
import { Accessory } from "../../components/Accessory";

import SpeedSvg from "../../assets/speed.svg";
import AccelerationSvg from "../../assets/acceleration.svg";
import ForceSvg from "../../assets/force.svg";
import GasolineSvg from "../../assets/gasoline.svg";
import ExchangeSvg from "../../assets/exchange.svg";
import PeopleSvg from "../../assets/people.svg";

import { Button } from "../../components/Button";
import { useNavigation } from "@react-navigation/native";

export function CarDetails() {

  const navigation = useNavigation<any>();

  const handleGoToScheduling = () => {
    navigation.navigate('Scheduling');
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

        <About>
          essencialmente inalterado. Se popularizou na década de 60, quando a
          Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais
          a ser integrado a softwares de editoração

        </About>
      </Content>
      <Footer>
        <Button title="Confirmar" onPress={handleGoToScheduling}/>
      </Footer>
    </Container>
  );
}
