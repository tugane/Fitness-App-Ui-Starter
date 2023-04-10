import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";

type Props = NativeStackScreenProps<RootStackParamList, "PlanOverview">;

const PlanOverviewScreen: React.FC<Props> = ({
  route,
  navigation: { goBack },
}) => {
  const workout = route.params.workout;
  return (
    <View>
      <Text>PlanOverviewScreen</Text>
    </View>
  );
};

export default PlanOverviewScreen;

const styles = StyleSheet.create({});
