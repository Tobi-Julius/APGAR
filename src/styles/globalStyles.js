import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create ({
    textColor: {
        color: '#939599'
    },
    Heading1: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'montserrat',
        color: 'red',
        // backgroundColor: themes.primarys
        textTransform: 'uppercase'
    },
    Heading2: {
        fontSize: 16,
        fontWeight: 'normal',
        fontFamily: 'montserrat',
        // backgroundColor: themes.primary
    },
    Heading3: {
        fontSize: 12,
        fontWeight: 'bold',
        fontFamily: 'montserrat',
        // backgroundColor: themes.primary
    },
    bodyText: {
        fontSize: 12,
        fontWeight: 'normal',
        fontFamily: 'montserrat',
        // backgroundColor: themes.primary
    },
    rowCenter: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }

})