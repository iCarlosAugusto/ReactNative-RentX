import { StatusBar } from "react-native";
import React from "react";
import { RFValue } from 'react-native-responsive-fontsize';
import { Text, View } from "react-native";
import { Container, Header, HeaderContent, TotalCars, CarList } from "./styles";
import Logo from '../../assets/logo.svg';

import { Car } from "../../components/Car";

export function Home() {

    const CarData = {
        brand: 'Audi',
        name: 'Audi v2 Machine',
        rent: {
            period: '12 Dias',
            price: 120
        },
        thumbnail: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.1j8dSkMLTstDcQ65JbUKrgHaE4%26pid%3DApi&f=1'
    }
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <TotalCars>
             12 carros
            </TotalCars>
        </HeaderContent>
      </Header>
      <CarList 
          data={[1,2,3,4,5,6]}
          keyExtractor={item => String(item)}
          renderItem={({ item }) => 
            <Car data={CarData} />
          }
        /> 
    </Container>
  );
}

export default Home;
