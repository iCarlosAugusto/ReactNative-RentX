import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  StatusBar,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Button as Btn
} from "react-native";

import theme from "../../styles/theme";

import { Button } from "../../components/Button";

import { Container, Header, Title, SubTitle, Form, Footer } from "./styles";
import { Input } from "../../components/Input";
import { InputPassword } from "../../components/InputPassword";

export function SignIn() {
  const navigation = useNavigation<any>();

  const handleGoToSignUp = () => {
    console.log("ClicoU!");
    navigation.navigate("SignUp")
  };

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <StatusBar
            barStyle="dark-content"
            backgroundColor="transparent"
            translucent
          />
          <Header>
            <Title>Estamos{"\n"}quase lá.</Title>
            <SubTitle>
              Faça seu login para começar{"\n"}
              uma experiência incrível.
            </SubTitle>
          </Header>
          <Form>
            <Input iconName="mail" placeholder="Email" keyboardType="email-address"  autoCapitalize="none" autoCorrect={false}/>
            <InputPassword iconName="lock" placeholder="Senha" autoCorrect={false}/>
          </Form>
          <Footer>
            <Button
              title="Login"
              onPress={() => {console.log("AAAA")}}
              light
              enabled={true}
              loading={false}
            />

            <Button
              title="Criar conta gratuita"
              light
              onPress={handleGoToSignUp}
              enabled={true}
              loading={false}
            />
            
          </Footer>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
