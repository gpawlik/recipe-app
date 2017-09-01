import React from 'react';
import { shallow, mount } from 'enzyme';

import ItemsList from 'components/ItemsList/List';
import { RecipeList, mapDispatchToProps } from '../index';
import { fetch } from 'domains/Recipes/actions';

describe('<RecipeList />', () => {
  it('should render the recipe list', () => {
    const renderedComponent = shallow(
      <RecipeList recipes={[]} />
    );

    expect(renderedComponent.contains(<ItemsList data={[]} />)).toEqual(true);
  });

  it('should render fetch the recipes on mount', () => {
    const fetchSpy = jest.fn();

    mount(
      <RecipeList
        recipes={[]}
        onRecipesFetch={fetchSpy}
      />
    );
    expect(fetchSpy).toHaveBeenCalled();
  });

  describe('handleRecipesFetch', () => {
    it('should be injected', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);

      expect(result.onRecipesFetch).toBeDefined();
    });

    it('should dispatch recipes fetch when called', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);

      result.onRecipesFetch();
      expect(dispatch).toHaveBeenCalledWith(fetch());
    });

    it('should dispatch recipes fetch with custom value if called', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      const value = 'foo';

      result.onRecipesFetch(value);
      expect(dispatch).toHaveBeenCalledWith(fetch('foo'));
    });
  });

});
