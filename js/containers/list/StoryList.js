import React, { PureComponent } from 'react';
import {
  FlatList,
  RefreshControl,
  View,
  ActivityIndicator,
  StatusBar,
  Animated,
  StyleSheet,
  Easing
} from 'react-native';
import { connect } from 'react-redux';
import StoryListItem from './StoryListItem';
