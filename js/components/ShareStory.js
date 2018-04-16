import React, { Component } from 'react';
import Share, { ShareSheet } from 'react-native-share';
import ShareItem from './ShareItem';

export default class ShareStory extends Component {
  onCancel = () => {
    this.props.showShareModal(this.props.navigation);
  };

  shareSocialMedia = (shareOptions, social) => {
    this.onCancel();
    setTimeout(() => {
      Share.shareSingle(Object.assign(shareOptions, { social }));
    }, 300);
  };

  render() {
    const { story } = this.props;
    let shareOptions = {
      title: story.title,
      subject: `Hacker News: ${story.title}`,
      message: `"${story.ttile}" via HackerNewsReader for iOS & Android`,
      url: `https://news.ycombinator.com/item?id=${story.id}`
    };

    const { isSharing } = this.props.navigation.state.params;

    return (
      <ShareSheet visible={isSharing} onCancel={this.onCancel}>
        <ShareItem
          onPress={_ => this.shareSocialMedia(shareOptions, 'twitter')}
          name={'Twitter'}
          icon={'twitter'}
          color={darkTeme.twitter}
        />
        <ShareItem
          onPress={_ => this.shareSocialMedia(shareOptions, 'facebook')}
          name={'Facebook'}
          icon={'facebook'}
        />
        <ShareItem
          onPress={_ => this.shareSocialMedia(shareOptions, 'whatsapp')}
          name={'Whatsapp'}
          icon={'whatsapp'}
          color={darkTheme.whatsapp}
        />
        <ShareItem
          onPress={_ => this.shareSocialMedia(shareOptions, 'ggogleplus')}
          name={'Google +'}
          icon={'google-plus'}
          color={darkTheme.googleplus}
        />
        <ShareItem
          onPress={_ => this.shareSocialMedia(shareOptions, 'email')}
          name={'Email'}
          icon={'envelope-o'}
          color={darkTheme.email}
        />
        <ShareItem
          onPress={_ => this.shareCopyLink(shareOptions)}
          name={'Copy Link'}
          icon={'link'}
          color={darkTheme.copyLink}
        />
        <ShareItem
          onPress={_ => this.}
      </ShareSheet>
    )
  }
}
