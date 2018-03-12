import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchStories,
  fetchMoreStories,
  refreshStories
} from '../../actions/StoryActions';
import { StoryListErrorMessage } from './StoryListErrorMessage';

import StoryList from '../StoryList';

export class StoryListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start: 0,
      end: 20
    };
  }

  componentDidMount() {
    this.fetchStories();
  }

  componentWillReceiveProps(nextProps) {
    const { ids } = nextProps;
    const { start, end } = this.state;
    if (ids !== this.props.ids && start < storyLimit) {
      this.getItems(ids, start, end);
    } else if (JSON.stringify(ids) !== JSON.stringify(this.props.ids)) {
      this.setState({ start: 0, end: 20 });
      this.fetchStories();
    }
  }

  fetchStories = () => {
    const { category } = this.props;
    this.props.fetchStories(category);
  };

  getItems = (ids, start, end) => {
    const { category } = this.props;
    if (ids !== undefined) {
      const storyIds = ids.slice(start, end);
      if (storyIds.length > 0) {
        this.props.fetchMoreStories(storyIds, category);
      }
    }
  };

  render() {
    const { stories, navigation, route, refreshing, hasErrored } = this.props;

    if (hasErrored) {
      return <StoryListErrorMessage handleTryAgain={this.handleRefresh} />;
    }
    return (
      <StoryList
        stories={stories}
        refreshing={refreshing}
        navigation={navigation}
        handleLoadMore={this.handleRefresh}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchStories: type => dispatch(fetchStories(type)),
  fetchMoreStories: (ids, category) =>
    dispatch(fetchMoreStories(ids, category)),
  refreshStories: (category, ids) => dispatch(refreshStories(category, ids)),
  favoriteStory: story => dispatch(favoriteStory(story)),
  unfavoriteStory: id => dispatch(unfavoriteStory(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(StoryListContainer);
