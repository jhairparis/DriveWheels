import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import CustomView from "@/components/CustomView";
import { useSession } from "@/components/providers/SessionProvider";

const Profile = () => {
  const { session } = useSession();
  return (
    <CustomView>
      <Text variant="displayLarge">Profile</Text>
      <Text variant="labelMedium">The session: {session}</Text>
    </CustomView>
  );
};

export default Profile;
