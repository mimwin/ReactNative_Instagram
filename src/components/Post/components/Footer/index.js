import React from 'react'
import {Text, View} from 'react-native'
import styles from './styles'

const Footer = ({likesCount, caption, postedAt}) => {
    <View style={styles.container}>
        <Text styles={styles.likes}>{likesCount} Likes</Text>
        <Text styles={styles.caption}>{caption}</Text>
        <Text styles={styles.postedAt}>{postedAt}</Text>
    </View>
}

export default Footer;