import React from 'react';
import {View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity, ScrollView} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const onPress = () => setCount(prevCount => prevCount + 1);
const morning = [
  { id: 'todo1', title: '1. Wake-up' },
  { id: 'todo2', title: '2. Turn off alarm' },
  { id: 'todo3', title: '3. Make a Coffee' },
  { id: 'todo4', title: '4. Make a Breakfast' },
  { id: 'todo5', title: '5. Watch News' },
  { id: 'todo6', title: '6. Go for a walk' },
  { id: 'todo7', title: '7. Take a shower' },
  { id: 'todo8', title: '8. Read a book' },
  { id: 'todo9', title: '9. Plan the day' },
];

const afternoon = [
  { id: 'todo10', title: '10. Take a shower' },
  { id: 'todo11', title: '11. Go to Work' },
  { id: 'todo12', title: '12. Have lunch' },
  { id: 'todo13', title: '13. Attend meetings' },
  { id: 'todo14', title: '14. Complete tasks' },
  { id: 'todo15', title: '15. Call family' },
  { id: 'todo16', title: '16. Take a break' },
  { id: 'todo17', title: '17. Go grocery shopping' },
  { id: 'todo18', title: '18. Check emails' },
];

const evening = [
  { id: 'todo19', title: '19. Go to School' },
  { id: 'todo20', title: '20. Take Notes' },
  { id: 'todo21', title: '21. Go Home' },
  { id: 'todo22', title: '22. Prepare Dinner' },
  { id: 'todo23', title: '23. Spend time with family' },
  { id: 'todo24', title: '24. Watch a movie' },
  { id: 'todo25', title: '25. Go to bed' },
]; 

type ItemProps = {title: string};

const Item = ({title}: ItemProps) => (
  <View style={styles.item}>
    <TouchableOpacity style={styles.button} onPress={onPress}><Text style={styles.title}>{title}</Text></TouchableOpacity>
  </View>
);

const App = () => (


  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>

  
    <Text       style={{
          borderColor: 'black',
          borderWidth: 1,
          textAlign: 'center',
          padding: '10px',
          fontSize: '20px',
        }}> Morning </Text>
    
   
      <FlatList
        data={morning}
        renderItem={({item}) =>   <Item title={item.title}  />}
        keyExtractor={item => item.id}
      />

    <Text
    style={{
          borderColor: 'black',
          borderWidth: 1,
          textAlign: 'center',
          padding: '10px',
          fontSize: '20px',
        }}> Afternoon </Text>

      <FlatList
        data={afternoon}
        renderItem={({item}) => <Item title={item.title}  />}
        keyExtractor={item => item.id}
      />

      <Text
      style={{
          borderColor: 'black',
          borderWidth: 1,
          textAlign: 'center',
          padding: '10px',
          fontSize: '20px',
        }}> Evening </Text>

      <FlatList
        data={evening}
        renderItem={({item}) => <Item title={item.title}  />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
 
});

export default App;