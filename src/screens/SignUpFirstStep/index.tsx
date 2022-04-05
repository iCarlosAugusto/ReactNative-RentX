import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Yup from "yup";


import { BackButton } from "../../components/BackButton";
import { Bullet } from "../../components/Bullet";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import {
  Container,
  Header,
  Steps,
  Title,
  Subtitle,
  Form,
  FormTitle,
} from "./styles";

export function SignUpFirstStep() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userCNH, setUserCNH] = useState("");

  const navigation = useNavigation<any>();

  const handleSignUpFirstStep = async() => {
    try {
      const schema = Yup.object().shape({
        userName: Yup.string().required("Nome é necessário"),
        userEmail: Yup.string()
          .email("Email inválido")
          .required("Email é necessário"),
        userCNH: Yup.string().required("CNH é obrigatório"),
      });

      const dataUser = {userName, userEmail, userCNH};

      await schema.validate(dataUser);
      console.log("dataUser from 1step: "+ dataUser);
      navigation.navigate("SignUpSecondStep", dataUser);
    } catch (error) {
      if(error instanceof Yup.ValidationError){
        Alert.alert("Erro", error.message);
      }
    }
  };

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Header>
            <BackButton onPress={() => {}} />
            <Steps>
              <Bullet active />
              <Bullet />
            </Steps>
          </Header>

          <Title>Crie sua{"\n"}conta</Title>
          <Subtitle>
            Faça seu cadastro de{"\n"}
            forma rápida e fácil
          </Subtitle>

          <Form>
            <FormTitle>1. Dados</FormTitle>
            <Input
              iconName="user"
              placeholder="Nome"
              onChangeText={setUserName}
              value={userName}
            />
            <Input
              iconName="mail"
              placeholder="E-mail"
              keyboardType="email-address"
              onChangeText={setUserEmail}
              value={userEmail}
            />
            <Input
              iconName="credit-card"
              placeholder="CNH"
              keyboardType="numeric"
              onChangeText={setUserCNH}
              value={userCNH}
            />
          </Form>

          <Button title="Próximo" onPress={handleSignUpFirstStep} />
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
