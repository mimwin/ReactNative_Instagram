import React from 'react';
import {Image, View} from 'react-native';
import styles from './styles'


const ProfilePicture = ({uri}) =>(
    <View sytle={styles.container}>
        <Image 
            source={{ uri } }
            styles={styles.image}
        />
    </View>
  )

export default ProfilePicture;