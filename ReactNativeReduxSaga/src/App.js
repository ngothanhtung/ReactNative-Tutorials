import {
  createStackNavigator
} from 'react-navigation';
import PeopleScreen from './PeopleComponent';
import MainScreen from './MainScreen';
import PeopleContainer from './PeopleContainer';


const App = createStackNavigator(
  {
    PeopleScreen: PeopleContainer,
    MainScreen: MainScreen
  }
);

export default App;