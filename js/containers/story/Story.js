import React, { Component } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { darkTheme } from '../../styles';
import CommentList from './CommentList';

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

  render() {
    const { navigation, isFetching, hasErrored, commentsByHash } = this.props;
    const { story } = navigation.state.params;

    return (
      <View style={{ flex: 1 }}>
        <CommentList
        />
      </View>
    )
  }
}
