import React from "react";
import { View } from "react-native";
import { FAB, Text } from "react-native-paper";
import CustomView from "@/components/CustomView";
import { useSession } from "@/components/providers/SessionProvider";

const Profile = () => {
  const { session, signOut } = useSession();

  return (
    <CustomView>
      <Text variant="displayLarge">Profile</Text>
      <Text variant="labelMedium">Name: {session.firstName}</Text>
      <Text variant="labelMedium">Email: {session.email}</Text>

      <FAB
        icon="logout"
        onPress={signOut}
        style={{
          position: "absolute",
          margin: 16,
          right: 0,
          bottom: 0,
        }}
      />
    </CustomView>
  );
};

export default Profile;
