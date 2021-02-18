import React, {useState} from 'react';
import { TextInput, View, StyleSheet, Button } from 'react-native';

export default function Add (navigation) {
    const [itemName, setItemName] = useState('');
    const [itemDesc, setItemDesc] = useState('');
    const [itemPlace, setItemPlace] = useState('');

    return(
        <view style={styles.container}>
            <TextInput
            style={styles.textField}
            placeholder="Enter item name"
            onChangeText={text => setItemName(text)}
            value={itemName}
            />
            <TextInput
            style={styles.textField}
            placeholder="Enter item description"
            onChangeText={text => setItemDesc(text)}
            value={itemDesc}
            />
            <TextInput
            style={styles.textField}
            placeholder="Enter item place"
            onChangeText={text => setItemPlace(text)}
            value={itemPlace}
            />
            <Button
            title="Add"
            onPress={()=>{
                let newItem = {"name":itemName,"description":itemDesc, "place":itemPlace}
                navigation.state.params.onGoBack(newItem)
                navigation.goBack();
            }}
            />
            
        </view>
    )
}

const styles = StyleSheet.create({
    container:{padding:10},
    textField: { height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 10}

});