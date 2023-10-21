import { StyleSheet } from 'react-native';
import Colors from '../../constant/Color';

export const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: 'transparent',
        borderColor: Colors.greenRM,
        borderWidth: 2.5,
        borderRadius: 16,
        padding: 5,
        marginVertical: 8,
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        height: 320,
    },
    
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4,
        color: 'white',
    },

    cardText: {
        fontSize: 16,
        marginBottom: 8,
        color: 'white',
    },

    cardTextId: {
        fontSize: 16,
        color: 'white',
        marginTop: 5,
        fontWeight: 'bold',
    },

    touchable: {
        flex: 1,
        paddingEnd:8, 
        marginBottom: 4,
    },

});
