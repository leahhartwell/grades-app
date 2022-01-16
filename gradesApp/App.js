import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import CourseTab from './components/CourseTab';
import TaskTab from './components/TaskTab';
import AssignmentTab from './components/AssignmentTab';
import { NavigationContainer, StackRouter } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const CourseScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.mainWrapper}>
        <View style={styles.headerWrapper}> 
        </View>
        <View style={styles.coursesWrapper}>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.navigate('Specific Course')
            }
          >
            <CourseTab course={'MECH 328'} grade={'90%'}/>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const SpecificScreen = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <View style={styles.mainWrapper}>
        <View style={styles.headerWrapper}> 
        </View>
        <View style={styles.coursesWrapper}>
        <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.navigate('Add Assignment') // change this route later
            }
          >
            <TaskTab/>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const AssignmentScreen = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <View style={styles.mainWrapper}>
        <View style={styles.headerWrapper}> 
        </View>
        <View style={styles.coursesWrapper}>
          <AssignmentTab/>
          <AssignmentTab/>
          <AssignmentTab/>
          <AssignmentTab/>
        </View>
      </View>
    </View>
  );
};

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Courses" component={CourseScreen} />
        <Stack.Screen name="Specific Course" component={SpecificScreen} />
        <Stack.Screen name="Add Assignment" component={AssignmentScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  mainWrapper: {
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  headerWrapper: {
    paddingTop: 10,
  },
  header: {
    fontSize: 36,
  },
});
