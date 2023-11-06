import React, { useState, useEffect } from 'react'
import { KeyboardAvoidingView, View, ImageBackground } from 'react-native'
import { TextInput, Button } from 'react-native-paper'
import { globalStyles } from '../../styles'
import { styles } from './Account.style'
import { useFormik } from 'formik'
import { editAccount, getMe } from '../../api/users'
import * as Yup from 'yup'
import Toast from 'react-native-root-toast'
import fondoSpace from '../../assets/img/fondoSpace.jpg'

const ChangeEmail = () => {
  console.log("ChangeEmail");
  const [user, setUser] = useState({
    email: ''
  });

  const setForm = () => {
    formik.setValues({
      email: user.email || ''
    });
  }

  const dataUser = async () => {
    const res = await getMe();
    console.log("res", res.email);
    setUser(res);
  };

  useEffect(() => {
    dataUser();
  }, []);

  useEffect(() => {
    setForm();
  }, [user]);

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email(true).required(true)
    }),
    validateOnChange: false,
    onSubmit: async (formData) => {
      const user = await getMe();
      try {
        response = await editAccount(formData, user.id)
        if (response) {
          Toast.show('Correo actualizado correctamente', {
            position: Toast.positions.CENTER
          })
        } else {
          throw 'Error al actualizar el correo'
        }
      } catch (error) {
        console.error('Error al actualizar el correo: ', error)
        const message = error.message || 'Error al actualizar el correo'
        Toast.show(message, {
          position: Toast.positions.CENTER
        })
      }
    }
  });

  return (
    <View style={styles.container}>
      <ImageBackground source={fondoSpace} resizeMode="cover" style={styles.fondo}>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{flex: 1}}>
          <TextInput
            label="Correo electrónico"
            style={globalStyles.form.input}
            autoCapitalize='none'
            onChangeText={(text) => formik.setFieldValue('email', text)}
            value={formik.values.email}
            error={formik.errors.email}
          />

          <Button
            mode="contained"
            style={globalStyles.form.buttonSubmit}
            onPress={formik.handleSubmit}
            loading={formik.isSubmitting}
          >Actualizar correo</Button>
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  )
}

export default ChangeEmail