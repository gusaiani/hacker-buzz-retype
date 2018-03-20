import React, { Component, PropTypes } from 'react';
import {
  requireNativeComponent,
} from 'react-native';

class NativeAdView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 0
    }
  };

  componentWillMount() {
    DeviceEventEmmiter.addListener(onAdLoaded, this.onAdLoaded);
  }

  componentWillUnmount() {
    DeviceEventEmitter.removeEventListener(onAdLoaded, this.onAdLoaded);
  }

  onAdLoaded = () => {
    this.setState({ height: 100 });
  }

  render() {
    const { height } = this.state;

    return (
      <RNTNativeAd
        {...this.props}
        style={{ height }}
        onAdLoaded={this.onAdLoaded}
      />
    )
  }
}

var RNTNativeAd = requireNativeComponent('RNTNativeAd', NativeAdView);
