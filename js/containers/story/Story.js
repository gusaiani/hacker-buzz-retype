import React, { Component } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { darkTheme } from '../../styles';
import CommentList from './CommentList';

const commentKidsLimit = 4;

import values from 'lodash/values';

export class Story extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      start: 0,
      end: 4,
      isSharing: false
    };
  }

  static navigationOptions = ({ navigation }) => {
    const { descendants } = navigation.state.params.story;
    return {
      headerLeft: Story.backButton(navigation),
      headerRight: Story.shareButton(navigation),
      title: descendants !== undefined
        ? descendants != 1
            ? `${descendants} Comments`
            : `${descendants} Comment`
        : 'Job',
      headerTitleStyle: { color: darkTheme.headerTitle },
      headerStyle: {
        backgroundColor: darkTheme.headerBackground,
        borderBottomColor: darkTheme.tabBarOutline,
        borderBottomWidth: 0.5
      },
      headerTintColor: darkTheme.headerBackButton
    };
  };

  handleLoadMore = () => {
    const { isFetching, commentsByHash } = this.props;
    const shouldLoadMore =
      commentsByHash !== undefined &&
      commentsByHash.length > this.state.start &&
      commentsByHash.length <= this.state.end;

    if (!isFetching && shouldLoadMore) {
      this.setState(
        {
          start: this.state.start + commentKidsLimit,
          end: this.state.end + commentKidsLimit
        },
        () => {
          this.loadMoreComments();
        }
      );
    }
  };

  render() {
    const { navigation, isFetching, hasErrored, commentsByHash } = this.props;
    const { story } = navigation.state.params;

    return (
      <View style={{ flex: 1 }}>
        <CommentList
          comments={values(commentsByHash)}
          kids={story.kids}
          navigation={navigation}
          handleLoadMore={this.handleLoadMore}
        />
      </View>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.navigation.state.params.story;
  const { comments } = state;
  const { isFetching, hasErrored, byStoryHash } = comments;

  const commentsByHash = byStoryHash[id];

  return { comments, commentsByHash, isFetching, hasErrored };
};
