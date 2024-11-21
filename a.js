import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const CATEGORIES = [
  { id: '1', name: 'Desserts' },
  { id: '2', name: 'Drinks' },
  { id: '3', name: 'Vegetarian' },
  { id: '4', name: 'Snacks' },
  { id: '5', name: 'Gluten-Free' },
];

const DATA = [
  {
    id: '1',
    category_id: '1',
    title: 'Bruschetta',
    overview: 'A traditional Italian appetizer made with toasted bread topped with tomatoes, basil, garlic, and olive oil.',
  },
  {
    id: '2',
    category_id: '2',
    title: 'Margarita',
    overview: 'A delicious drink made with lime, tequila, and orange liqueur.',
  },
  {
    id: '3',
    category_id: '1',
    title: 'Cheesecake',
    overview: 'A creamy dessert with a graham cracker crust.',
  },
  {
    id: '4',
    category_id: '3',
    title: 'Grilled Vegetables',
    overview: 'A healthy mix of grilled seasonal vegetables.',
  },
];

export default function HomeScreen() {
  const [activeCategory, setActiveCategory] = useState('1'); // Default kategori

  // Filter data berdasarkan kategori aktif
  const filteredData = DATA.filter((item) => item.category_id === activeCategory);

  return (
    <SafeAreaView style={styles.container}>
      {/* Navbar */}
      <Navbar title="Recipe App" />

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
              <View style={styles.recipeCard}>
                <Text style={styles.recipeTitle}>{item.title}</Text>
                <Text style={styles.recipeOverview}>{item.overview}</Text>
              </View>
            )}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.recipeList}
            showsVerticalScrollIndicator={false}
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