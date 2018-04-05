import React, { PureComponent } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
  Easing
} from 'react-native';
import { darkTheme } from '../../styles';
import StoryCommentPlaceholder from '../../components/StoryCommentPlaceholder';
import Icon from 'react-native-vector-icons/FontAwesome';
import Shine from '../../utils/animations/shine';

export default class Comment extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      spinValue: new Animated.Value(0)
    };
    this._animated = new Animated.Value(0.25);
  }

  toggleExpanded = () => {
    this.setState({ collapsed: !this.state.collapsed });
    this.state.collapsed
      ? this.animateExpandComment()
      : this.animateCollapseComment();
  };

  animateCollapseComment = () => {
    Animated.timing(this.state.spinValue, {
      toValue: 1,
      duration: 400,
      easing: Easing.linear,
      useNativeDriver: true
    }).start();
  };

  animateExpandComment = () => {
    Animated.timing(this.state.spinValue, {
      toValue: 0,
      duration: 400,
      easing: Easing.linear,
      useNativeDriver: true
    }).start();
  };

  render() {
    const { text, by } = this.props.comment;
    const {
      container,
      textContainer,
      authorContainer,
      subCommentContainer,
      commentLine,
      author,
      timeAgo,
      divider,
      placeholder
    } = styles;

    const containerStyles = [container, { opacity: this._animated }];

    return (
      <StoryCommentPlaceholder
        style={placeholder}
        customAnimate={Shine}
        onReady={text !== undefined}
      >
        <Animated.View style={containerStyles}>
          <TouchableWithoutFeedback onPress={this.toggleExpanded}>
            <View style={authorContainer}>
              <Animated.View
                style={{
                  padding: 5,
                  marginRight: 5,
                  transform: [{ rotate: spin }]
                }}
              >
                <Icon
                  size={14}
                  name={'chevron-circle-down'}
                  color={darkTheme.storyTitle}
                />
              </Animated.View>
              <Text style={author}>
                {by}
              </Text>
              <Text style={divider}>●</Text>
            </View>
          </TouchableWithoutFeedback>
        </Animated.View>
      </StoryCommentPlaceholder>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: darkTheme.storyBackground
  },
  authorContainer: {
    flexDirection: 'row',
    marginLeft: 10,
    marginTop: 5,
    marginBottom: 5
  },
  divider: {
    color: darkTheme.storyDivider,
    fontSize: 5,
    padding: 10
  },
  author: {
    color: darkTheme.storyAuthor,
    fontSize: 15,
    paddingTop: 5,
    fontWeight: '500'
  },
  placeholder: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: darkTheme.storyPlaceholderBackground
  }
});
