import { mock } from './mock.js';
import React, { PureComponent } from 'react';
import { QueryRenderer, graphql } from 'react-relay';
import { Text } from 'react-native';
import environment from '../relayNetwork';
import PersonList from '../components/PersonList'


class PersonScreen extends PureComponent {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query PersonScreenQuery ($page: Int!){
            allPersons(page: $page){
              _id
              name
              height
              mass
              hairColor
              skinColor
              gender
              birthYear
            }
          }
        `}
        variables={{
          page: 1
        }}
        render={({error, props}) => {
          if (error) {
            return <Text>{error.message}</Text>;
          } else if (props) {
            return <PersonList persons={props.allPersons} navigation={this.props.navigation} />
          }
          return <Text>Loading</Text>;
        }}
      />      
    )
  }
}

export default PersonScreen
