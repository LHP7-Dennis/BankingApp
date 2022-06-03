import { StyleSheet, Text, View } from 'react-native';
import BottomTabNavigation from './src/navigation/BottomTabNavigation';
import { Provider as PaperProvider } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import GlobalContext from './src/helpers/GlobalContext';

const contextValue = {
  user:"Mayer Franklin",
  index: 0
}

const App = () => (
    
  <PaperProvider>
<GlobalContext.Provider value={contextValue}>
    
    <StatusBar style="auto" />
  <BottomTabNavigation/>
  </GlobalContext.Provider>
  </PaperProvider>
  
)

export default App;