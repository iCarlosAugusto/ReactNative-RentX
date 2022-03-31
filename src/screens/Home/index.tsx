import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components";
import { Ionicons } from '@expo/vector-icons';
import { Container, Header, HeaderContent, TotalCars, CarList, MyCarsButton } from "./styles";
import Logo from "../../assets/logo.svg";
import { Car } from "../../components/Car";
import api from "../../services/api";
import { CarInterface } from "../../interfaces/CarInterface";
import { Load } from "../../components/Load";

export function Home() {
  const navigation = useNavigation<any>();
  const [carData, setCarData] = useState<CarInterface[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const theme = useTheme();

  useEffect(() => {
    const loadDataCar = async () => {
      try {
        const response = await api.get("/cars");
        setCarData(response.data);
      } catch (error) {
        console.log("Erro na API: "+error);
      } finally {
        setIsLoading(false);
      }
    };

    loadDataCar();
  }, []);

  const handleGoToCarDetails = (car : CarInterface) => {
    navigation.navigate("CarDetails", {car});
  };

  const handleGoToMyCars = () => {
    navigation.navigate("MyCars");
  };

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
          <TotalCars>12 carros</TotalCars>
        </HeaderContent>
      </Header>
      {isLoading ? (
        <Load />
      ) : (
        <CarList
          data={carData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Car data={item} onPress={() => handleGoToCarDetails(item)} />
          )}
        />
      )}
      <MyCarsButton onPress={handleGoToMyCars}>
          <Ionicons name="ios-car-sport"
            size={34}
            color={theme.colors.shape}
          />
      </MyCarsButton>
    </Container>
  );
}

export default Home;
