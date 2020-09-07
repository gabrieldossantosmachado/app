import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

import { useNavigation } from "@react-navigation/native";


import styles from "./styles";

function SignIn() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.containerTextName}>
        <Text style={styles.textName}>App de Manutenção</Text>
      </View>

      <View style={styles.containerTextInput}>
        <TextInput placeholder="Usuário" style={styles.textInput} />

        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
          placeholder="Senha"
          style={styles.textInput}
        />
      </View>


      <View style={styles.containerButtons}>
        <TouchableOpacity
          onPress={() => navigation.navigate("CadastroChamado")}
          style={[styles.button, { backgroundColor: "#30CA63" }]}
        >
          <Text style={{ color: "#fff" }}>Acessar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default SignIn;
