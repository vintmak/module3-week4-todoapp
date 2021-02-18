import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home ({navigation}) {

    const [todos,setTodos] = useState([

    ]
    )

    const updateItem = async (data) =>{
        console.log(data)


        try {
            const jsonValue = JSON.stringify([...todos,data])
            await AsyncStorage.setItem('@storage_Key', jsonValue)
          } catch (e) {
            // saving error
          }
        //spread operator ... ... todos mean the existing array, push data into it
        setTodos([...todos,data])

    }

    
    const getData = async () => {
        try {
        const jsonValue = await AsyncStorage.getItem('@storage_Key')
        if(jsonValue != null) {
            setTodos (JSON.parse(jsonValue)) 
        } 
        } catch(e) {
        // error reading value
        }
    }

    useEffect(() => {
        getData();

    },[])
    
    
    return(
        <View>
            <FlatList
            data={todos}
            renderItem={
                ({item})=>(
                    <TouchableOpacity style={styles.item}
                    onLongPress={async () =>{
                        let newTodos = todos.filter(val=>{
                            return val !== item
                        })
                        try {
                            const jsonValue = JSON.stringify(newTodos)
                            await AsyncStorage.setItem('@storage_Key', jsonValue)
                          } catch (e) {
                            // saving error
                          }
                          setTodos(newTodos)
                    }
                    
                    }
                    onPress={() => navigation.push('Detail', {'item':item}) }>
                    <View>
                        <Text>{item.name}</Text>
                    </View>
                    </TouchableOpacity>
                )
            }
            />
            <Button title="Add a new Item" onPress={()=> 
                navigation.push('Add', {
                    onGoBack:updateItem
                    })
                    
                    }/>
        </View>
    )
}

const styles = StyleSheet.create({

    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal:16,
        backgroundColor: 'yellow'
    }
    
  });
  
