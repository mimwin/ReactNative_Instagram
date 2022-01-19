import React from 'react';
import { FlatList } from 'react-native';
import Stories from '../Stories';

const data=[
    {
        user: {
            imageUri: 'https://images.app.goo.gl/o2x6zUMBNd2XREMx8'
            name: 'Nice Elmo'
        }
        imageUri: 'https://images.app.goo.gl/3pZQ8reaDPtTXunu6'
        caption: 'Beautiful city #instagram'
        likesCount: 1234,
        postedAt: '6 minutes ago'
    },
    {
        user: {
            imageUri: 'https://images.app.goo.gl/fwqBYeq2YBDTomZC8'
            name: 'Chimps'
        }
        imageUri: 'https://images.app.goo.gl/ok45Pr81qQkbr9M38'
        caption: 'Boo!'
        likesCount: 1234,
        postedAt: '10 minutes ago'
    },
    {
        user: {
            imageUri: 'https://images.app.goo.gl/4fwLeQpz3FjcsVJT6'
            name: 'Let''s_go!'
        }
        imageUri: 'https://images.app.goo.gl/HYPN3h7mRbG6SQraA'
        caption: 'cat and dog forever'
        likesCount: 1234,
        postedAt: '3 hours ago'
    },
    {
        user: {
            imageUri: 'https://images.app.goo.gl/Za4m6EvAv6MRu4Lh9'
            name: 'MyCatPoyo'
        }
        imageUri: 'https://images.app.goo.gl/xpMkh9PCpsz37qPL6'
        caption: 'What''s inside?'
        likesCount: 1234,
        postedAt: '1 day ago'
    },
    {
        user: {
            imageUri: 'https://images.app.goo.gl/fwqBYeq2YBDTomZC8'
            name: 'PlantLover'
        }
        imageUri: 'https://images.app.goo.gl/jxQwTq2fysbaUW5a7'
        caption: 'My cat'
        likesCount: 1234,
        postedAt: '3 days ago'
    }
]

const Feed =() =>{
    <FlatList
        data={data}
        renderItem={({item}) => <Post post={item}/>}
        ListHeaderComponent={Stories}
    />
};

export default Feed;