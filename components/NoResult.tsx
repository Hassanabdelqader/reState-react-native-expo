import images from "@/constants/images";
import { Image, Text, View } from "react-native";

const NoResult = () => {
  return (
    <View className="flex items-center my-5">
      <Image
        source={images.noResult}
        className="w-11/12 h-80"
        resizeMode="contain"
      />
      <Text className="text-2xl  font-rubik-bold text-black-300 mt-5">
        No Results
      </Text>

      <Text className="text-base  text-black-100 mt-5">
        We can't find any result
      </Text>
    </View>
  );
};

export default NoResult;
