import React, { useState } from 'react';
import { Image, Text, View, TouchableOpacity, Alert } from 'react-native';
import fitness from '../data/fitness';
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const FitnessCards = () => {
  const FitnessData = fitness;
  const navigation = useNavigation();

  const handleFollowUser = () => {
    Alert.alert('Follow the user');
  };

  const handleLikePlan = () => {
    Alert.alert('Like the plan');
  };

  const handleComment = () => {
    Alert.alert('Comment on the plan');
  };

  return (
    <View style={{ marginTop: 10, marginHorizontal: 20, marginBottom: 20 }}>
      {FitnessData.map((item, id) => (
        <TouchableOpacity
          onPress={() => navigation.navigate("Workout", {
            image: item.image,
            exercises: item.exercises,
            id: item.id
          })}
          style={{ alignItems: 'center', justifyContent: "center", marginTop: 10, marginBottom: 10 }}
          key={id}
        >
          <Image
            style={{ width: "100%", height: 120, borderRadius: 12 }}
            source={{ uri: item.image }}
          />
          <Text
            style={{
              position: "absolute",
              color: "white",
              fontSize: 16,
              fontWeight: "bold",
              left: 20,
              top: 20
            }}
          >
            {item.name}
          </Text>
          <MaterialCommunityIcons
            name="lightning-bolt"
            size={30}
            color="orange"
            style={{ position: "absolute", bottom: 15, left: 15 }}
          />
          <View style={{ flexDirection: 'row', position: 'absolute', bottom: 15, right: 15 , borderColor: "black"}}>
            <TouchableOpacity onPress={handleFollowUser} style={{ marginHorizontal: 5 }}>
              <FontAwesome name="user-plus" size={24} color="orange" />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleLikePlan} style={{ marginHorizontal: 5 }}>
              <FontAwesome name="heart" size={24} color="orange" />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleComment} style={{ marginHorizontal: 5 }}>
              <FontAwesome name="comment" size={24} color="orange" />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default FitnessCards;
