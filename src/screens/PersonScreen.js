import { mock } from './mock.js';
import { List, ListItem } from 'react-native-elements'
import React, { PureComponent } from 'react';
import Relay, { createContainer } from 'react-relay'

class PersonScreen extends PureComponent {
  render() {
    return(
      <List>
        {
          mock.map((person, i) => (
            <ListItem
              key={i}
              title={person.name}
              rightIcon={{ name: 'chevron-right' }}
            />
          ))
        }
      </List>
    )
  }
}

// const PersonContainer = Relay.createContainer(PersonScreen, {
//   fragments: {
//     story: () => Relay.QL `
//       fragment on PersonScreen {
//         name
//       }`
//   }
// })

// const PersonRenderer = (
//   <Relay.Renderer
//     Container={PersonContainer}
//     queryConfig={{
//       queries: {
//         story: () => Relay.QL `
//           query {
//             allPersons
//           }
//         `
//       }
//     }}
//   />)

export default PersonScreen