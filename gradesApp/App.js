import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CourseTab from './components/CourseTab';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.mainWrapper}>
        <View style={styles.headerWrapper}> 
          <Text> Courses </Text>
        </View>
        <View style={styles.coursesWrapper}>
          <CourseTab text={'MECH 328'}/>
        </View>
      </View>
    </View>
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
});
