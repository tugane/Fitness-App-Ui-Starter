import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";

type Props = NativeStackScreenProps<RootStackParamList, "OnBoarding">;

const OnBoardingScreen: React.FC<Props> = ({ navigation: { navigate } }) => {
  return (
    <View>
      <Text>OnBoardingScreen</Text>
    </View>
  );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({});
