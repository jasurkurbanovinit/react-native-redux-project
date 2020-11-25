import React from 'react';
import {Text} from 'react-native';
import {connect} from 'react-redux';

const List = ({articles}) => {
  return (
    <>
      {articles.map((el) => (
        <Text style={{fontWeight: 'bold'}} key={el.key}>
          {el}
        </Text>
      ))}
    </>
  );
};

const mapStateToProps = (state) => {
  return {articles: state.articles};
};
export default connect(mapStateToProps)(List);
