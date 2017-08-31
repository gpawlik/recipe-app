import React from 'react';
import PropTypes from 'prop-types';

import Container from './Container';
import Box from './Box';
import Input from './Input';
import Button from './Button';

const Searchbox = ({ value, onChange, onSearch, isDisabled }) => {
  return (
    <Container>
      <Box>
        <Input type="search" value={value} onChange={onChange} />
        <Button onClick={onSearch} disabled={isDisabled}>Search</Button>
      </Box>
    </Container>
  );
};

Searchbox.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool
};

export default Searchbox;
