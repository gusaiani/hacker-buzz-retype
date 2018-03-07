import React, { Component } from 'react';
import {
  fetchStories,
} from '../../actions/StoryActions';

export class StoryListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start: 0,
      end: 20
    };
  }

  componentDidMount() {
    this.fetchStories();
  }
}
