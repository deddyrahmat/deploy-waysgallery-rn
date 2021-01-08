import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Form, Item, Input, Button, Text } from 'native-base';

const Login = (props) => {
  return (
    <Container style={styles.container}>
      <Content>
        <Text style={styles.login}>Login</Text>
        <Form>
          <Item regular style={styles.formInputLogin}>
            <Input placeholder='Email'  />
          </Item>

          <Item regular style={styles.formInputLogin}>
            <Input placeholder='Password' secureTextEntry={true} />
          </Item>
          <Button onPress={() => props.navigation.navigate("HomeScreen")} full primary style={styles.button}>
            <Text> Login </Text>
          </Button>
          <Text onPress={() => props.navigation.navigate("RegisterScreen")}  style={styles.navAuth}>Register Here</Text>
        </Form>
      </Content>
    </Container>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    paddingTop: 90,
    paddingLeft : 20,
    paddingRight : 20
  },
  login:{
    color : "#2FC4B2",
    fontWeight:'bold',
    fontSize:25,
    marginBottom:25
  },
  navAuth:{
    marginTop: 25,
    textAlign: 'center'
  },

  formInputLogin : {
    marginBottom : 20,
    backgroundColor: "#E7E7E7",
    borderStyle:"solid",
    borderColor: "#2FC4B2",
    borderBottomWidth: 2,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2
  },
  button: {
    backgroundColor:"#2FC4B2",
    borderRadius:5,
    marginTop: 20
  }
})