import{ StyleSheet } from 'react-native';
import Colors from '../constant/Color';

export const styles = StyleSheet.create({
    container : {
        flex: 1,
        padding: 16,
        backgroundColor: '#000',
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: Colors.greenClaroRM,
        marginTop: 20,
        marginBottom: 8,
    }, 
    subtitle: {
        fontSize: 24,
        fontWeight: "bold",
        color: Colors.greenClaroRM,
        marginBottom: 20,
    },
    text: {
        fontSize: 18,
        fontWeight: "bold",
        color: Colors.greenClaroRM,
        paddingStart: 20,
        marginBottom: 20,
    },
    textOptions: {
        fontSize: 16,
        color: '#fff',
        paddingStart: 20,
    },
    viewOptions: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingStart: 20,
        marginBottom: 28,
    },
    icon: {
        fontSize: 40,
        color: Colors.greenClaroRM,
    },
});