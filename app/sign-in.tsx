import { login } from "@/lib/appwrite";
import { useGlobalContext } from "@/lib/global-provider";
import { Redirect } from "expo-router";
import React from "react";
import {
  Alert,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import icons from "../constants/icons";
import images from "../constants/images";

const SignIn = () => {
  const { refetch, isLoggedIn, loading } = useGlobalContext();

  if (!loading && isLoggedIn) return <Redirect href="/" />;

  const handleLogin = async () => {
    try {
      const result = await login();
      if (result) refetch();
    } catch (error) {
      console.error(error);
      Alert.alert("error", "Failed to login");
    }
  };
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerClassName="h-full">
        <Image
          source={images.onboarding}
          className="w-full h-4/6 p-4 "
          resizeMode="contain"
        />

        <View>
          <Text className="text-base text-center uppercase font-rubik-bold text-black-200 mt-2">
            Welcome to ReState
          </Text>
          <Text className="text-center font-rubik-bold text-black-300 text-3xl mt-2">
            Let's Get You Closer to {"\n"}
            <Text className="text-primary-300">Your Ideal Home</Text>
          </Text>
          <Text className="text-lg font-rubik text-center text-black-200 mt-12">
            Login to ReState with Google
          </Text>
          <TouchableOpacity
            className="bg-white rounded-full w-full py-5 mt-5 mx-2 "
            style={{
              // Android shadow
              elevation: 5,
              // iOS shadow (your existing shadow properties)
              shadowColor: "#71717a", // zinc-300 equivalent
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
            }}
            onPress={handleLogin}
          >
            <View className="flex flex-row items-center justify-center">
              <Image
                source={icons.google}
                className="w-5 h-5"
                resizeMode="contain"
              />
              <Text className="text-lg font-Rubik-Medium ml-4 text-black-300">
                Continue with Google
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
