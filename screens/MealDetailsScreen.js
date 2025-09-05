import { useLayoutEffect } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";
import RatingStars from "../components/RatingStars";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/favoriteSlice";
import { rateMeal } from "../store/redux/ratingsSlice";
// import { useFavoriate } from "../store/context/favorites-context";
function MealDetailsScreen({ route, navigation }) {
  // const favoriateMealCtx = useFavoriate();
  const mealId = route.params.id;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  // const mealIsFavorite = favoriateMealCtx.ids.includes(mealId);

  const faviorateMealIds = useSelector((state) => state.faviorate.ids);

  const mealIsFavorite = faviorateMealIds.includes(mealId);
  const mealRating = useSelector((state) => state.ratings.mealRatings[mealId]?.rating || 0);

  const dispatch = useDispatch();

  function handleRating(rating) {
    dispatch(rateMeal({ mealId, rating }));
  }

  function changeFavoriteStatusHandler() {
    if (mealIsFavorite) {
      dispatch(removeFavorite(mealId));
    } else {
      dispatch(addFavorite(mealId));
    }
  }

  useLayoutEffect(() => {
    return navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFavorite ? "star" : "star-outline"}
            color={"white"}
            onPress={changeFavoriteStatusHandler}
          />
        );
      },
    });
  }, [navigation, changeFavoriteStatusHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image
        source={{ uri: selectedMeal.imageUrl }}
        alt={selectedMeal.title}
        style={styles.image}
      />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <View style={styles.ratingContainer}>
        <RatingStars rating={mealRating} onRate={handleRating} />
      </View>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  ratingContainer: {
    alignItems: 'center',
    marginVertical: 8,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
