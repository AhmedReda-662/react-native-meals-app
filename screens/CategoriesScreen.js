import { FlatList, View, StyleSheet } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";
import SearchBar from "../components/SearchBar";
import { MEALS } from "../data/dummy-data";

export default function CategoriesScreen({ navigation }) {
  function handleSearch(searchText) {
    if (searchText.trim().length === 0) return;
    
    const filteredMeals = MEALS.filter(meal => 
      meal.title.toLowerCase().includes(searchText.toLowerCase()) ||
      meal.ingredients.some(ingredient => 
        ingredient.toLowerCase().includes(searchText.toLowerCase())
      )
    );

    navigation.navigate("MealsOverview", {
      meals: filteredMeals,
      title: `Search: ${searchText}`
    });
  }

  function renderCategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate("MealsOverview", {
        categoryId: itemData.item.id,
      });
    }
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }
  return (
    <View style={styles.container}>
      <SearchBar onSearch={handleSearch} />
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
}
