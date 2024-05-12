import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import FitnessCards from '../components/FitnessCards';
import { Ionicons } from '@expo/vector-icons';
import { useContext, useState } from 'react';
import { FitnessItems } from '../Context';

const HomeScreen = ({ navigation }) => {
  const [showIcon, setShowIcon] = useState(false);
  const { calories, minutes, workout, } = useContext(FitnessItems);

  function handleLogout () {
    navigation.navigate('Login');
  }
  return (
    <ScrollView showsVerticalScrollIndicator={false}
      style={{ marginTop: 20 }}>
      <View style={{ backgroundColor: "#000000", paddingTop: 40, paddingHorizontal: 20, height: 160, width: "100%" }}>
        <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 50}}>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>NO PAIN NO GAIN BE THE BEST WITH VIGOR</Text>

          {/* Dark Mode  */}
          {/* <TouchableOpacity onPress={() => setShowIcon(!showIcon)}>
            {showIcon ? <Ionicons name="sunny" size={24} color="white" /> : <Ionicons name="moon" size={24} color="white" /> }
          </TouchableOpacity>   */}

          <TouchableOpacity onPress={handleLogout}>
                <Ionicons name="log-out" size={24} color="orange" /> 
        </TouchableOpacity>
        </View>
          
        {/* Cards Row  */}
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 30, }}>

          {/* First Card  */}
          <View style={styles.shadowCards}>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>{calories.toFixed(2)}</Text>
            <Text>KCAL</Text>
          </View>

          {/* Second Card  */}
          <View style={styles.shadowCards}>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>{workout}</Text>
            <Text>WORKOUTS</Text>
          </View>

          {/* Third Card  */}
          <View style={styles.shadowCards}>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>{minutes}</Text>
            <Text>MINUTES</Text>
          </View>
        </View>
      </View>
      {/* Fitness Cards  */}
      <FitnessCards />
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
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
  button: {
    backgroundColor: 'orange',
    borderRadius: 8,
    paddingVertical: 15,
    width: '100%',
    alignItems: 'center',
},
  buttonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
},
});