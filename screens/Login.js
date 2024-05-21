import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity ,Image } from 'react-native';
import * as FileSystem from 'expo-file-system';

const Login = ({ navigation }) => {
    const [idCard, setIdCard] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = () =>{
        navigation.navigate("SignUp")
    }

    const handleLogin = async () => {
        try {
            const userInfoPath = FileSystem.documentDirectory + 'userInfo.json';
            const fileExists = await FileSystem.getInfoAsync(userInfoPath);

            if (!fileExists.exists) {
                alert('User information not found. Please sign up.');
                return;
            }

            const contents = await FileSystem.readAsStringAsync(userInfoPath);
            const userInfo = JSON.parse(contents);

            // Hey , here I wrote this to check if user credentials are valid - "MNS70"
            const isValidUser = userInfo.some((user) => user.idCard === idCard && user.password === password);

            if (isValidUser) {
                navigation.navigate('Home');
            } else {
                alert('Invalid ID Card or Password');
            }
        } catch (error) {
            console.error('Error reading userInfo:', error.message);
        }
    };

    return (
        <View style={styles.container}>
        <Image
           source={require('C:/Users/DELL/Documents/React-Native/vigorWorkout/Vigor-React_Native-/assets/logo-no-background.png')}  
            style={styles.logo} />
            <Text style={styles.title}>Login to Vigor</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="ID Card"
                    placeholderTextColor="rgba(255, 255, 255, 0.7)"
                    onChangeText={(text) => setIdCard(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry={true}
                    placeholderTextColor="rgba(255, 255, 255, 0.7)"
                    onChangeText={(text) => setPassword(text)}
                />
            </View>
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                <Text style={styles.buttonText}>SIGN UP</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(32, 32, 36)',
        paddingHorizontal: 20,
    },
    logo: {
        width: 170,
        height: 160,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    title: {
        fontSize: 30,
        color: 'orange',
        marginBottom: 20,
        textAlign: 'center',
    },
    inputContainer: {
        width: '100%',
        marginBottom: 20,
    },
    input: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        paddingHorizontal: 20,
        paddingVertical: 15,
        marginBottom: 10,
        borderRadius: 8,
        fontSize: 16,
        color: 'white',
    },
    button: {
        marginTop: 15,
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

export default Login; 
//