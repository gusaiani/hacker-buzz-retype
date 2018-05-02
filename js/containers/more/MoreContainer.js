import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { darkTheme } from '../../styles';
import { openTypeform } from '../../network/web';

export default class MoreContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalVisible: false
    };
  }

  setModalState = currency => {
    const isModalVisible = !this.state.isModalVisible;
    this.setState({ isModalVisible, currency });
  };

  handleContactOnPress = () => {
    openTypeform();
  }

  render() {
    const {
      container,
      donateHeadline,
      body,
      textContainer
    } = styles;

    return (
      <ScrollView
        style={{ backgroundColor: darkTheme.storyBackground }}
        contentContainerStyle={container}
      >
        <DonateModal
          style={{ width: 0, height: 0 }}
          isVisible={this.state.isModalVisible}
          setModalState={this.setModalState}
          currency={this.state.currency}
        />
        <View style={textContainer}>
          <Text style={donateHeadline}>
            About
          </Text>
          <Text style={body}>
            Built with ❤️ for RN.
          </Text>
        </View>
        <View style={textContainer}>
          <Text style={donateHeadline}>
            Contact
          </Text>
          <Text style={body}>
            Do you want to reach out or leave some feedback?
          </Text>
          <TouchableOpacity onPress={this.handleContactOnPress}>
            <Text style={contact}
          </TouchableOpacity>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'column',
    backgroundColor: darkTheme.storyBackground,
    backfaceVisibility: 'visible'
  },
  donateHeadline: {
    fontSize: 30,
    fontWeight: '400',
    color: darkTheme.storyAuthor
  },
  body: {
    marginTop: 5,
    marginRight: 5,
    fontSize: 20,
    fontWeight: '300',
    color: darkTheme.storyTimeAgo
  },
  contact: {
    marginTop: 5,
    fontSize: 20,
    fontWeight: '500',
    color: darkTheme.storyTimeAgo,
  },
  textContainer: {
    marginLeft: 10,
    marginTop: 10
  }
})
