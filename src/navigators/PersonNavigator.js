import { StackNavigator } from 'react-navigation';
import PersonScreen from '../screens/PersonScreen';
import PersonDetails from '../screens/PersonDetails';


const Router = StackNavigator(
  {
    Persons: {
      screen: PersonScreen,
      navigationOptions: {
        title: 'Characters',
      }
    },  
    PersonDetail: {
      screen: PersonDetails,
      navigationOptions: {
        title: 'Details',
      }
    }
  },
  {
    headerMode: 'screen',
    initialRouteName: 'Persons',
  }
)

export default Router