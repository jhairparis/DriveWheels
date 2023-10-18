import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Searchbar, Text, useTheme } from "react-native-paper";
import CustomView from "@/components/CustomView";
import ItemCar from "@/components/ui/cards/ItemCar";
import { Image } from "react-native";
import Logo from "@/assets/icon_.png";
import LogoDark from "@/assets/icon.png";
import { useSession } from "@/components/providers/SessionProvider";

const fakeData = [
  {
    nameCar: "Model S",
    brand: "Tesla",
    nameCompany: "Tu Carro.com",
  },
  {
    nameCar: "Civic",
    brand: "Honda",
    nameCompany: "Carros Felices",
    image: "https://placehold.co/100x100/000000/FFFFFF/png",
  },
  {
    nameCar: "Corolla",
    brand: "Toyota",
    nameCompany: "Volis this",
  },
  {
    nameCar: "Mustang",
    brand: "Ford",
    nameCompany: "Thing blues",
    image: "https://placehold.co/100x100/000000/FFFFFF/png",
  },
  {
    nameCar: "Camaro",
    brand: "Chevrolet",
    nameCompany: "funny cars",
  },
  {
    nameCar: "Challenger",
    brand: "Dodge",
    nameCompany: "Blood cars",
    image: "https://placehold.co/100x100/000000/FFFFFF/png",
  },
  {
    nameCar: "F-150",
    brand: "Ford",
    nameCompany: "Safe car",
  },
  {
    nameCar: "Wrangler",
    brand: "Jeep",
    nameCompany: "Fantastic cars",
    image: "https://placehold.co/100x100/000000/FFFFFF/png",
  },
  {
    nameCar: "C-Class",
    brand: "Mercedes-Benz",
    nameCompany: "Blues cars",
  },
  {
    nameCar: "Aventador",
    brand: "Lamborghini",
    nameCompany: "Solo cars",
    image: "https://placehold.co/100x100/000000/FFFFFF/png",
  },
];

const Home = () => {
  const { dark } = useTheme();
  const { signOut } = useSession();

  return (
    <CustomView>
      <View style={styles.container}>
        <View style={styles.searchBarContainer}>
          <Image
            style={styles.searchBarImg}
            source={dark ? LogoDark : Logo}
            contentFit="contain"
            contentPosition="bottom"
          />
          <Searchbar placeholder="Mazda 5" style={styles.searchBar} />
        </View>
        <Text
          variant="titleMedium"
          style={styles.title}
          onPress={() => signOut()}
        >
          Destecados
        </Text>
        <ScrollView>
          {fakeData.map((car, i) => (
            <ItemCar
              key={i}
              nameCar={car.nameCar}
              nameCompany={car.nameCompany}
              brand={car.brand}
              image={car.image}
            />
          ))}
        </ScrollView>
      </View>
    </CustomView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  searchBarContainer: {
    flexDirection: "row",
  },
  searchBarImg: {
    width: 51,
    height: 51,
    marginRight: 10,
  },
  searchBar: {
    flex: 1,
  },
  title: {
    marginVertical: 20,
  },
});

export default Home;
