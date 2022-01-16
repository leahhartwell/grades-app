import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native';
import CourseTab from './components/CourseTab';
import TaskTab from './components/TaskTab';
import AssignmentDueDateTab from './components/AssignmentDueDateTab';
import AssignmentNameTab from './components/AssignmentNameTab';
import AssignmentWeightTab from './components/AssignmentWeightTab';
import AssignmentGradeTab from './components/AssignmentGradeTab';
import { NavigationContainer, StackRouter } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ColourBlock from './components/colourBlock';
import {useState} from 'react';

const CourseName = (props) => {
  return (
      <View style={styles.CourseNameWrapper}>
          <Text style={styles.text}>Name</Text>
          <TextInput style={styles.textUser} placeholder={'Add a course...'} />
      </View>
  )
};

const CourseScreen = ({ navigation }) => {
  const [course, setCourse] = useState();
  const [courseItems, setCourseItems]  = useState([]);

  const handleCourse = () => {
    setCourseItems([...courseItems, course]);
    setCourse(null);
    console.log(courseItems)
  };
  return (
    <View style={styles.container}>
      <View style={styles.mainWrapper}>
        <View style={styles.headerWrapper}> 
          <TouchableOpacity
            style={styles.addButtonItem}
            onPress={() =>
              navigation.navigate('Create Course')
            }
          >
            <Text style = {styles.addButtonFont}> + </Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
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
        </ScrollView>
      </View>
    </View>
  );
}

const SpecificScreen = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <View style={styles.mainWrapper}>
        <View style={styles.headerWrapper}> 
        <TouchableOpacity
            style={styles.addButtonItem}
            onPress={() =>
              navigation.navigate('Add Assignment')
            }
          >
            <Text style = {styles.addButtonFont}> + </Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          <View style={styles.coursesWrapper}>
          <TaskTab/>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const AssignmentScreen = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardAvoidView}
        keyboardVerticalOffset={100}
      >
        <View style={styles.mainWrapper}>
          <ScrollView>
            <View style={styles.coursesWrapper}>
              <AssignmentNameTab title={'Name'} input={'e.g. Assignment 1'}/>
              <AssignmentDueDateTab title={'Due Date'} input={'e.g. Dec 1, 2022'}/>
              <AssignmentWeightTab title={'Weight (%)'} input={'e.g. 40'}/>
              <AssignmentGradeTab title={'Grade (%)'} input={'e.g. 75'}/>
            </View>

            <TouchableOpacity
            
            style={styles.addButtonItemLong}>
            {/* onPress={() => handleAddAssignmentName()}> */}
            <Text style = {styles.addButtonFontLong}> Add </Text>
          
          </TouchableOpacity>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
      
    </View>
  );
};

const CreateCourseScreen = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <View style={styles.mainWrapper}>
        <View style={{
            paddingBottom: 25,
            paddingTop: 25,
          }}> 
          <CourseName course={'MECH 463'}/>
        </View>
        <Text style={{
              fontSize: 16,
              paddingHorizontal: 15,
          }}>Colour</Text>
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
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  headerWrapper: {
    paddingBottom: 15,
    paddingTop: 10,
  },
  header: {
    fontSize: 36,
  },
  CourseNameWrapper: {
    backgroundColor: '#E0E0E0',
    borderRadius: 10,
    width: "100%",
    padding: 15,
  },
  text:{
      fontSize: 16,
  },
  textUser:{
      fontSize: 24,
  },
  colourWrapper: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },  
  keyboardAvoidView: {
    position: 'absolute',
    width: '100%',
    justifyContent: "flex-end",
  },
  addButtonItem:{
    backgroundColor: '#C4C4C4',
    borderRadius: 100,
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonFont:{
    fontSize: 24,
  },
  addButtonItemLong:{
    backgroundColor: '#C4C4C4',
    borderRadius: 100,
    height: 50,
    paddingHorizontal: 10,
    marginTop: 10,
    alignItems: 'flex-start'
  },
  addButtonFontLong:{
    alignSelf: 'center',
    fontSize: 24,
    padding: 10,
  }
});
