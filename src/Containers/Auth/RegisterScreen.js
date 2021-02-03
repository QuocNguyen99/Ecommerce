import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Header from '../../Components/Header';
import Colors from '../../Theme/Color';
import FormField from '../../Components/Form/FormField';
import TextInputField from '../../Components/Form/TextInputField';
import ButtonSubmit from '../../Components/Form/ButtonSubmit';

export default function RegisterScreen() {
    const handleBack = () => alert('Back');
    return (
        <View style={styles.container}>
            <Header
                onPress={handleBack}
                colorImage='black'
            />
            <View style={styles.body}>
                <Text style={styles.welcome} >Create your account</Text>
                <Text style={styles.normalText} >Do you already have account?
                        <Text
                        style={styles.textSignIn}
                        onPress={() => alert('Move to Sign Up')}> Sign In
                        </Text>
                </Text>

                <View style={styles.input}>
                    <FormField
                        initialValues={{ username: '', email: '', password: '' }}
                        onSubmit={(value) => alert(`${value.email}++${value.password}`)}
                    >
                        <TextInputField
                            autoCapitalize='none'
                            // styleTitle={styles.textSubTitle}
                            name='username'
                            title='Username'
                        />
                        <TextInputField
                            autoCapitalize='none'
                            // styleTitle={styles.textSubTitle}
                            name='email'
                            title='Email'
                        />
                        <TextInputField
                            autoCapitalize='none'
                            secureTextEntry
                            // styleTitle={styles.textSubTitle}
                            name='password'
                            title='Password'
                        />

                        <View style={styles.containerButton}>
                            <ButtonSubmit
                                title='Create account'
                                style={styles.button}
                            />
                        </View>
                    </FormField>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 30,
        backgroundColor: Colors.primary,
    },
    containerButton: {
        marginTop: 30,
    },
    body: {
        marginTop: 20,
    }, welcome: {
        fontWeight: 'bold',
        fontSize: 25,
    },
    normalText: {
        marginTop: 10,
        fontSize: 16,
        lineHeight: 30,
        color: Colors.gray,
    },
    textSignIn: {
        color: Colors.purple,
        fontSize: 16,
    },
    input: {

    },

})
