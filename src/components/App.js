import React from 'react';
import {Text} from 'react-native';
import List from './../components/List';
import Form from './../components/Form';

const App = () => {
  return (
    <>
      <Text>Articles</Text>
      <List />
      <Text>Add Articles</Text>
      <Form />
    </>
  );
};

export default App;
