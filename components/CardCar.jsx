import React from "react";
import { View, Image } from "react-native";
import { Card, Avatar } from "react-native-paper";
import { useTheme } from "react-native-paper";

const CardCar = ({ nameCar, brand, nameCompany, image }) => {
  const { colors } = useTheme();

  const getInitials = (name) => {
	const nameArray = name.split(" ");
	const initials = nameArray.map((word) => word.charAt(0));
	return initials.join("").toUpperCase();
  };

  const url = `https://placehold.co/100x100/${colors.onSecondary.replace(
    "#",
    ""
  )}/${colors.onSurface.replace("#", "")}/png`;

  return (
    <Card mode="outlined" style={{ marginBottom: 10 }}>
      <Card.Title
        title={nameCar}
        subtitle={brand}
        left={(props) => <Avatar.Text {...props} label={getInitials(nameCompany)} />}
        right={(props) => (
          <View {...props}>
            <Image
              style={{
                width: 90,
                height: 90,
                borderBottomRightRadius: 14,
                borderTopRightRadius: 14,
              }}
              source={{
                uri: image || url,
              }}
            />
          </View>
        )}
      />
    </Card>
  );
};

export default CardCar;
