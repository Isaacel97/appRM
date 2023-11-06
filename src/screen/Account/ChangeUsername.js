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

const ChangeUsername = () => {
  console.log("ChangeUsername");
  const [user, setUser] = useState('');
  
    const setForm = () => {
      formik.setValues({
        username: user || '',
      });
    }
  
    const dataUser = async () => {
      const res = await getMe();
      console.log("res", res.username);
      setUser(res.username);
    };
  
    useEffect(() => {
      dataUser();
    }, []);
  
    useEffect(() => {
      setForm();
    }, [user]);
  
    const formik = useFormik({
      initialValues: {
        username: '',
      },
      validationSchema: Yup.object({
        username: Yup.string().required(true).min(3).max(12)
      }),
      validateOnChange: false,
      onSubmit: async (formData) => {
        const user = await getMe();
        try {
          response = await editAccount(formData, user.id)
          if (response) {
            Toast.show('Username actualizado correctamente', {
              position: Toast.positions.CENTER
            })
          } else {
            throw 'Error al actualizar el Username'
          }
        } catch (error) {
          console.error('Error al actualizar el Username: ', error)
          Toast.show('Error al actualizar el Username', {
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
              label="Username"
              style={globalStyles.form.input}
              autoCapitalize='none'
              onChangeText={(text) => formik.setFieldValue('username', text)}
              value={formik.values.username}
              error={formik.errors.username}
            />
            <Button
              mode="contained"
              style={globalStyles.form.buttonSubmit}
              onPress={formik.handleSubmit}
              loading={formik.isSubmitting}
            >Actualizar username</Button>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    )
}

export default ChangeUsername