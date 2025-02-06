import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';


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


const morningColors = ['lightblue', 'lightgreen', 'royalblue', 'gold', 'plum', 'skyblue', 'lightyellow', 'peachpuff', 'mistyrose'];
const afternoonColors = ['gold', 'tomato', 'yellow', 'lightgreen', 'crimson', 'salmon', 'lightcoral', 'peachpuff', 'khaki'];
const eveningColors = ['darkviolet', 'indigo', 'firebrick', 'orange', 'lightcoral', 'mediumvioletred', 'thistle'];

const Item = ({ title, backgroundColor, onPress }) => (
  <View style={[styles.item, { backgroundColor }]}>
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  </View>
);

const App = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item, index }) => {
    const backgroundColor = item.id === selectedId ? 'blue' : item.backgroundColor;
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        title={item.title}
        backgroundColor={backgroundColor}
        onPress={() => setSelectedId(item.id)}
      />
    );
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.sectionHeader}>Morning</Text>
        <FlatList
          data={morning.map((item, index) => ({ ...item, backgroundColor: morningColors[index] }))}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />

        <Text style={styles.sectionHeader}>Afternoon</Text>
        <FlatList
          data={afternoon.map((item, index) => ({ ...item, backgroundColor: afternoonColors[index] }))}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />

        <Text style={styles.sectionHeader}>Evening</Text>
        <FlatList
          data={evening.map((item, index) => ({ ...item, backgroundColor: eveningColors[index] }))}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionHeader: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
  },
  item: {
    padding: 20,
    margin: 2,
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    color: '#ffffff',
  },
});

export default App;
