import { View, Text } from 'react-native'
import React from 'react'
import { TextInput, Button, shadow } from 'react-native-paper'
import { globalStyles } from '../../styles'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { authApi } from '../../api/auth'
import { useAuth } from '../../hooks/useAuth'
import Toast from 'react-native-root-toast'


export default function Login(props) {

  const { setShowLogin } = props;
  const { login } = useAuth();

  // const useAuthData = useAuth();
  // console.log(useAuthData);

  const formik = useFormik({
    initialValues: {
      identifier: '',
        password: ''
    },
    validationSchema: Yup.object({
      identifier: Yup.string().email(true).required(true),
        password: Yup.string().required(true),
    }),
    validateOnChange: false,
    onSubmit: async (formData) => {
        const { identifier, password } = formData;
        try {
            respose = await authApi.login(identifier, password)
            login(respose.jwt);
            // setShowLogin(true);
        } catch (error) {
            Toast.show('Usuario o contraseña incorrectas', {
              position: Toast.positions.CENTER,
            });
        }
    }

})
  return (
    <View>
      <TextInput
            label="Correo electrónico"
            style={globalStyles.form.input}
            autoCapitalize='none'
            onChangeText={(text) => formik.setFieldValue('identifier', text)}
            value={formik.values.identifier}
            error={formik.errors.identifier}
        />
        <TextInput
            label="Contraseña"
            style={globalStyles.form.input}
            autoCapitalize='none'
            onChangeText={(text) => formik.setFieldValue('password', text)}
            value={formik.values.password}
            error={formik.errors.password}
        />
        <Button
            mode="contained"
            style={globalStyles.form.buttonSubmit}
            onPress={formik.handleSubmit}
            loading={formik.isSubmitting}
        >Iniciar sesion</Button>

        <Button
            mode="text"
            style={globalStyles.form.buttonText}
            onPress={() => setShowLogin(false)}
            >Registrarse</Button>
    </View>
  )
}