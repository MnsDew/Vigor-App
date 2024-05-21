import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import * as FileSystem from 'expo-file-system';

const SignUp = ({ navigation }) => {
    const [fullName, setFullName] = useState('');
    const [idCard, setIdCard] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleLogin = () => {
        navigation.navigate('Login');
    }

    const handleSignUp = async () => {
        try {
             
            if (!fullName || !idCard || !age || !email || !password || !confirmPassword) {
                alert('Please fill in all fields');
                return;
            }

             
            if (password !== confirmPassword) {
                alert('Passwords do not match');
                return;
            }

            // Read existing user data
            const userInfoPath = FileSystem.documentDirectory + 'userInfo.json';
            const fileExists = await FileSystem.getInfoAsync(userInfoPath);

            let users = [];
            if (fileExists.exists) {
                const contents = await FileSystem.readAsStringAsync(userInfoPath);
                users = JSON.parse(contents);
            }
            console.log(users);
            await FileSystem.writeAsStringAsync(userInfoPath, JSON.stringify(users), { encoding: FileSystem.EncodingType.UTF8 });

            // Check if idCard and email already exist
            const idCardExists = users.some((user) => user.idCard === idCard);
            const emailExists = users.some((user) => user.email === email);

            if (idCardExists || emailExists) {
                alert('ID Card or Email already exists');
                return;
            }

             
            const newUser = {
                fullName,
                idCard,
                age,
                email,
                password,
            };

            users.push(newUser);

             
            await FileSystem.writeAsStringAsync(userInfoPath, JSON.stringify(users), { encoding: FileSystem.EncodingType.UTF8 });
            console.log(users);
            alert('Sign Up Successful!');
            navigation.navigate('Home');
        } catch (error) {
            console.error('Error handling sign up:', error.message);
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
            <View style={styles.container}>
                {/* Logo */}
                <Image
                    style={styles.logo}
                    source={require('C:/Users/DELL/Documents/React-Native/vigorWorkout/Vigor-React_Native-/assets/logo-no-background.png')} // Change the path to your logo file
                />
                <Text style={styles.title}>Sign Up in Vigor</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Full Name"
                        placeholderTextColor="rgba(255, 255, 255, 0.7)"
                        onChangeText={(text) => setFullName(text)}
                    />
                    
                    <TextInput
                        style={styles.input}
                        placeholder="ID Number"
                        placeholderTextColor="rgba(255, 255, 255, 0.7)"
                        keyboardType="numeric"
                        onChangeText={(text) => setIdCard(text)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Age"
                        placeholderTextColor="rgba(255, 255, 255, 0.7)"
                        keyboardType="numeric"
                        onChangeText={(text) => setAge(text)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        placeholderTextColor="rgba(255, 255, 255, 0.7)"
                        onChangeText={(text) => setEmail(text)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        secureTextEntry={true}
                        placeholderTextColor="rgba(255, 255, 255, 0.7)"
                        onChangeText={(text) => setPassword(text)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Confirm Password"
                        secureTextEntry={true}
                        placeholderTextColor="rgba(255, 255, 255, 0.7)"
                        onChangeText={(text) => setConfirmPassword(text)}
                    />
                </View>
                <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollViewContainer: {
        flexGrow: 1,
        justifyContent: 'center',
    },
    container: {
        backgroundColor: 'rgb(32, 32, 36)',
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    logo: {
        marginTop: 50,
        marginBottom: 20,
        width: 150,
        height: 70,
        alignSelf: 'center',
    },
    title: {
        fontSize: 30,
        color: 'orange',
        marginBottom: 30,
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
        width: '100%',
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

export default SignUp;
