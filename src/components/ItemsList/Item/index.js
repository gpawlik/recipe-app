import React from 'react';
import PropTypes from 'prop-types';

import Container from './Container';
import Image from './Image';
import InfoBox from './InfoBox';
import Title from './Title';
import Info from './Info';

import { decode } from 'utils/htmlEntities';

const Item = ({ title, thumbnail, href, ingredients }) => {
  return (
    <Container>
      <Image thumbnail={thumbnail} />
      <InfoBox>
        <Title href={href} target="_blank">{decode(title)}</Title>
        <Info>{decode(ingredients)}</Info>
      </InfoBox>
    </Container>
  );
};

Item.propTypes = {
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  href: PropTypes.string,
  ingredients: PropTypes.string
};

export default Item;
