import React, { useState } from "react";
import theme from "../../styles/theme";
import { StatusBar } from "react-native";
import { useTheme } from "styled-components";

import { BackButton } from "../../components/BackButton";
import { Button } from "../../components/Button";

import ArrowSvg from "../../assets/arrow.svg";

import {
  Container,
  Header,
  Title,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValue,
  Content,
  Footer,
} from "./styles";
import { Calendar } from "../../components/Calendar";

interface RentalPeriod {
  startFormatted: string;
  endFormatted: string;
}

export function Scheduling() {
  return (
    <Container>
      <Header>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />
        <BackButton
          onPress={() => console.log("clicou!")}
          color={theme.colors.shape}
        />

        <Title>
          Escolha uma {"\n"}
          data de início e {"\n"}
          fim do aluguel
        </Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue selected={false}>18/09/2003</DateValue>
          </DateInfo>

          <ArrowSvg />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue selected={false}></DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Content>
        <Calendar/>
      </Content>
        <Footer>
          <Button
            title="Confirmar"
            onPress={() => {
              console.log("clicou");
            }}
          />
        </Footer>
     
    </Container>
  );
}
