import React, { useState } from 'react';
import { FlatList, TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';  
import SplashScreen from '/plimadtphacker/screens/SplashScreen';
import HomeScreen  from '/plimadtphacker/screens/HomeScreen';
import ProfileScreen from '/plimadtphacker/screens/ProfilScreen';
import TeamCard from '/plimadtphacker/components/teamcard2';
const CATEGORIES = [  
  { id: '1', name: 'Pantai' },  
  { id: '2', name: 'Candi' },  
  { id: '3', name: 'Taman Nasional' }, 
];  

const DATA = [    
  {  
    id: '1',  
    category_id: '1',  
    title: 'Pantai Kuta, Bali',
    image: 'https://tse2.mm.bing.net/th?id=OIP.286SjggiH_IRc3IH4tenEQHaEy&pid=Api&P=0&h=180'  ,
    overview: 'Pantai Kuta adalah salah satu ikon pariwisata Bali yang paling terkenal di dunia. Terletak di Kabupaten Badung, pantai ini menawarkan keindahan alam yang memukau, mulai dari pasir putih yang lembut, deburan ombak yang menenangkan, hingga pemandangan matahari terbenam yang spektakuler.',  
  },  
  {  
    id: '2',  
    category_id: '2',  
    title: 'Candi Borobudur, Magelang',  
    image: 'https://tse4.mm.bing.net/th?id=OIP.-i5GaebD094q7ObjUSnOvgHaEK&pid=Api&P=0&h=180',
    overview: 'Candi Borobudur adalah candi Buddha terbesar di dunia dan merupakan salah satu situs warisan dunia UNESCO.',  
  },  
  {  
    id: '3',  
    category_id: '1',  
    title: 'Pantai Nusa Dua',  
    image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSWOnSCirm3cvsHWL96_cmTDxRMAz_OWBI9476cMEizZESHNcOezoVrGOZfgqSh',
    overview: 'Pantai Nusa Dua menawarkan suasana yang lebih tenang dan eksklusif dibandingkan Pantai Kuta. Dengan pasir putih yang lembut, air laut yang jernih, dan fasilitas mewah, pantai ini sering disebut sebagai "Bali-nya Bali".',  
  },  
  {  
    id: '4',  
    category_id: '3',  
    title: 'Taman Nasional Komodo, Labuan Bajo',  
    image: 'https://tse1.mm.bing.net/th?id=OIP.XcPjqZYgF6_a-JMqKVvfTAHaE_&pid=Api&P=0&h=180',
    overview: 'Taman Nasional Komodo, Labuan Bajo adalah surga bagi para petualang dan pecinta alam. Terkenal dengan keberadaan komodo, kadal terbesar di dunia, taman nasional ini menawarkan pengalaman wisata yang tak terlupakan. Selain komodo, keindahan alam bawah lautnya yang menakjubkan, serta lanskap pulau-pulau eksotis menjadi daya tarik tersendiri.',  
  },  
  {  
    id: '2',  
    category_id: '1',  
    title: 'Pantai Anse Source dArgent, Seychelles',  
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxIHJANWpn6430eg4eEJKmzyOY56QUJq3v3TfMIY_p4-FW0GXKumYeVPHx4EiE',
    overview: 'Terkenal dengan batuan granit raksasa dan pasir putihnya.',  
  },  
  {  
    id: '3',  
    category_id: '1',  
    title: 'Pantai Whitehaven, Australia',  
    image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRNFVaqVCmuAi4pD6bef4kvrrgs0hUt5jhNCN3e3J0H_44s4osOMVwXS9G5m5tW',
    overview: 'Memiliki pasir silika yang sangat halus dan air laut berwarna biru toska yang jernih.',  
  },  
  {  
    id: '4',  
    category_id: '1',  
    title: 'Pantai Pink, Bahamas',  
    image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT_ZI9LmUz_4WAEGCo5BT8BD8k3kXXtvKjbW-EsieSVT_EYQSZjM2FOg7BMGCzi',
    overview: 'Unik dengan pasir berwarna merah muda akibat adanya organisme laut mikroskopis.',  
  },  
  {  
    id: '5',  
    category_id: '1',  
    title: 'Pantai Reynisfjara, Islandia',  
    image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTbCOo7o-xH7zcYFl-9DNaXwc9SA6Fm79MOyNLaAijeGGDTAFGHxgMeL_lv7NQ7',
    overview: 'Pantai berpasir hitam dengan formasi batuan basal yang dramatis.',  
  },  
  {  
    id: '6',  
    category_id: '1',  
    title: 'Pantai Elafonisi, Kreta, Yunani',  
    image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSq6BdRaOmUcvZg7znPpvjjyxl8OxhAoG9jPkPqE66lIZi4BHi-wMK4S5PUBWGe',
    overview: 'Pantai dengan pasir merah muda yang indah dan air laut dangkal.',  
  },  
  {  
    id: '7',  
    category_id: '1',  
    title: 'Pantai Maya Bay, Thailand',  
    image: 'https://tse1.mm.bing.net/th?id=OIP.XcPjqZYgF6_a-JMqKVvfTAHaE_&pid=Api&P=0&h=180',
    overview: 'Taman Nasional Komodo, Labuan Bajo adalah surga bagi para petualang dan pecinta alam. Terkenal dengan keberadaan komodo, kadal terbesar di dunia, taman nasional ini menawarkan pengalaman wisata yang tak terlupakan. Selain komodo, keindahan alam bawah lautnya yang menakjubkan, serta lanskap pulau-pulau eksotis menjadi daya tarik tersendiri.',  
  },  
  {  
    id: '8',  
    category_id: '1',  
    title: 'Pantai Barafundle Bay, Wales',  
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8mDViSNzv7lX7uWtsFT2AYpdR9w_78XRjd87Lnjbc0l9po8vtDtPcUmBKy97H',
    overview: 'Pantai terpencil dengan pasir emas dan tebing hijau yang menjulang.',  
  },  
  {  
    id: '9',  
    category_id: '1',  
    title: 'Pantai Navagio, Zakynthos, Yunani',  
    image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRZKJRnpdEjYoiZGcQLiK_0dCibKVqaKn9jLSA0MyRR3-8wB-Zy8JhgFJMQCCjG',
    overview: 'Pantai yang hanya bisa diakses dengan perahu, dengan kapal karam yang terdampar di pantainya.',  
  },  
  {  
    id: '10',  
    category_id: '1',  
    title: 'Pantai Grace Bay, Turks and Caicos',  
    image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRbNix5J0zAalf9W0lX6idAigiMHQjttExyadLjY6xStSBEb22783GilxYJeBgi',
    overview: 'Terkenal dengan air laut yang jernih dan pasir putih yang lembut.',  
  },  
  {  
    id: '11',  
    category_id: '1',  
    title: 'Pantai Railay, Thailand',  
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6-vB6AwBZMRtKLJzLrmGtf0eN6rjrH8QfuN_y304_E-mUOzUuO48I34XAiDMd',
    overview: 'Surga bagi para pemanjat tebing dan pecinta alam.',  
  },  
  {  
    id: '12',  
    category_id: '1',  
    title: 'Pantai Tulum, Meksiko',  
    image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRLzS4NiR3dJKW7ySN-596HmRcaR4Gd4sw-paI8MN5NqupZgsT2XuqFzYbF6G3w',
    overview: 'Pantai dengan reruntuhan Mayan kuno yang menghadap ke laut Karibia.',  
  },  
  {  
    id: '13',  
    category_id: '1',  
    title: 'Pantai Bondi, Sydney, Australia',  
    image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR84FRs4FA-Jx8AxbLmFoo_2g-mEg9BtnVXkon4BQ_zWdI1B51v2lemt74aOQoR',
    overview: 'Pantai yang sangat populer untuk berselancar dan menikmati suasana kota.',  
  },  
  {  
    id: '14',  
    category_id: '1',  
    title: 'Pantai Nusa Dua, Bali',  
    image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSWOnSCirm3cvsHWL96_cmTDxRMAz_OWBI9476cMEizZESHNcOezoVrGOZfgqSh',
    overview: 'Pantai mewah dengan resor-resor eksklusif.',  
  },  
  {  
    id: '15',  
    category_id: '1',  
    title: 'Pantai Kelingking, Nusa Penida, Bali',  
    image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT4t_Wp9sVHohwDcoEkyCae6BqYav2m8wqsBu-4j2b5SI6gdgwcfWSIZ_rtVHdB',
    overview: 'Terkenal dengan bentuk batuannya yang unik menyerupai T-Rex.',  
  },  
  {  
    id: '16',  
    category_id: '1',  
    title: 'Pantai Gili Trawangan, Lombok',  
    image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRd8wtgx-IdCn_kZ-TmqI1iW1YegpNPGzL-Tuvijcc6JejLdgxhuicycUaE2quX',
    overview: 'Pulau kecil dengan pantai pasir putih dan kehidupan malam yang meriah.',  
  },  
  {  
    id: '17',  
    category_id: '1',  
    title: 'Pantai Pink, Komodo, Indonesia',  
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-watsTjYzudqtuL7bCom-XFrCuBoRC5qE2Pz43sdWFsAL_g_27GSvgPNw9Y90',
    overview: 'Selain terkenal dengan komodonya, Taman Nasional Komodo juga memiliki pantai dengan pasir berwarna pink yang unik. Warna pink ini berasal dari pecahan karang merah muda yang tercampur dengan pasir putih.',  
  },  
  {  
    id: '18',  
    category_id: '1',  
    title: 'Pantai Navagio, Zakynthos, Yunani',  
    image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRZKJRnpdEjYoiZGcQLiK_0dCibKVqaKn9jLSA0MyRR3-8wB-Zy8JhgFJMQCCjG',
    overview: 'Terkenal dengan kapal karam yang terdampar di pantainya, Pantai Navagio menawarkan pemandangan dramatis dengan tebing-tebing tinggi yang mengelilinginya.',  
  },  
  {  
    id: '19',  
    category_id: '1',  
    title: 'Pantai Elafonisi, Kreta, Yunani',  
    image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQv6K51Qt56nGWKhUroeyUz_k1R-TJI3loirPttfp-hVcEMi6MHZIYbHrIu318G',
    overview: 'Pantai Elafonisi memiliki pasir berwarna pink yang sangat lembut dan air laut yang jernih. Suasananya sangat tenang dan cocok untuk bersantai.',  
  },  
];  

export default function () {
  const [activeCategory, setActiveCategory] = useState('1'); // Default kategori

  // Filter data berdasarkan kategori aktif
  
  const filteredData = DATA.filter((item) => item.category_id === activeCategory);

  return (
    <SafeAreaView style={styles.container}>
      {/* Navbar */}
      <Navbar title="Wisata App" />

      {/* Categories List */}
      <Section title="Explore Categories">
        <FlatList
          data={CATEGORIES}
          horizontal
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.categoryButton,
                activeCategory === item.id && styles.activeCategoryButton, // Tambahkan gaya aktif
              ]}
              onPress={() => setActiveCategory(item.id)} // Ubah kategori aktif
            >
              <Text
                style={[
                  styles.categoryText,
                  activeCategory === item.id && styles.activeCategoryText, // Tambahkan gaya teks aktif
                ]}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
        />
      </Section>

      {/* Recipes List */}
      <Section title="Delicious Recipes">
        {filteredData.length > 0 ? (
          <FlatList
          data={filteredData}
          numColumns={2}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate('DetailScreen', { itemId: item.id })}>
              <View style={styles.recipeCard}>
                <Text style={styles.recipeTitle}>{item.title}</Text>
                <Image source={{ uri: item.image }} style={styles.recipeImage} />
                <Text style={styles.recipeOverview}>{item.overview}</Text>
              </View>
            </TouchableOpacity>
          )}
          // ...
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.recipeList}
          showsVerticalScrollIndicator={false}
          style={{ flex: 1, minHeight: 500 }}
        />        
        ) : (
          <Text style={styles.noRecipesText}>No recipes available for this category!</Text>
        )}
      </Section>
    </SafeAreaView>
  );
}

const Navbar = ({ title }) => (
  <View style={styles.navbar}>
    <Text style={styles.navbarTitle}>{title}</Text>
  </View>
);

const Section = ({ title, children }) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    {children}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  navbar: {
    backgroundColor: '#4A90E2',
    padding: 16,
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 16,
  },
  recipeImage: {
    width: '100%', // Make the image take full width
    height: 100, // Set a fixed height for the image
    borderRadius: 10, // Optional: Add rounded corners
    marginBottom: 8, // Optional: Add some space between image and text
  },
  navbarTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  section: {
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  categoryButton: {
    margin: 8,
    padding: 12,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    elevation: 4,
  },
  activeCategoryButton: {
    backgroundColor: '#4A90E2',
  },
  categoryText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
  activeCategoryText: {
    color: '#fff',
  },
  recipeCard: {
    flex: 1,
    margin: 8,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },
  recipeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  recipeOverview: {
    fontSize: 14,
    color: '#666',
  },
  recipeList: {
    paddingBottom: 16,
  },
  noRecipesText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#888',
    },
});