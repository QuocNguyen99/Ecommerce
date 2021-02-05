import React from 'react'
import { StyleSheet, View } from 'react-native';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';

import Header from '../../Components/Header';
import Text from '../../Components/Text';
import Colors from '../../Theme/Color';
import FormField from '../../Components/Form/FormField';
import TextInputField from '../../Components/Form/TextInputField';
import ButtonSubmit from '../../Components/Form/ButtonSubmit';

const RegisterSchema = Yup.object().shape({
    username: Yup.string().required().label('Username').min(1).max(50),
    email: Yup.string().email().required().label('Email'),
    password: Yup.string().required().label('Password').min(6).max(50)
})

export default function RegisterScreen({ navigation }) {
    const { t } = useTranslation();
    const handleBack = () => navigation.goBack();
    return (
        <View style={styles.container}>
            <Header
                onPress={handleBack}
                colorImage='black'
            />
            <View style={styles.body}>
                <Text style={styles.welcome} >{t('welcome-register')}</Text>
                <Text style={styles.normalText} >{t('subTextRegister')}
                    <Text
                        style={styles.textSignIn}
                        onPress={() => navigation.navigate('Login')}>{t('signin')}
                    </Text>
                </Text>

                <View style={styles.input}>
                    <FormField
                        initialValues={{ username: '', email: '', password: '' }}
                        onSubmit={(value) => alert(`${value.email}++${value.password}`)}
                        validationSchema={RegisterSchema}
                    >
                        <TextInputField
                            autoCapitalize='none'
                            // styleTitle={styles.textSubTitle}
                            name='username'
                            title={t('username')}
                        />
                        <TextInputField
                            autoCapitalize='none'
                            // styleTitle={styles.textSubTitle}
                            name='email'
                            title={t('email')}
                        />
                        <TextInputField
                            autoCapitalize='none'
                            secureTextEntry
                            // styleTitle={styles.textSubTitle}
                            name='password'
                            title={t('password')}
                        />

                        <View style={styles.containerButton}>
                            <ButtonSubmit
                                title={t('buttonRegister')}
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
