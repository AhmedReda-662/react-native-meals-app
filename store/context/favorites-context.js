import { createContext, useContext, useState } from "react";

export const FavoriteContext = createContext({
  ids: [],
  addFavoriate: (id) => {},
  removeFavoriate: (id) => {},
});

function FavoriateContextProvider({ children }) {
  const [favoriateMealIds, setFavoriateMealIds] = useState([]);

  function addFavoriate(id) {
    setFavoriateMealIds((prev) => [...prev, id]);
  }

  function removeFavoriate(id) {
    setFavoriateMealIds((prev) => prev.filter((mealId) => mealId !== id));
  }

  return (
    <FavoriteContext.Provider
      value={{
        ids: favoriateMealIds,
        addFavoriate: addFavoriate,
        removeFavoriate: removeFavoriate,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
}

function useFavoriate() {
  const context = useContext(FavoriteContext);
  if (context === undefined)
    throw new Error(
      "useFavoriate must be used within a FavoriateContextProvider"
    );
  return context;
}
export { useFavoriate };
export default FavoriateContextProvider;
