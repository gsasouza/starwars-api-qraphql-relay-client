import { StackNavigator } from 'react-navigation';
import PersonScreen from '../screens/PersonScreen';
import PersonDetails from '../screens/PersonDetails';


const Router = StackNavigator(
  {
    Persons: { screen: PersonScreen, header: null },
    PersonDetail: { screen: PersonDetails}
  },
  {
    headerMode: 'none',
    initialRouteName: 'Persons',
  }
)

export default Router