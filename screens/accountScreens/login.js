import { StatusBar } from 'expo-status-bar';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useEffect, useState } from 'react';
import {
    StyleSheet, Text, View,
    Platform,
    Image, TextInput, TouchableOpacity, KeyboardAvoidingView
} from 'react-native';

const Login = ({ navigation }) => {
        const [user, setUser] = useState(true);
    
        function check() {
            setUser((user) => !user);
        }
    
        useEffect(
            function UpdateState() {
            }
        );
    
        return (
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : ''}
                keyboardShouldPersistTaps="handled" style={styles.container}>
                <StatusBar style="auto" />
                <View style={styles.container.header}>
                    <Image style={styles.container.header.headerImage} source={require('../../assets/logo.png')}></Image>
                    <Text style={styles.container.header.headerText}>Class Ganana</Text>
                </View>
                <View style={styles.container.body}>
                    {/* <Text style={styles.container.body.formHeading}>Sign In</Text> */}
                    <View style={styles.container.body.formBody}>
                        <Text style={styles.container.body.formBody.text}>Username or Email</Text>
                        <TextInput style={styles.container.body.formBody.textInput} placeholderTextColor="#00000054" placeholder='Yourschool.com'></TextInput>
                        <Text style={styles.container.body.formBody.text}>Password:</Text>
                        <View style={styles.container.body.formBody.passwordBlock}>
                            <TextInput secureTextEntry={user} selectionColor={'grey'} style={styles.container.body.formBody.textInput} placeholderTextColor="#00000054" placeholder='**********'></TextInput>
                            <Ionicons name={(user)? 'eye' : 'eye-off'} size={32} onPress={() => check()} />
                        </View>
                        <TouchableOpacity style={styles.container.body.formBody.button} >
                            <Text style={styles.container.body.formBody.button.text}>
                                Sign In
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.container.forgetPassword}>
                            <Text style={styles.container.forgetPassword.text}>
                                Forget Password?
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        header: {
            width: '100%',
            justifyContent: 'center',
            height: '40%',
            alignItems: 'center',
            headerImage: {
                marginLeft: 1,
                resizeMode: 'contain',
                width: 200,
                height: 150,
            },
            headerText: {
                fontSize: 25,
                fontWeight: '500',
            }
        },
        body: {
            height: '60%',
            // backgroundColor: 'yellow',
            width: '100%',
            alignItems: 'center',
            formHeading: {
                flex: 1,
                display: 'flex',
                fontSize: 44,
                fontWeight: '500',
            },
            formBody: {
                flex: 4,
                width: '60%',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                passwordBlock: {
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'baseline',
                },
                text: {
                    marginTop: 20,
                    fontSize: 20,
                    lineHeight: 22
                },
                textInput: {
                    height: 40,
                    width: '100%',
                    marginTop: 15,
                    fontSize: 30,
                    lineHeight: 30,
                    fontWeight: '700',
                    outline: 'none'
                },
                button: {
                    borderRadius: 20,
                    marginTop: 20,
                    backgroundColor: '#EE5177',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 12,
                    text: {
                        fontSize: 25,
                        color: 'white',
                        fontWeight: '500'
                    }

                }
            }
        },
        forgetPassword: {
            text: {
                marginTop: 10,
                display: 'flex',
                alignItems: 'center',
                color: '#EE5177',
                fontSize: 15,
                fontWeight: '500'
            }
        }
    }
});

export default Login;