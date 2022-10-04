import { registerRootComponent } from "expo";
import React from "react";
import { AuthProvider } from "./context/firebaseContext/AuthContext";
import NavigationContainer from "./navigation/NavigationContainer";
import { useFont } from "./hooks";
import { Provider as ProviderPaper } from "react-native-paper";

function App() {
  const { isFontReady } = useFont();

  return isFontReady ? (
    <AuthProvider>
      <ProviderPaper>
        <NavigationContainer />  
      </ProviderPaper>
    </AuthProvider>
  ) : null;
}
registerRootComponent(App);
