import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

import CadastroChamado from "../pages/CadastroChamado";
import SignIn from "../pages/SignIn";

function AppRoutes() {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          cardStyleInterpolator:
            CardStyleInterpolators.forScaleFromCenterAndroid,
          gestureEnabled: false,
          headerShown: false,
        }}
      >
        <Screen name="SignIn" component={SignIn} />

        <Screen name="CadastroChamado" component={CadastroChamado} />
      </Navigator>
    </NavigationContainer>
  );
}

export default AppRoutes;
