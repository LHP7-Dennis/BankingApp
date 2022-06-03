import { View, StyleSheet, Image, Text, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { TextInput } from 'react-native-paper'
// import Custombutton from '../components/Custombutton'
import { useNavigation } from '@react-navigation/native'
import { Picker } from '@react-native-picker/picker'
//import DateTimePicker from '@react-native-community/datetimepicker'
import dayjs from 'dayjs'
import { StatusBar } from 'expo-status-bar'

const AjoutDepenses = () => {
    
    
    const [categories, setCategories] = useState('')
    const [lastname, setLastname] = useState('')
    const [ammount, setAmmount] = useState('')
    const [operationDate, setOperationDate] = useState(new Date())
    const [disabled, setDisabled] = useState(true)
    const [errors, setErrors] = useState([])
    const [dateTimeShow, setDateTimeShow] = useState(false)
    const [comment, setComment] = useState("");
    const categoriesArray = ['Alimentaires', 'Factures','Transport', 'Logement', 'Santé','Divertissement','Vacances','Shopping', 'Autres']
    
    const checkCategories = (value) => {
        if (!value) {
            setErrors({ ...errors, categories: 'La categorie doit être renseigné' })
            setDisabled(true)
        } else {
            if (!categoriesArray.includes(value)) {
                setErrors({ ...errors, categories: "La categorie n'est pas valide" })
                setDisabled(true)
            } else {
                setErrors({ ...errors, categories: '' })
                setDisabled(false)
            }
        }
        setCategories(value)
    }

    const checkLastname = () => {
        let regexName = new RegExp(
            /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
        )
        if (!lastname) {
            setErrors({ ...errors, lastname: 'Le nom doit être renseigné' })
            setDisabled(true)
        } else {
            if (!lastname.match(regexName)) {
                setErrors({ ...errors, lastname: 'Le nom est invalide' })
                setDisabled(true)
            } else {
                setErrors({ ...errors, lastname: '' })
                setDisabled(false)
            }
        }
    }

    const checkAmmount = () => {

        let regexNumber = new RegExp (/^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/)
        if(!ammount.match(regexNumber)){

            setErrors({ ...errors, ammount: 'Le montant est invalide' })
            setDisabled(true)
        } else {
            setErrors({ ...errors, ammount: '' })
            setDisabled(false)
        }
        if (!ammount) {
            setErrors({ ...errors, ammount: 'Le montant doit être renseigné' })
            setDisabled(true)
        } else {
            
        }
    }


    return (
        <View style={styles.container}>
<StatusBar style="auto" />
            <Text style={styles.label}>Ajout Revenu</Text>
            <View style={styles.groupInput}>
                <ScrollView>
                    <Picker
                        selectedValue={categories}
                        onValueChange={(itemValue, itemIndex) => {
                            checkCategories(itemValue)
                        }}
                    >
                        <Picker.Item label="Catégories" value="" />
                        <Picker.Item label="Alimentaires" value="Alimentaires" />
                        <Picker.Item label="Factures" value="Factures" />
                        <Picker.Item label="Transport" value="Transport" />
                        <Picker.Item label="Logement" value="Logement" />
                        <Picker.Item label="Santé " value="Santé" />
                        <Picker.Item label="Divertissement " value="Divertissement" />
                        <Picker.Item label="Vacances " value="Vacances" />
                        <Picker.Item label="Shopping " value="Shopping" />
                        <Picker.Item label="Autres" value="Autres" />
                    </Picker>
                    <Text style={styles.error}>{errors?.categories}</Text>

                    <TextInput
                        style={styles.input}
                        label="Bénéficiaire"
                        value={lastname}
                        onChangeText={(text) => setLastname(text)}
                        onBlur={() => checkLastname()}
                        onFocus={() => checkLastname()}
                    />
                    <Text style={styles.error}>{errors?.lastname}</Text>
                    <TextInput
                        keyboardType='number-pad'
                        style={styles.input}
                        label="Montant"
                        value={ammount}
                        onChangeText={(text) => setAmmount(text)}
                        onBlur={() => checkAmmount()}
                        onFocus={() => checkAmmount()}
                    />
                    <Text style={styles.error}>{errors?.ammount}</Text>

                    

                    {/* <TextInput
                        style={styles.input}
                        label="Date d'operation"
                        value={dayjs(operationDate).format('DD/MM/YYYY')}
                        onChangeText={() => { }}
                        onBlur={() => { }}
                        onFocus={() => {
                            setDateTimeShow(true)
                        }}
                    /> */}
                    {/* {dateTimeShow && (
                        <DateTimePicker
                            mode="date"
                            value={new Date()}
                            is24Hour={true}
                            onChange={(event, date) => {
                                setDateTimeShow(false)
                                setOperationDate(date)
                            }}
                        />
                    )} */}

                    <TextInput
                        multiline
                        numberOfLines={10}
                        style={styles.input}
                        onChangeText={(comment) =>  setComment(comment) }
                        value={comment}
                        placeholder="Commentaires"
                    />

                    {/* <Custombutton
                        disabled={disabled}
                        color="blue"
                        text="Suivant"
                        icon="arrow-right"
                        mode="contained"
                        onPress={() => { }}
                    /> */}
                </ScrollView>
            </View>
        </View>
    )
}
export default AjoutDepenses

const styles = StyleSheet.create({
    image: {
        flex: 1,
        width: '80%',
        alignSelf: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    groupInput: {
        flex: 1,
        width: '80%',
    },
    noAccount: {
        alignSelf: 'center',
    },
    input: {
        backgroundColor: 'none',
    },
    create: {
        color: 'blue',
    },
    error: {
        color: 'crimson',
    },
    label: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 0,
        paddingTop: 50,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
       


    },
})