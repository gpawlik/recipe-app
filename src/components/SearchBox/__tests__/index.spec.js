import React from 'react';
import { create } from 'react-test-renderer';

import SearchBox from '../';

const initialProps = {
  onChange: () => {},
  onSearch: () => {}
};

const mockComponent = props => {
  const finalProps = {
    ...initialProps,
    ...props
  };

  return (
    <SearchBox {...finalProps} />
  );
};

describe('SearchBox', () => {
  it('should render with the default props', () => {
    const tree = create(mockComponent()).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render with custom input value', () => {
    const props = {
      value: 'foo'
    };
    const tree = create(mockComponent(props)).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render with disabled button', () => {
    const props = {
      isDisabled: true
    };
    const tree = create(mockComponent(props)).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
