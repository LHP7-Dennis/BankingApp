import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { IconButton } from 'react-native-paper'
import AjoutRevenu from '../components/AjoutRevenus'
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'

const AddIncomeScreen = (props) => {
  const navigation = useNavigation()
  return (
    <View style={{flex:1}}>
<StatusBar style="auto" />
      <IconButton onPress={()=>
      navigation.navigate('Home')
      } icon="home"/>
      <AjoutRevenu/>
    </View>

    
  )
}

export default AddIncomeScreen