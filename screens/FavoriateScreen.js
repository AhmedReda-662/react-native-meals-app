// import { useFavoriate } from "../store/context/favorites-context";
import { useSelector } from "react-redux";
import MealsList from "../components/MealsList/MealsList";
import { MEALS } from "../data/dummy-data";
import { StyleSheet, View, Text } from "react-native";

export default function FavoriateScreen() {
  // const favoriateMealCtx = useFavoriate();
  const favoriateMealsIds = useSelector((state) => state.faviorate.ids);
  const favoriateMeals = MEALS.filter((meal) =>
    favoriateMealsIds.includes(meal.id)
  );
  if (favoriateMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>
          You have no favorite meals yet. Start adding some!
        </Text>
        ;
      </View>
    );
  }
  return <MealsList items={favoriateMeals} />;
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  text: {
    fontSize: 13,
    fontWeight: "bold",
    color: "white",
  },
});
