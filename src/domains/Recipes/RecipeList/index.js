import React, { Component } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { fetch } from 'domains/Recipes/actions';
import { selectRecipes, selectIsLoading } from 'domains/Recipes/selector';

import SearchBox from 'components/SearchBox';
import ItemsList from 'components/ItemsList/List';
import Preloader from 'components/Preloader';

export class RecipeList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: ''
    };
  }

  componentDidMount() {
    this.props.onRecipesFetch();
  }

  _handleRecipesFetch = () => {
    this.props.onRecipesFetch(this.state.searchQuery);
  }

  _handleSearchQueryUpdate = e => {
    const searchQuery = e.target.value;

    this.setState({
      searchQuery
    });

    this.props.onRecipesFetch(searchQuery);
  }

  render() {
    const { searchQuery } = this.state;
    const { recipes, isLoading } = this.props;

    return (
      <div>
        {isLoading && <Preloader />}
        <SearchBox
          value={searchQuery}
          onChange={this._handleSearchQueryUpdate}
          onSearch={this._handleRecipesFetch}
          isDisabled={isLoading}
        />
        <ItemsList data={recipes} />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  recipes: selectRecipes(),
  isLoading: selectIsLoading()
});

export const mapDispatchToProps = dispatch => {
  return {
    onRecipesFetch: query => {
      dispatch(fetch(query));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeList);
