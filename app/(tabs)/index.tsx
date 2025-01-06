import React, { useState } from 'react'; // Import useState di sini
import { StyleSheet, Text, View, ScrollView, Image, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation
import { DetailScreen } from '/plimadtphacker/screens/DetailScreen';
import { HomeScreen } from '/plimadtphacker/screens/HomeScreen';
import { ProfilScreen } from '/plimadtphacker/screens/ProfilScreen';
import { SplashScreen } from '/plimadtphacker/screens/SplashScreen';
import TeamCard from '/plimadtphacker/components/teamcard'

const Wisata = () => {
  const navigation = useNavigation(); // Sekarang useNavigation sudah didefinisikan
  console.log("1. Objek navigation di Wisata:", navigation);

  const [selectedCategory, setSelectedCategory] = useState('Pantai');
  console.log("2. selectedCategory:", selectedCategory);

  const pantaiData = [
  { title: "Pantai Kuta, Bali", description: "Ikon pariwisata Bali yang terkenal dengan ombaknya yang cocok untuk berselancar, matahari terbenam yang indah, dan kehidupan malam yang ramai.", imageUrl: "https://tse2.mm.bing.net/th?id=OIP.286SjggiH_IRc3IH4tenEQHaEy&pid=Api&P=0&h=180" },
  { title: "Pantai Sanur, Bali", description: "Pantai yang tenang dengan suasana yang lebih santai, cocok untuk keluarga dan menikmati matahari terbit yang memukau.", imageUrl: "https://tse1.mm.bing.net/th?id=OIP.igVLTVJ4UDN7K_OQpir4sQHaFV&pid=Api&P=0&h=180" },
  { title: "Pantai Tanjung Keluang, Kalbar", description: "Dikenal dengan formasi batu granit raksasa dan pasir putihnya yang halus, menawarkan pemandangan yang unik dan mempesona.", imageUrl: "https://tse2.mm.bing.net/th?id=OIP.lvJwIvdaM9K4NnjB3Xe6sQHaE7&pid=Api&P=0&h=180" },
  { title: "Pantai Losari, Makassar", description: "Ikon kota Makassar yang terkenal dengan pemandangan matahari terbenamnya dan warung-warung makan di tepi pantai.", imageUrl: "https://tse1.mm.bing.net/th?id=OIP.Bl4A0ZeUE-GMhXcg9QSfKQHaE8&pid=Api&P=0&h=180" },
  { title: "Pantai Parangtritis, Yogyakarta", description: "Pantai selatan yang melegenda dengan mitos Ratu Kidul, ombaknya yang besar, dan gumuk pasir yang menawan.", imageUrl: "https://tse3.mm.bing.net/th?id=OIP.Ta1P8oHm902m-EVR6yw79gHaFV&pid=Api&P=0&h=180" },
  { title: "Pantai Senggigi, Lombok", description: "Pantai yang indah dengan garis pantai yang panjang, pasir putih, dan pemandangan perbukitan yang hijau.", imageUrl: "https://tse1.mm.bing.net/th?id=OIP.RIaeX6Gk0g7tH8aVZ2PTLwHaFj&pid=Api&P=0&h=180" },
  { title: "Pantai Pink, Lombok", description: "Pantai unik dengan pasir berwarna merah muda yang disebabkan oleh serpihan karang, menawarkan pemandangan yang sangat instagramable.", imageUrl: "https://tse4.mm.bing.net/th?id=OIP.yOJmKbMOqSAzu0ryUh2XagHaE9&pid=Api&P=0&h=180" },
  { title: "Pantai Ora, Maluku", description: "Surga tersembunyi di Maluku dengan air laut yang jernih, terumbu karang yang indah, dan suasana yang tenang.", imageUrl: "https://tse4.mm.bing.net/th?id=OIP.ldm2kpEvSWDNqgGQTZDRewHaE6&pid=Api&P=0&h=180" },
  { title: "Pantai Nihiwatu, Sumba", description: "Pantai eksklusif di Sumba yang terkenal dengan ombaknya yang menantang bagi para peselancar profesional dan resort mewah.", imageUrl: "https://tse2.mm.bing.net/th?id=OIP.jCpX5E4WSar-7xItbHNcegHaFT&pid=Api&P=0&h=180" },
  { title: "Pantai Balangan, Bali", description: "Spot surfing yang populer di Bali dengan tebing-tebing yang indah dan pemandangan matahari terbenam yang spektakuler.", imageUrl: "https://tse3.mm.bing.net/th?id=OIP.DPwY56t61ALaf_5LGHFzQgHaE7&pid=Api&P=0&h=180" },
  { title: "Pantai Jimbaran, Bali", description: "Dikenal dengan hidangan seafood segar yang disajikan di restoran-restoran tepi pantai saat matahari terbenam.", imageUrl: "https://tse3.mm.bing.net/th?id=OIP.DPwY56t61ALaf_5LGHFzQgHaE7&pid=Api&P=0&h=180" }, // (Duplikat gambar, perlu diganti jika ada gambar lain)
  { title: "Pantai Lovina, Bali", description: "Pantai yang tenang di Bali Utara yang terkenal dengan atraksi lumba-lumba di pagi hari.", imageUrl: "https://tse3.mm.bing.net/th?id=OIP.gzyCE5FG8_gbDdaAuOMJUwHaEc&pid=Api&P=0&h=180" },
  { title: "Pantai Dreamland, Bali", description: "Pantai yang indah dengan pasir putih, ombak yang cocok untuk berselancar, dan tebing-tebing karang yang dramatis.", imageUrl: "https://tse3.mm.bing.net/th?id=OIP._4OKYra93WGRj6KBXHc5xQHaE7&pid=Api&P=0&h=180" },
  { title: "Pantai Padang Padang, Bali", description: "Dikenal sebagai lokasi syuting film 'Eat Pray Love', pantai kecil yang tersembunyi di antara tebing-tebing karang.", imageUrl: "https://tse3.mm.bing.net/th?id=OIP.Mw2WA5jXhBWZr_SG0IEvqgHaFj&pid=Api&P=0&h=180" },
  { title: "Pantai Tanjung Aan, Lombok", description: "Pantai dengan pasir putih yang lembut seperti merica, air laut yang jernih, dan bukit-bukit yang mengelilingi pantai.", imageUrl: "https://tse4.mm.bing.net/th?id=OIP.jI-KE4y-2iYCTRWAL6uXRgHaE8&pid=Api&P=0&h=180" },
  { title: "Pantai Koka, Flores", description: "Pantai dengan formasi batu karang yang unik dan pemandangan yang menakjubkan, terdiri dari dua teluk yang dipisahkan oleh tanjung.", imageUrl: "https://tse4.mm.bing.net/th?id=OIP.TiJio3RebuAL91fbn7kYKwHaEK&pid=Api&P=0&h=180" },
  { title: "Pantai Watu Karung, Pacitan", description: "Surga bagi para peselancar dengan ombaknya yang menantang dan pemandangan alam yang indah.", imageUrl: "https://tse4.mm.bing.net/th?id=OIP.IMYL05Zbgpo6odpABRZCLwHaE3&pid=Api&P=0&h=180" },
  { title: "Pantai Wediombo, Yogyakarta", description: "Pantai dengan laguna alami yang indah, cocok untuk berenang dan bersantai menikmati pemandangan laut.", imageUrl: "https://tse1.mm.bing.net/th?id=OIP.XZ5w36_Xk-XofOjBaB9SgQHaFX&pid=Api&P=0&h=180" },
  { title: "Pantai Tiga Warna, Malang", description: "Pantai yang unik dengan tiga gradasi warna air laut yang disebabkan oleh perbedaan kedalaman dan biota laut.", imageUrl: "https://tse1.mm.bing.net/th?id=OIP.osS9dpJ7L3apj3_jFVMNtQHaEK&pid=Api&P=0&h=180" },
  { title: "Pantai Pulau Merah, Banyuwangi", description: "Pantai dengan ciri khas bukit kecil berwarna merah yang terletak di tepi pantai, menawarkan pemandangan yang eksotis.", imageUrl: "https://tse3.mm.bing.net/th?id=OIP.XMJo0I6VxjfmVbQqtQH_1wHaE8&pid=Api&P=0&h=180" },
  ];


  const wisataData = {
    Pantai: pantaiData,
    Candi: [
      { title: "Candi Borobudur", description: "Candi Buddha terbesar di dunia.", imageUrl: "https://tse2.mm.bing.net/th?id=OIP.PCnieYiHsRUqSLu_9XnNaQHaE1&pid=Api&P=0&h=180" },
      { title: "Candi Prambanan", description: "Kompleks candi Hindu terbesar di Indonesia.", imageUrl: "https://tse2.mm.bing.net/th?id=OIP.4fht7zbQFJAdyLLhbWg2FwHaFS&pid=Api&P=0&h=180" },
    ],
    "Taman Nasional": [
      { title: "Taman Nasional Komodo", description: "Habitat asli Komodo.", imageUrl: "https://tse4.mm.bing.net/th?id=OIP.MbHwVTSfWPpgEzFOjvE2BAHaE8&pid=Api&P=0&h=180" },
      { title: "Taman Nasional Bromo Tengger Semeru", description: "Terkenal dengan Gunung Bromo dan pemandangan sunrise-nya.", imageUrl: "https://tse1.mm.bing.net/th?id=OIP.TrjvIurDJiJrmTkjMHZqxgHaE8&pid=Api&P=0&h=180" },
    ],
  };

  const handleCategoryPress = (category) => {
    setSelectedCategory(category);
  };

  const displayedWisata = wisataData[selectedCategory] || [];
  console.log("3. displayedWisata:", displayedWisata);

  const handleImagePress = (wisata) => {
    console.log("4. handleImagePress dipanggil dengan data:", wisata);
    console.log("5. Navigasi ke Detail dengan:", { wisataData: wisata });    
    navigation.navigate('Detail', { wisataData: wisata });
  };

  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <Text style={styles.appBarTitle}>Wisata App</Text>
      </View>
      <ScrollView style={styles.content}>
        <Text style={styles.sectionTitle}>Explore Categories</Text>
        <View style={styles.categoryButtons}>
          <Button
            title="Pantai"
            color={selectedCategory === 'Pantai' ? 'blue' : 'grey'}
            onPress={() => handleCategoryPress('Pantai')}
          />
          <Button
            title="Candi"
            color={selectedCategory === 'Candi' ? 'blue' : 'grey'}
            onPress={() => handleCategoryPress('Candi')}
          />
          <Button
            title="Taman Nasional"
            color={selectedCategory === 'Taman Nasional' ? 'blue' : 'grey'}
            onPress={() => handleCategoryPress('Taman Nasional')}
          />
        </View>
        <Text style={styles.sectionTitle}>Macam-macam wisata</Text>
        {displayedWisata.map((item) => (
          <WisataCard key={item.title} {...item} onPress={() => handleImagePress(item)} />
        ))}
      </ScrollView>
    </View>
  );
};

const WisataCard = ({ title, description, imageUrl, onPress }) => ( // Terima props title, description, dan imageUrl
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <Image source={{ uri: imageUrl }} style={styles.cardImage} /> {/* Gunakan imageUrl */}
    <View style={styles.textContainer}>
      <Text style={styles.cardTitle}>{title}</Text> {/* Gunakan title */}
      {description && <Text style={styles.cardDescription}>{description}</Text>} {/* Gunakan description */}
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  appBar: {
    backgroundColor: 'red',
    padding: 16,
  },
  appBarTitle: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
  },
  content: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  categoryButtons: {
      flexDirection: 'row',
      marginBottom: 24,
  },
  card: {
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: 200,
  },
  cardContent: {
    padding: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  bottomNavigationBar: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 10,
      borderTopWidth: 1,
      borderTopColor: '#ddd',
  }
});

export default Wisata;