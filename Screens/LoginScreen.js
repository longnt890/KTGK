import React, { useState } from 'react'
import { StyleSheet, Text } from 'react-native'
import { Formik } from 'formik'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import auth from '@react-native-firebase/auth'
import { View, TextInput, Logo, Button, FormErrorMessage } from '../components'
import { Images,  Colors } from '../config'
import { useTogglePasswordVisibility } from '../hooks'
import { loginValidationSchema, signupValidationSchema } from '../utils'
import ForgotPasswordScreen from './ForgotPasswordScreen'
import SignupScreen from './SignupScreen'
import Icon from 'react-native-vector-icons/FontAwesome6';
import { useNavigation } from '@react-navigation/native';


const LoginScreen = ({}) => {
    const [errorState, setErrorState] = useState('');
    const {passwordVisibility, handlePasswordVisibility, rightIcon } = 
        useTogglePasswordVisibility();
    const navigation = useNavigation();
    const handleLogin = (values) => {
        const { email, password } = values;
        auth().signInWithEmailAndPassword(email, password)
        .then(
            // ({user}) => console.log(user)
            () => navigation.navigate('Tab', {data: email})
        ).catch(error => 
            setErrorState(error.message)
            );
    };

  return (
    <>
        <View isSafe style={styles.container}>
                <Text style={styles.title}>Login</Text>
                <Formik initialValues={{
                    email: '',
                    password: ''
                }}
                validationSchema={loginValidationSchema}
                onSubmit={values => handleLogin(values)}
                >
                    {({
                        values,
                        touched,
                        errors,
                        handleChange,
                        handleSubmit,
                        handleBlur
                    }) => (
                        <>
                        <TextInput
                            name='email'
                            leftIconName=''
                            placeholder='Enter email'
                            autoCapitalize='none'
                            keyboardTyoe='email-address'
                            textContentType='emailAddress'
                            autoFocus={true}
                            value={values.email}
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            />
                        <FormErrorMessage error={errors.email} visible={touched.email}/>
                        <TextInput
                            name='password'
                            leftIconName=''
                            placeholder='Enter password'
                            autoCapitalize='none'
                            autoCorrect={false}
                            secureTextEntry={passwordVisibility}
                            textContentType='password'
                            rightIcon={rightIcon
                                // <Icon
                                //     name={passwordVisibility ? 'eye' : 'eye-slash'}
                                //     size={20}
                                //     color="#DA0C81"
                                //     onPress={handlePasswordVisibility}
                                // />
                            }
                            handlePasswordVisibility={handlePasswordVisibility}
                            value={values.password}
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            />
                        <FormErrorMessage 
                            error={errors.password} 
                            visible={touched.password}
                        />
                        {errorState !== '' ? (
                            <FormErrorMessage error={errorState} visible={true}/>
                        ): null}
                        <Button style={styles.Button} onPress={handleSubmit}>
                            <Text style={styles.buttonText}>Login</Text>
                        </Button>
                        </>
                    )}
                </Formik>

        </View>
    </>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: Colors.white,
        paddingHorizontal: 12,
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        fontSize:45,
        justifyContent:'center',
        alignContent:'center',
        fontWeight:'bold',
        color: '#DA0C81',
        marginBottom: 20
    },
    Button:{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 8,
        backgroundColor: '#DA0C81',
        padding: 10,
        borderRadius: 8
    },
    buttonText:{
        fontSize: 20,
        color: Colors.white,
        fontWeight: '700'
    },
});