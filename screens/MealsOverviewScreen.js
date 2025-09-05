import { MEALS, CATEGORIES } from "../data/dummy-data";
import { useLayoutEffect } from "react";
import MealsList from "../components/MealsList/MealsList";

export default function MealsOverviewScreen({ route, navigation }) {
  const { categoryId: catId } = route.params;

  const displayMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const { title, color } = CATEGORIES.find(
      (category) => category.id === catId
    );

    navigation.setOptions({
      title,
      headerStyle: { backgroundColor: color },
      contentStyle: { backgroundColor: color + 50 },
    });
  }, []);

  return <MealsList items={displayMeals} />;
}
