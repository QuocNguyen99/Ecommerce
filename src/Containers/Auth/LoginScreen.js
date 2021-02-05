import React, { useState } from 'react';
import {
    StyleSheet, View, Dimensions, Image,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

import Header from '../../Components/Header';
import Text from '../../Components/Text';
import Colors from '../../Theme/Color';
import FormField from '../../Components/Form/FormField';
import TextInputField from '../../Components/Form/TextInputField';
import ButtonSubmit from '../../Components/Form/ButtonSubmit';
import ButtonSmall from '../../Components/ButtonSmall';


const { width } = Dimensions.get('screen');

const LoginSchema = Yup.object().shape({
    email: Yup.string().email().required().label('Email'),
    password: Yup.string().required().label('Password').min(6).max(50)
})

export default function LoginScreen({ navigation }) {
    const [toggleCheckBox, setToggleCheckBox] = useState(false);
    const { t, i18n } = useTranslation();
    const handleBack = () => alert('Back');
    const handleMail = () => alert('handleMail');
    const handleFacebook = () => alert('handleFacebook');
    return (
        <View style={styles.container}>
            <Header
            // onPress={handleBack}
            // colorImage='black'
            />
            <View style={styles.body}>
                <Text style={styles.welcome} >{t('welcomelogin')}</Text>
                <Text style={styles.normalText} >{t('subTextLogin')}
                    <Text
                        style={styles.textSignIn}
                        onPress={() => navigation.navigate('Register')}>
                        {t('signup')}
                    </Text>
                </Text>

                <View style={styles.input}>
                    <FormField
                        initialValues={{ email: '', password: '' }}
                        onSubmit={(value) => alert(`${value.email}++${value.password}`)}
                        validationSchema={LoginSchema}
                    >
                        <TextInputField
                            autoCapitalize='none'
                            autoFocus
                            // styleTitle={styles.textSubTitle}
                            name='email'
                            title={t('email')}
                        />
                        <TextInputField
                            autoCapitalize='none'
                            isPassword
                            // styleTitle={styles.textSubTitle}
                            name='password'
                            title={t('password')}
                        />

                        <CheckBox
                            style={styles.checkbox}
                            disabled={false}
                            value={toggleCheckBox}
                            onValueChange={(newValue) => setToggleCheckBox(newValue)}
                        />
                        <View style={styles.containerButton}>
                            <ButtonSubmit
                                title={t('buttonLogin')}
                                style={styles.button}
                            />
                        </View>
                    </FormField>
                    <View style={styles.otherButton}>
                        <ButtonSmall
                            style={styles.buttonOtherEmail}
                            styleTitle={styles.otherButtonTitle}
                            title='Gmail'
                            onPress={handleMail}
                        >
                            <Image source={require('../../Assest/Icons/gmail.png')} style={styles.imageOtherButton} />
                        </ButtonSmall>

                        <ButtonSmall
                            style={styles.buttonOtherFacebook}
                            styleTitle={styles.otherButtonTitle}
                            title='Facebook'
                            onPress={handleFacebook}
                        >
                            <Image source={require('../../Assest/Icons/facebook.png')} style={styles.imageOtherButton} />
                        </ButtonSmall>
                    </View>
                    <ButtonSmall
                        style={styles.buttonOtherFacebook}
                        styleTitle={styles.otherButtonTitle}
                        title='Change langue'
                        onPress={() => i18n.changeLanguage('en')}
                    >
                        <Image source={require('../../Assest/Icons/facebook.png')} style={styles.imageOtherButton} />
                    </ButtonSmall>

                </View>
            </View>
        </View>
    );
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
    },
    welcome: {
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
    checkbox: {
        marginTop: 20,
    },
    otherButton: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    buttonOtherEmail: {
        width: width * 0.4,
        backgroundColor: Colors.gmail,
    },
    buttonOtherFacebook: {
        width: width * 0.4,
        backgroundColor: Colors.facebook,
    },
    otherButtonTitle: {
        marginLeft: 5,
        color: Colors.primary,
    },
    imageOtherButton: {
        width: 20,
        height: 20,
    },
});
