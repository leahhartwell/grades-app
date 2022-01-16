import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CourseTab from './components/CourseTab';
import { NavigationContainer, StackRouter } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.mainWrapper}>
        <View style={styles.headerWrapper}> 
          <Text style={styles.header}> Courses </Text>
        </View>
        <View style={styles.coursesWrapper}>
          <CourseTab text={'MECH 328'}/>
        </View>
      </View>
    </View>
  );
}


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
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
