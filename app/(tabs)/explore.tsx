import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import { Collapsible } from '../../components/Collapsible'; // Sesuaikan dengan komponen Anda
import { ExternalLink } from '../../components/ExternalLink'; // Sesuaikan dengan komponen Anda
import { ThemedText } from '../../components/ThemedText'; // Sesuaikan dengan komponen Anda
import { ThemedView } from '../../components/ThemedView'; // Sesuaikan dengan komponen Anda

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={require('@/assets/images/icon.png')} style={styles.backgroundImage} />
        <View style={styles.profileImageContainer}>
        </View>
        <View style={styles.profileInfo}>
          <Text style={styles.name}>M Ihsan Hidayatullah</Text>
          <Text style={styles.location}>Sidoarjo</Text>
          <Text style={styles.description} numberOfLines={3} ellipsizeMode='tail'>
  Pantai adalah area luas yang terdiri dari pasir dan langsung berbatasan dengan laut. Keindahan pantai terletak pada suara ombak yang menghantam karang, hembusan angin laut yang segar, dan panorama matahari terbenam yang menawan, sehingga menjadikannya tujuan wisata yang populer bagi banyak orang.
</Text>
  </View>
    </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    position: 'relative',
    height: 250,
  },
  backgroundImage: {
    width: '100%',
    height: '200%',
    resizeMode: 'cover', // Sesuaikan resize mode
  },
  profileImageContainer: {
    position: 'absolute',
    bottom: 50,
    left: 20,
    borderRadius: 50,
    backgroundColor: '#fff',
    elevation: 3, // Tambahkan bayangan
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileInfo: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    position: 'absolute',
    bottom: 20,
    left: 130,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  location: {
    fontSize: 16,
    color: '#808080',
  },
  description: {
    fontSize: 14,
    marginBottom: 10,
    color: '#666', // Warna abu-abu untuk kesan lebih soft
  },
  content: {
    padding: 20,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  listItemText: {
    fontSize: 16,
  },
  listItemLink: {
    color: '#0080FF',
  },
});

export default ProfileScreen;