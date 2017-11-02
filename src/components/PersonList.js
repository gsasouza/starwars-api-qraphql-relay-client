import React from 'react';
import { List, ListItem } from 'react-native-elements';
import { FlatList } from 'react-native';

export default (props) => (
  <List>
    <FlatList
      data={props.persons}
      renderItem={({ item }) => (
        <ListItem
          title={item.name}
          rightIcon={{name: 'chevron-right'}}
          // onPressRightIcon={props.navigation.navigate(props.route, item)}
        />
      )}
      keyExtractor={() => (Math.round(Math.random()*100))}
    />
  </List>
)