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
        fontWeight: 'bold',
        fontFamily: 'montserrat',
        textAlign: "center",
        color: Themes.primary
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
        color: Themes.text,
        letterSpacing: 1,
        textAlign: "center",
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