import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';
import { RectButton } from 'react-native-gesture-handler';

function TeacherItem() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{ uri: 'https://github.com/antoniodecanini.png' }}
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>Antonio Decanini</Text>
          <Text style={styles.subject}>Matematica</Text>
        </View>
      </View>

      <Text style={styles.bio}>
        Extusiasta das melhores formas de aprender Matematica
        {'\n'}
        {'\n'}
        Apaixonado por calcular como não se deve calcular a vida, e mudar a vida
        das pessoas integralmente, derivando as melhores formas de amor
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora {'   '}
          <Text style={styles.priceValue}>R$ 20,00</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton style={[styles.favoriteButton, styles.favorited]}>
            {/* <Image source={heartOutlineIcon} /> */}
            <Image source={unfavoriteIcon} />
          </RectButton>

          <RectButton style={styles.contactButton}>
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
}

export default TeacherItem;
