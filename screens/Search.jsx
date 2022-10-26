import { StyleSheet, Text, View, TextInput, Button, Image } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [query, setQuery] = useState(" ");
  const [pokemon, setPokemon] = useState(null);

  const getPokemon = async () => {
    let response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`
    );
    setPokemon(response.data);
    setQuery("");
    console.log(response.data);
  };

  return (
    <View>
      <Text>Search</Text>
      <TextInput
        style={styles.inputStyle}
        value={query}
        onChangeText={(e) => setQuery(e)}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Button title="Search for a Pokemon" onPress={getPokemon} />
      {pokemon && (
        <>
          <View>
            <Text>{pokemon.name}</Text>
            <Image
              source={{
                uri: pokemon.sprites.versions["generation-v"]["black-white"]
                  .animated.front_default,
              }}
              style={styles.image}
            />
          </View>
        </>
      )}
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  inputStyle: {
    borderWidth: 5,
    borderColor: "red",
  },
  image: {
    width: 120,
    height: 120,
  },
});
