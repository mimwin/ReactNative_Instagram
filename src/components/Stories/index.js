import React from 'react';
import {FlatList, View} from 'react-native';
import Story from '../Story';

const data = [
    {
        imageUri: 'file:///C:/Users/kms10/Desktop/images.jpeg',
        name: 'Elmo',
    }, {
        imageUri: 'file:///C:/Users/kms10/Desktop/images.jpeg',
        name: 'Cute Elmo',
    },
    {
        imageUri: 'file:///C:/Users/kms10/Desktop/images.jpeg',
        name: 'noELMO',
    },
    {
        imageUri: 'file:///C:/Users/kms10/Desktop/images.jpeg',
        name: 'ELMO WORLD',
    }, {
        imageUri: 'file:///C:/Users/kms10/Desktop/images.jpeg',
        name: 'Spicy Elmo',
    },
    {
        imageUri: 'file:///C:/Users/kms10/Desktop/images.jpeg',
        name: 'ELMOMOMO',
    }
]


const Stories =() =>(
    <FlatList>
        data={data}
        keyExtractor={({name} => name)}
        horizontal
        renderItem={(item) => <Story imageUri={item.imageUri} name={item.name}/>}
    />
)

export default Stories;