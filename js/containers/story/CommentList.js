import React, { PureComponent } from 'react';
import { FlatList } from 'react-native';
import { darkTheme } from '../../styles';
import StoryHeader from './StoryHeader';
import { EmptyStory } from './EmptyStory';

export default class CommentList extends PureComponent {
  renderHeader = () => {
    const { story } = this.props.navigation.state.params;
    return <StoryHeader story={story} />;
  };

  renderFooter = () => {
    if (this.props.navigation.state.params.story.category === 'jobstories') {
      return null;
    }

    if (this.props.kids === undefined) {
      return <EmptyStory />;
    }
  }

  render() {
    const { comments, kids } = this.props;
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

      />
    )
  }
}
