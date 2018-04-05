import React, { PureComponent } from 'react';
import { FlatList, View, ActivityIndicator } from 'react-native';
import { darkTheme } from '../../styles';
import StoryHeader from './StoryHeader';
import Comment from './Comment';
import { EmptyStory } from './EmptyStory';
import { StoryListErrorMessage } from '../list/StoryListErrorMessage';

export default class CommentList extends PureComponent {
  state = {
    refreshing: false
  };

  _keyExtractor = item => (item.id ? item.id : item);

  renderHeader = () => {
    const { story } = this.props.navigation.state.params;
    return <StoryHeader story={story} />;
  };

  handleRefresh = () => {
    this.props.handleRefresh();
  };

  renderItem = ({ item }) => {
    return (
      <View>
        <Comment comment={item} />
      </View>
    )
  }

  renderFooter = () => {
    if (this.props.navigation.state.params.story.category === 'jobstories') {
      return null;
    }

    if (this.props.kids === undefined) {
      return <EmptyStory />;
    }

    if (!this.props.isFetching) return null;

    return (
      <View style={{ paddingVertical: 20 }}>
        <ActivityIndicator animating size="large" />
      </View>
    );
  };

  handleOnEndReached = () => {
    this.props.handleLoadMore();
  };

  render() {
    const { comments, kids, hasErrored } = this.props;

    if (hasErrored) {
      return (
        <View style={{ flex: 1, backgroundColor: darkTheme.storyBackground }}>
          <StoryListErrorMessage handleTryAgain={this.handleRefresh} />
        </View>
      );
    }

    return (
      <FlatList
        style={{ backgroundColor: darkTheme.tabInactiveBackground }}
        data={
          comments.length > 0
            ? comments
            : kids !== undefined ? [1, 2, 3] : undefined
        }
        keyExtractor={this._keyExtractor}
        renderItem={this.renderItem}
        ListHeaderComponent={this.renderHeader}
        ListFooterComponent={this.renderFooter}
        refreshing={this.state.refreshing}
        onRefresh={this.handleRefresh}
        onEndReached={this.handleOnEndReached}
        onEndReachedThreshold={5}
        removeClippedSubviews={false}
        indicatorStyle={'white'}
      />
    );
  }
}
