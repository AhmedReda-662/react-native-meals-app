import { MEALS, CATEGORIES } from "../data/dummy-data";
import { useLayoutEffect } from "react";
import MealsList from "../components/MealsList/MealsList";

export default function MealsOverviewScreen({ route, navigation }) {
  const { categoryId, meals, title: searchTitle } = route.params;

  const displayMeals = meals || MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0;
  });

  useLayoutEffect(() => {
    if (searchTitle) {
      navigation.setOptions({
        title: searchTitle,
      });
    } else {
      const category = CATEGORIES.find((category) => category.id === categoryId);
      navigation.setOptions({
        title: category.title,
        headerStyle: { backgroundColor: category.color },
        contentStyle: { backgroundColor: category.color + 50 },
      });
    }
  }, []);

  return <MealsList items={displayMeals} />;
}
