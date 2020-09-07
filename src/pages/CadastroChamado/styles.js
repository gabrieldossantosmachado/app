import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
  containerTextName: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: getStatusBarHeight() + 36,
  },
  textName: {
    fontSize: 18,
  },
  containerTextInput: {
    marginTop: 72,
  },
  textInput: {
    alignSelf: "stretch",
    alignItems: "center",
    borderColor: "#ebebeb",
    borderWidth: 1,
    borderRadius: 6,
    height: 136,
    marginBottom: 8,
    marginLeft: 16,
    marginTop: 8,
    marginRight: 16,
    padding: 20,
    fontSize: 16,
    paddingTop: 16,
  },
  containerButtons: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    alignSelf: "stretch",
    alignItems: "center",
    borderColor: "#ebebeb",
    borderWidth: 1,
    borderRadius: 6,
    marginBottom: 8,
    marginLeft: 16,
    marginTop: 8,
    marginRight: 16,
    padding: 20,
    width: 136,
  },
  containerComboBox: {
    marginTop: 16,
  },
  comboBox: {
    alignSelf: "stretch",
    borderColor: "#ebebeb",
    borderWidth: 1,
    borderRadius: 6,
    marginBottom: 8,
    marginLeft: 16,
    marginTop: 8,
    marginRight: 16,
    padding: 20,
  },
  containerPermissao: {},
});

export default styles;
