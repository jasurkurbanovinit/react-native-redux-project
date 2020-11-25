import React from 'react';
import {Button, TextInput, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {addArticle, setTitle} from './../redux/actions';

const Form = ({title, setTitle, addArticle}) => {
  const handleInput = () => {
    addArticle(title);
    setTitle('');
  };
  return (
    <View>
      <Text>Enter text</Text>
      <TextInput value={title} onChangeText={(e) => setTitle(e)} />
      <Button title="Add to store" onPress={handleInput} />
    </View>
  );
};

const mapStateToProps = (state) => ({
  title: state.title,
});

const mapDispatchToProps = (dispatch) => {
  return {
    addArticle: (a) => dispatch(addArticle(a)),
    setTitle: (a) => dispatch(setTitle(a)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Form);
