import React, { useContext, useState } from 'react';
import { Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { FitnessItems } from '../Context';

const FitScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [index, setIndex] = useState(0);
  const exercise = route.params.exercises;
  const current = exercise[index];
  const { completed, setCompleted, calories, setCalories, minutes, setMinutes, workout, setWorkout } = useContext(FitnessItems);

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={{ uri: current?.image }} />
      <Text style={styles.title}>{current?.name} <Octicons name="question" size={22} color="#6d6868" /></Text>
      <Text style={styles.sets}>x{current?.sets}</Text>

      {/* Done Button  */}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(index + 1 >= exercise.length ? "Home" : "Rest");
          setCompleted([...completed, current?.name]);
          setWorkout(workout + 1);
          setMinutes(minutes + 2.5);
          setCalories(calories + 6.3);
          setTimeout(() => {
            setIndex(index + 1);
          }, 2000);
        }}
        style={styles.doneButton}
      >
        <Text style={styles.buttonText}>DONE <Ionicons name="checkmark-circle" size={24} color="white" /></Text>
      </TouchableOpacity>

      {/* Previous Button and Skip Button  */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          disabled={index === 0}
          onPress={() => {
            navigation.navigate("Rest");
            setTimeout(() => {
              setIndex(index - 1);
            }, 2000);
          }}
          style={styles.previousButton}
        >
          <Text style={styles.buttonText}>PREV <Ionicons name="play-skip-back" size={22} color="#6d6868" /></Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate(index + 1 >= exercise.length ? "Home" : "Rest");
            setTimeout(() => {
              setIndex(index + 1);
            }, 2000);
          }}
          style={styles.skipButton}
        >
          <Text style={styles.buttonText}>SKIP <Ionicons name="play-skip-forward" size={22} color="#3f3d3d" /></Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 35, // MANSOOR SCREEN , YOU CAN make it as u wish 
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 30,
    color: "black",
  },
  sets: {
    fontSize: 45,
    fontWeight: "bold",
    marginTop: 10,
    color: "black",
  },
  doneButton: {
    backgroundColor: "#198f51",
    borderRadius: 30,
    padding: 10,
    width: "90%",
    marginTop: 50,
    alignItems: "center",
  },
  buttonText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 25,
    width: "90%",
  },
  previousButton: {
    borderRadius: 30,
    padding: 10,
    width: "42%",
    backgroundColor: "orange",
  },
  skipButton: {
    borderRadius: 30,
    padding: 10,
    width: "42%",
    backgroundColor: "orange",
  },
});

export default FitScreen;
