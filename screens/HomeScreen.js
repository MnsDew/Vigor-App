import React, { useContext, useState } from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Image, TextInput, Alert } from 'react-native';
import FitnessCards from '../components/FitnessCards';
import { Ionicons } from '@expo/vector-icons';
import { FitnessItems } from '../Context';

const HomeScreen = ({ navigation }) => {
  const [showOptions, setShowOptions] = useState(false);
  const { calories, minutes, workout } = useContext(FitnessItems);

  const confirmLogout = () => {
    Alert.alert(
      'Log Out',
      'Are you sure you want to log out?',
      [
        { text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        { text: 'Yes', onPress: handleLogout },
      ],
      { cancelable: false }
    );
  };

  const handleLogout = () => {
    navigation.navigate('Login');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 20 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => setShowOptions(!showOptions)}>
            <Ionicons name="menu" size={24} color="white" />
          </TouchableOpacity>
          <Text style={styles.title}>Track Your Daily Workout with VIGOR</Text>
          <TouchableOpacity onPress={confirmLogout}>
            <Ionicons name="log-out" size={24} color="orange" />
          </TouchableOpacity>
          {showOptions && (
            <View style={styles.optionsMenu}>
              <TouchableOpacity onPress={() => console.log("Edit Your Profile")} style={styles.option}>
                <Ionicons name="ios-person" size={20} color="black" />
                <Text style={styles.optionText}>Edit Your Profile</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => console.log("Create Workout Plan")} style={styles.option}>
                <Ionicons name="ios-create" size={20} color="black" />
                <Text style={styles.optionText}>Create Workout Plan</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => console.log("Share Workout Plan")} style={styles.option}>
                <Ionicons name="ios-share" size={20} color="black" />
                <Text style={styles.optionText}>Share Workout Plan</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => console.log("Edit Workout Plan")} style={styles.option}>
                <Ionicons name="ios-create" size={20} color="black" />
                <Text style={styles.optionText}>Edit Workout Plan</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('C:/Users/DELL/Documents/React-Native/vigorWorkout/Vigor-React_Native-/assets/logo-no-background.png')}
          />
        </View>
        <View style={styles.cardsRow}>
          <View style={styles.shadowCards}>
            <Text style={styles.cardText}>{calories.toFixed(2)}</Text>
            <Text>KCAL</Text>
          </View>
          <View style={styles.shadowCards}>
            <Text style={styles.cardText}>{workout}</Text>
            <Text>WORKOUTS</Text>
          </View>
          <View style={styles.shadowCards}>
            <Text style={styles.cardText}>{minutes}</Text>
            <Text>MINUTES</Text>
          </View>
        </View>
      </View>
      <View style={styles.searchBarContainer}>
        <View style={styles.searchBarWrapper}>
          <TextInput
            style={styles.searchBar}
            placeholder="Browse Workout Plans..."
            placeholderTextColor="#888"
          />
          <Ionicons name="search" size={20} color="#888" style={styles.searchIcon} />
        </View>
      </View>
      <FitnessCards />
      <View style={styles.footer}>
        <Text style={styles.footerText}>Mobile Workout Plan Sharing app, developed by MN$ OR MNS70</Text>
      </View>
    </ScrollView>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
    paddingTop: 40,
    paddingHorizontal: 20,
    width: "100%",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  searchBarContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  searchBarWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#000000",
    paddingHorizontal: 10,
  },
  searchBar: {
    flex: 1,
    paddingVertical: 8,
  },
  searchIcon: {
    marginLeft: 10,
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  logo: {
    width: 170,
    height: 100,
  },
  logoutButton: {
    position: 'absolute',
    top: 50,
    right: 20,
  },
  cardsRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  shadowCards: {
    backgroundColor: "orange",
    width: "32%",
    height: 80,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  cardText: {
    fontWeight: "bold",
    fontSize: 18,
  },
  optionsMenu: {
    backgroundColor: "grey",
    position: 'absolute',
    top: 40,
    left: 10,
    padding: 10,
    borderRadius: 5,
    zIndex: 1,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  optionText: {
    marginLeft: 5,
    color: 'black',
    fontWeight: "bold",
  },
  footer: {
    marginTop: 20,
    marginBottom: 10,
    alignItems: 'center',
  },
  footerText: {
    color: 'black',
    fontSize: 14,
    fontWeight: "bold"
  },
});
