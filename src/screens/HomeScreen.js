import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import {LinearGradient} from 'expo-linear-gradient'
import GlobalContext from '../helpers/GlobalContext'
import { useFocusEffect } from '@react-navigation/native'
import data from '../../assets/data.json'
import { Picker } from '@react-native-picker/picker'

const HomeScreen = ({navigation}) => {

  const contextValue = useContext(GlobalContext)

  console.log(contextValue.user);

  const [index, setIndex] = useState({})
  const [user, setUser] = useState('')

  useEffect(() => {
    setUser(contextValue.user)
    setIndex(data[contextValue.index])
})

  useFocusEffect(()=> {
    setIndex(data[contextValue.index])
    setUser(contextValue.user)
  })

  return (

    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <LinearGradient colors={['rgb(13, 18, 150)', 'transparent']} style={styles.background} />

      <ScrollView >
        <Picker
        selectedValue={user}
        onValueChange={(text,index)=>{
          console.log(index);
          contextValue.user=text
          contextValue.index=index
          setUser(text)
          setIndex(data[index])
        }}
        mode='dropdown'
        style={{ height:50,width:250}}>

          {data.map((item, index) => <Picker.Item label={item.user} value={item.user} key={index} />)}

        </Picker>
        </ScrollView>




      
    <TouchableOpacity
    onPress={()=>
    navigation.push('Income')
    }>
       <LinearGradient colors={['rgb(69, 42, 224)', 'rgb(53, 139, 244)']} style={styles.button2}>
      <Text style={{color:'white', fontSize:16}}>Revenus</Text>
      </LinearGradient>
    </TouchableOpacity>
    
    <TouchableOpacity
    onPress={()=>
    navigation.push('Payments')
    }
    style={{marginTop:10}}>
      <LinearGradient colors={['rgb(69, 42, 224)', 'rgb(53, 139, 244)']} style={styles.button2}>
      <Text style={{color:'white', fontSize:16}}>Dépenses</Text>
      </LinearGradient>
    </TouchableOpacity>

    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({

  button2: {
    padding: 10,
    width: 200,
    alignItems: 'center',
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
},
background: {
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  height: '100%',
},

})