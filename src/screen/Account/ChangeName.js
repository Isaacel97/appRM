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

const ChangeName = () => {
  console.log("ChangeName");
  const [user, setUser] = useState({
    firstname: '',
    lastname: ''
  });

  const setForm = () => {
    formik.setValues({
      firstname: user.firstname || '',
      lastname: user.lastname || ''
    });
  }

  const dataUser = async () => {
    const res = await getMe();
    console.log("res", res.firstname);
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
      firstname: '',
      lastname: ''
    },
    validationSchema: Yup.object({
      firstname: Yup.string().required(true).min(3).max(20),
      lastname: Yup.string().required(true).min(3).max(20)
    }),
    validateOnChange: false,
    onSubmit: async (formData) => {
      const user = await getMe();
      try {
        response = await editAccount(formData, user.id)
        if (response) {
          Toast.show('Nombre actualizado correctamente', {
            position: Toast.positions.CENTER
          })
        } else {
          throw 'Error al actualizar el nombre'
        }
      } catch (error) {
        console.error('Error al actualizar el nombre: ', error)
        const message = error.message || 'Error al actualizar el nombre'
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
            label="Nombre"
            style={globalStyles.form.input}
            autoCapitalize='none'
            onChangeText={(text) => formik.setFieldValue('firstname', text)}
            value={formik.values.firstname}
            error={formik.errors.firstname}
          />
          <TextInput
            label="Apellidos"
            style={globalStyles.form.input}
            autoCapitalize='none'
            onChangeText={(text) => formik.setFieldValue('lastname', text)}
            value={formik.values.lastname}
            error={formik.errors.lastname}
          />
          <Button
            mode="contained"
            style={globalStyles.form.buttonSubmit}
            onPress={formik.handleSubmit}
            loading={formik.isSubmitting}
          >Actualizar nombre</Button>
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  )
}

export default ChangeName