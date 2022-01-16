import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import CourseTab from './components/CourseTab';
import TaskTab from './components/TaskTab';
import AssignmentTab from './components/AssignmentTab';
import { NavigationContainer, StackRouter } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ColourBlock from './components/colourBlock';

const CourseName = (props) => {
  return (
      <View style={styles.CourseNameWrapper}>
          <Text style={styles.text}>Name</Text>
          <Text style={styles.textUser}>{props.course}</Text>
      </View>
  )
};

const CourseScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.mainWrapper}>
        <View style={styles.headerWrapper}> 
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.navigate('Create Course')
            }
          >
            <Text> + </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.coursesWrapper}>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.navigate('Specific Course')
            }
          >
            <CourseTab course={'MECH 328'} grade={'90%'} colour={'#AFCBEC'}/>
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

const CreateCourseScreen = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <View style={styles.mainWrapper}>
        <View style={styles.headerWrapper}> 
          <CourseName course={'MECH 463'}/>
        </View>
        <View style={styles.colourWrapper}>
          <ColourBlock colour={'#AFCBEC'}/>
          <ColourBlock colour={'#CCDAC8'}/>
          <ColourBlock colour={'#9CD0FF'}/>
          <ColourBlock colour={'#C4DADB'}/>
          <ColourBlock colour={'#EDCBB3'}/>
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
        <Stack.Screen name="Create Course" component={CreateCourseScreen} />
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
  CourseNameWrapper: {
    backgroundColor: '#E0E0E0',
    borderRadius: 10,
    width: "100%",
    height: 85
  },
  text:{
      fontSize: 16,
      paddingTop: 15,
      paddingHorizontal: 15,
  },
  textUser:{
      fontSize: 24,
      paddingBottom: 15,
      paddingHorizontal: 15
  },
  colourWrapper: {
    opacity: 0.9,
    padding: 15,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
},
});
