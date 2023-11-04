import React from 'react'
import { View, Text } from 'react-native'
import { List } from 'react-native-paper'
import { styles } from './Menu.styles'
import { accountMenu } from './menu.data'
import Colors from '../../constant/Color'
import { useNavigation } from "@react-navigation/native"

const Menu = () => {
    const navigation = useNavigation();
  return (
    <List.Section style={styles.viewOptions}>
        <List.Subheader style={styles.title}>Mi cuenta</List.Subheader>
        {accountMenu.map((item, index) => (
            <List.Item
                key={index}
                title={item.title}
                titleStyle={styles.textOptions}
                description={item.description}
                descriptionStyle={styles.textOptions}
                left={props => <List.Icon {...props} 
                    icon={item.leftIcon} 
                    color={Colors.greenClaroRM}
                    style={styles.icon}/>}
                onPress={() => navigation.navigate(item.screen)}
            />
        ))}
    </List.Section>
  )
}

export default Menu