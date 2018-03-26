import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { openURL } from '../../network/web';
import { connect } from 'react-redux';

class StoryHeader extends Component {
  const {
    container,
    headerContainer,
    textContainer,
  } = styles;

  render() {
    return (
      <View style={container}>
        <View style={headerContainer}>
          <View style={textContainer}>
            <TouchableOpacity
              activeOpacity={0.6}
      onPress={_ => openURL}
          </View>
        </View>
      </View>
    )
  }
}

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
});

const mapStateToProps = (state, headerProps) {
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
