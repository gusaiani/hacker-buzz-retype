import { StackNavigator } from 'react-navigation';
import AskStoriesContainer from './AskStoriesContainer';
import Story from '../story/Story';

const routeConfiguration = {
  AskStoriesContainer: { screen: AskStoriesContainer },
  AskStory: { screen: Story }
};

const routeConfiguration = {
  AskStoriesContainer: { screen: AskStoriesContainer }
}

export const NavigatorTabAsk = StackNavigator(
  routeConfiguration,
)

export const NavigatorTabAsk = StackNavigator(
  routeConfiguration,
)
