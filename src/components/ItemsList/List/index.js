import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

import Container from './Container';
import Item from 'components/ItemsList/Item';
import EmptyView from 'components/ItemsList/EmptyView';

const List = ({ data }) => {
  const results = data.map(({ title, thumbnail, href, ingredients }) => {
    return (
      <Item
        title={title}
        thumbnail={thumbnail}
        href={href}
        ingredients={ingredients}
        key={shortid.generate()}
      />
    );
  });

  return (
    <Container>
      {data.length ? results : <EmptyView />}
    </Container>
  );
};

List.propTypes = {
  data: PropTypes.array.isRequired
};

export default List;
