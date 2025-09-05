import { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import CategoriesScreen from "./screens/CategoriesScreen";
import { StatusBar } from "expo-status-bar";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import FavoriateScreen from "./screens/FavoriateScreen";
// import FavoriateContextProvider from "./store/context/favorites-context";
import { Provider } from "react-redux";
import store from "./store/redux/store";
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded, error] = useFonts({
    "exo-font-1": require("./assets/fonts/Exo2-Italic-VariableFont_wght.ttf"),
    "exo-font-2": require("./assets/fonts/Exo2-VariableFont_wght.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();

  function DrawerNavigator() {
    return (
      <Drawer.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#351401" },
          headerTintColor: "white",
          sceneStyle: { backgroundColor: "#3f2f25" },
          drawerContentStyle: { backgroundColor: "#3f2f25" },
          drawerInactiveTintColor: "white",
          drawerActiveTintColor: "#fff",
          drawerItemStyle: {
            borderRadius: 3,
            marginBottom: 8,
          },
        }}
      >
        <Drawer.Screen
          name="Categories"
          component={CategoriesScreen}
          options={{
            title: "All Categories",
            drawerIcon: ({ color, size }) => {
              return <Ionicons color={color} size={size} name="list" />;
            },
          }}
        />
        <Drawer.Screen
          name="Favorite"
          component={FavoriateScreen}
          options={{
            drawerIcon: ({ color, size }) => {
              return <Ionicons color={color} size={size} name="star" />;
            },
          }}
        />
      </Drawer.Navigator>
    );
  }

  return (
    <>
      <StatusBar style="light" />
      <Provider store={store}>
        {/* <FavoriateContextProvider> */}
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Drawer"
            screenOptions={{
              headerStyle: { backgroundColor: "#351401" },
              headerTintColor: "white",
              contentStyle: { backgroundColor: "#3f2f25" },
            }}
          >
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverviewScreen}
            />
            <Stack.Screen
              name="MealDetails"
              component={MealDetailsScreen}
              options={{ title: "About Meal" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
        {/* </FavoriateContextProvider> */}
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
1;
