import { View, Text } from 'react-native'
import React from 'react'
import { TextInput, Button, shadow } from 'react-native-paper'
import { globalStyles } from '../../styles'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { authApi } from '../../api/auth'

export default function Register(props) {

    const { setShowLogin } = props;
    const formik = useFormik({
        initialValues: {
            email: '',
            username: '',
            password: '',
            confirmPassword: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().email(true).required(true),
            username: Yup.string().required(true),
            password: Yup.string().required(true),
            confirmPassword: Yup.string().required(true).oneOf([Yup.ref('password')], true)
        }),
        validateOnChange: false,
        onSubmit: async (formData) => {
            const { email, username, password } = formData;
            try {
                await authApi.register(email, username, password)
                setShowLogin(true);
            } catch (error) {
                console.log(error);
            }
        }

    })

  return (
    <View>
        <TextInput
            label="Correo electrónico"
            style={globalStyles.form.input}
            autoCapitalize='none'
            onChangeText={(text) => formik.setFieldValue('email', text)}
            value={formik.values.email}
            error={formik.errors.email}
        />
        <TextInput
            label="Nombre de usuario"
            style={globalStyles.form.input}
            autoCapitalize='none'
            onChangeText={(text) => formik.setFieldValue('username', text)}
            value={formik.values.username}
            error={formik.errors.username}

        />
        <TextInput
            label="Contraseña"
            style={globalStyles.form.input}
            autoCapitalize='none'
            onChangeText={(text) => formik.setFieldValue('password', text)}
            value={formik.values.password}
            error={formik.errors.password}
        />
        <TextInput
            label="Confirmar contraseña"
            style={globalStyles.form.input}
            autoCapitalize='none'
            onChangeText={(text) => formik.setFieldValue('confirmPassword', text)}
            value={formik.values.confirmPassword}
            error={formik.errors.confirmPassword}
        />

    
        <Button
            mode="contained"
            style={globalStyles.form.buttonSubmit}
            onPress={formik.handleSubmit}
            loading={formik.isSubmitting}
        >Registrarse</Button>

        <Button
            mode="text"
            style={globalStyles.form.buttonText}
            onPress={() => setShowLogin(true)}
            >Iniciar Sesion</Button>

    </View>
  )
}