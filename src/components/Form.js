import React from 'react';
import {Button, TextInput, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addArticle, setTitle} from './../redux/actions';

const Form = () => {
  const title = useSelector((state) => state.title);
  const dispatch = useDispatch();

  const handleInput = () => {
    dispatch(addArticle(title));
    dispatch(setTitle(''));
  };
  return (
    <View>
      <Text>Enter text</Text>
      <TextInput value={title} onChangeText={(e) => dispatch(setTitle(e))} />
      <Button title="Add to store" onPress={handleInput} />
    </View>
  );
};

export default Form;
