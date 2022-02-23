import React from 'react';
import { useWindowDimensions, StatusBar } from 'react-native';

import LogoSvg from '../../assets/logo_background_gray.svg';
import DoneSvg from '../../assets/done.svg';
import { ConfirmButton } from '../../components/CompleteButton';
//import { ConfirmButton } from '../../components/ConfirmButton';

import {
  Container,
  Content,
  Title,
  Message,
  Footer,
} from './styles';
import { useNavigation } from '@react-navigation/native';

interface Params {
  title: string;
  message: string;
  nextScreenRoute: string;
}

export function Confirmation(){
  const { width } = useWindowDimensions();
  const navigation = useNavigation<any>();

  const handleGoToHome = () => {
    navigation.navigate("Home");
  }

  return (
    <Container>
      <StatusBar 
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      
      <LogoSvg width={width} />

      <Content>
        <DoneSvg width={80} height={80}/>
        <Title>Carro alugado!</Title>

        <Message>
          Agora você só precisa ir {'\n'}
          até a concessionária RENTX {'\n'}
          pegar o seu veiculo
        </Message>
      </Content>

      <Footer>
        <ConfirmButton title="OK" onPress={handleGoToHome} />
      </Footer>
    </Container>
  );
}