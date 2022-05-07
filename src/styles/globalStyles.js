import { StyleSheet, Dimensions } from "react-native";
import { Themes } from "../constants";


export const globalStyles = StyleSheet.create ({ 
    textColor: {
        color: '#939599'
    },
    width: {
        width: Dimensions.get('screen').width
    },
    height: {
        height: Dimensions.get('screen').height
    },
    Heading1: {
        fontSize: 20,
        textAlign: "center",
        color: Themes.primary,
    },
    Heading2: {
        fontSize: 16,
        fontWeight: 'normal',
    },
    Heading3: {
        fontSize: 12,
        color: Themes.text,
        letterSpacing: 1,
        textAlign: "center",
    },
    bodyText: {
        fontSize: 12,
        fontWeight: 'normal',
    },
    rowCenter: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }

})