import React, { useState, useEffect } from 'react'
import { KeyboardAvoidingView, View, ImageBackground } from 'react-native'
import { TextInput, Button, IconButton } from 'react-native-paper'
import { globalStyles } from '../../styles'
import { styles } from './Account.style'
import { useFormik } from 'formik'
import { editAccount, getMe } from '../../api/users'
import * as Yup from 'yup'
import Toast from 'react-native-root-toast'
import fondoSpace from '../../assets/img/fondoSpace.jpg'
import { authApi } from '../../api/auth'

const ChangePassword = () => {
  console.log("ChangePassword");
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  const formik = useFormik({
    initialValues: {
      password: '',
      newPassword: '',
      newPasswordConfirm: ''
    },
    validationSchema: Yup.object({
      password: Yup.string().required(true),
      newPassword: Yup.string().required(true).min(8),
      newPasswordConfirm: Yup.string().required(true).oneOf([Yup.ref('newPassword'), null], 'Las contraseñas no coinciden')
    }),
    validateOnChange: false,
    onSubmit: async (formData) => {
      try {
        const user = await getMe();
        res = await authApi.login(user.email, formData.password);
        if (!res.jwt) throw 'La contraseña actual no es correcta';
        response = await editAccount({ password: formData.newPassword }, user.id)
        if (response) {
          Toast.show('Contraseña actualizada correctamente', {
            position: Toast.positions.CENTER
          })
        } else {
          throw 'Error al actualizar la contraseña'
        }
      } catch (error) {
        console.error("error", error);
        Toast.show('Error al actualizar la contraseña', {
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
            label="Actual contraseña"
            style={globalStyles.form.input}
            autoCapitalize='none'
            onChangeText={(text) => formik.setFieldValue('password', text)}
            value={formik.values.password}
            error={formik.errors.password}
            secureTextEntry={!showPassword}
            right={<TextInput.Icon
              icon={showPassword ? 'eye-off' : 'eye'}
              onPress={() => setShowPassword(!showPassword)}
            />}
          />

          <TextInput
            label="Nueva contraseña"
            style={globalStyles.form.input}
            autoCapitalize='none'
            onChangeText={(text) => formik.setFieldValue('newPassword', text)}
            value={formik.values.newPassword}
            error={formik.errors.newPassword}
            secureTextEntry={!showNewPassword}
            right={<TextInput.Icon
              icon={showNewPassword ? 'eye-off' : 'eye'}
              onPress={() => setShowNewPassword(!showNewPassword)}
            />}
          />

          <TextInput
            label="Confirmar nueva contraseña"
            style={globalStyles.form.input}
            autoCapitalize='none'
            onChangeText={(text) => formik.setFieldValue('newPasswordConfirm', text)}
            value={formik.values.newPasswordConfirm}
            error={formik.errors.newPasswordConfirm}
            secureTextEntry={!showPasswordConfirm}
            right={<TextInput.Icon
              icon={showPasswordConfirm ? 'eye-off' : 'eye'}
              onPress={() => setShowPasswordConfirm(!showPasswordConfirm)}
            />}
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

export default ChangePassword