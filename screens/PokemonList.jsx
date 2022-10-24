import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const pokemons = [
  { name: 'Psyduck', type: 'Water' },
  { name: 'Charmander', type: 'Fire' },
  { name: 'Squirtle', type: 'Water' },
  { name: 'Bulbasaur', type: 'Grass' },
  { name: 'Pikachu', type: 'Electric' },
  { name: 'Eevee', type: 'Normal' },
];

const PokemonList = () => {
  return (
    <View>
      <Text>PokemonList</Text>
    </View>
  );
};

export default PokemonList;

const styles = StyleSheet.create({});
