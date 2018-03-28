import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import HTMLView from 'react-native-htmlview';
import { darkTheme } from '../../styles';
import { openURL } from '../../network/web';
import { connect } from 'react-redux';

class StoryHeader extends Component {
  render() {
    const { story } = this.props;
    const {
      container,
      headerContainer,
      textContainer,
      title,
    } = styles;

    return (
      <View style={container}>
        <View style={headerContainer}>
          <View style={textContainer}>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={_ => openURL(story.url)}
            >
              <Text style={title}>
                {story.title}
              </Text>
            </TouchableOpacity>
            {story.text !== undefined &&
              <View
                style={{ marginLeft: 10, marginRight: 10, marginBottom: 10 }}
              >
                <HTMLView
                  value={`<blockquote>${story.text}</blockquote>`}
                  stylesheet={HTMLstyles}
                />
              </View>}
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between'
              }}
            >
              <View style={{ flexDirection: 'column' }}>
                <Text style={author}>
                  {story.by}
                </Text>
                <View style={commentsContainer}>
                  <Icon
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

const HTMLstyles = StyleSheet.create({
  blockquote: {
    color: darkTheme.commentText
  },
  a: {
    fontWeight: '300',
    color: darkTheme.commentURL
  },
  p: {
    color: darkTheme.commentText
  },
  i: {
    fontStyle: 'italic',
    color: darkTheme.commentText
  },
  b: {
    color: darkTheme.commentText,
    fontWeight: '500'
  },
  code: {
    fontFamily: 'Menlo',
    color: darkTheme.commentText
  },
  pre: {
    fontFamily: 'Menlo',
    color: darkTheme.commentText
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  headerContainer: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: darkTheme.headerCommentBackground
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  commentsContainer: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 10,
    marginBottom: 5
  },
  title: {
    color: darkTheme.storyTitle,
    fontSize: 30,
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 5,
    marginRight: 10
  },
  author: {
    color: darkTheme.storyAuthor,
    fontSize: 20,
    marginBottom: 5,
    paddingLeft: 10
  },
});

const mapStateToProps = (state, headerProps) => {
  const { byId } = state.favorites;
  const { story } = headerProps;

  const isFavorited = byId.filter(id => id === story.id).length > 0;

  return { isFavorited };
};

const mapDispatchToProps = dispatch => ({
  favoriteStory: story => dispatch(favoriteStory(story)),
  unfavoriteStory: id => dispatch(unfavoriteStory(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(StoryHeader);
