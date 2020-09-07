import React, { useState, useEffect } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Picker,
  ActionSheetIOS,
  Platform,
} from "react-native";

import { Camera } from "expo-camera";

import { useNavigation } from "@react-navigation/native";

import { AntDesign } from "@expo/vector-icons";

import styles from "./styles";

function CadastroChamado() {
  const navigation = useNavigation();

  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [isOpenCamera, setIsOpenCamera] = useState(false);

  const renderListDepartamento = () => {
    if (Platform.OS === "ios") {
      ActionSheetIOS.showActionSheetWithOptions(
        {
          options: ["Voltar", "T.I", "RH", "Financeiro"],
          cancelButtonIndex: 0,
        },
        (buttonIndex) => {}
      );
    } else {
      return (
        <Picker
          selectedValue={() => {}}
          style={{ height: 50, width: 150 }}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="T.I" value="ti" />
          <Picker.Item label="RH" value="rh" />
          <Picker.Item label="Financeiro" value="financeiro" />
        </Picker>
      );
    }
  };

  const renderListPrioridade = () => {
    if (Platform.OS === "ios") {
      ActionSheetIOS.showActionSheetWithOptions(
        {
          options: ["Voltar", "Normal", "Alta", "Critica", "Baixa"],
          cancelButtonIndex: 0,
        },
        (buttonIndex) => {}
      );
    } else {
      return (
        <Picker
          selectedValue={() => {}}
          style={{ height: 50, width: 150 }}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="Normal" value="normal" />
          <Picker.Item label="Alta" value="alta" />
          <Picker.Item label="Critica" value="critica" />
          <Picker.Item label="Baixa" value="baixa" />
        </Picker>
      );
    }
  };

  const openCamera = async () => {
    const { status } = await Camera.requestPermissionsAsync();
    setHasPermission(status === "granted");

    setIsOpenCamera(true);
  };

  return (
    <View style={styles.container}>
      {isOpenCamera ? (
        <View style={{ flex: 1 }}>
          <Camera style={{ flex: 1 }} type={type}>
            <View
              style={{
                flex: 1,
                backgroundColor: "transparent",
                flexDirection: "row",
              }}
            >
              <TouchableOpacity
                style={{
                  flex: 0.1,
                  alignSelf: "flex-end",
                  alignItems: "center",
                }}
                onPress={() => {}}
              >
                <Text
                  style={{ fontSize: 18, marginBottom: 10, color: "white" }}
                >
                  Capturar imagem
                  
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  flex: 0.1,
                  alignSelf: "flex-end",
                  alignItems: "center",
                }}
                onPress={() => {
                  setIsOpenCamera(false);
                }}
              >
                <Text
                  style={{ fontSize: 18, marginBottom: 10, color: "white" }}
                >
                  Fechar camera
                </Text>
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      ) : (
        <>
          <View style={styles.containerTextName}>
            <Text style={styles.textName}>Cadastro de chamado</Text>
          </View>

          <View style={styles.containerTextInput}>
            <TextInput
              placeholder="Descrição do chamado"
              style={styles.textInput}
              multiline={true}
            />
          </View>

          <View style={styles.containerComboBox}>
            <TouchableOpacity
              onPress={renderListDepartamento}
              style={styles.comboBox}
            >
              <TextInput placeholder="Departamento" editable={false} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={renderListPrioridade}
              style={styles.comboBox}
            >
              <TextInput placeholder="Prioridade" editable={false} />
            </TouchableOpacity>
          </View>

          <View style={styles.containerPermissao}>
            <TouchableOpacity
              onPress={openCamera}
              style={[
                styles.comboBox,
                { flexDirection: "row", justifyContent: "space-between" },
              ]}
            >
              <Text>Imagem chamado</Text>

              <AntDesign name="camera" size={24} color="black" />
            </TouchableOpacity>
          </View>

          <View style={styles.containerButtons}>
            <TouchableOpacity
              onPress={() => alert("Enviando para o back-end...")}
              style={[styles.button, { backgroundColor: "#30CA63" }]}
            >
              <Text style={{ color: "#fff" }}>Enviar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate("SignIn")}
              style={[styles.button, { backgroundColor: "#30CA63" }]}
            >
              <Text style={{ color: "#fff" }}>Sair</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
}

export default CadastroChamado;
