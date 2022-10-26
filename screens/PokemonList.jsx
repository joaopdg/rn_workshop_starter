import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";

const pokemons = [
  { name: "Psyduck", type: "Water" },
  { name: "Charmander", type: "Fire" },
  { name: "Squirtle", type: "Water" },
  { name: "Bulbasaur", type: "Grass" },
  { name: "Pikachu", type: "Electric" },
  { name: "Eevee", type: "Normal" },
];

const PokemonList = () => {
  return (
    <View>
      <Text>PokemonList</Text>
      <FlatList
        data={pokemons}
        /* horizontal={true} */
        showsVerticalScrollIndicator={false}
        keyExtractor={(pokemon) => pokemon.name}
        renderItem={({ item }) => {
          return (
            <Text style={styles.textStyle}>
              {item.name} - type: {item.type}
            </Text>
          );
        }}
      />
    </View>
  );
};

export default PokemonList;

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
    borderWidth: 5,
    borderColor: "blue",
    padding: 20,
  },
});
