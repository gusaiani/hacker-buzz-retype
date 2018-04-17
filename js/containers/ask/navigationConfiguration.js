import { StackNavigator } from 'react-navigation';
import AskStoriesContainer from './AskStoriesContainer';
import Story from '../story/Story';
import { transitionConfiguration } from '../../utils/animations/transitions';

const routeConfiguration = {
  AskStoriesContainer: { screen: AskStoriesContainer },
  AskStory: { screen: Story }
};

const routeConfiguration = {
  AskStoriesContainer: { screen: AskStoriesContainer },
  AskStory: { screen: Story }
};

const stackNavigatorConfiguration = {
  initialRoute: 'AskStoriesContainer',
  navigationOptions: {
    headerBackTitle: null
  },
  gesturesEnabled: true,
  transitionConfig: transitionConfiguration,
}
export const NavigatorTabAsk = StackNavigator(
  routeConfiguration,
  stackNavigatorConfiguration
);
