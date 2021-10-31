import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {scale} from 'lib/helpers/responsiveScaling';

const Search = ({search, setSearch}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Search by Title"
        placeholderTextColor="#826b28"
        value={search}
        onChange={(e) => setSearch(e.nativeEvent.text)}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    height: scale(40),
    margin: 10,
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'orange',
    borderRadius: 10,
    paddingLeft: 10,
    color: 'orange',
  },
});
