import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { createNotificationSlice } from "./notificationSlice";
import { createRecipeSlice } from "./recipeSlice";
import { createFavoritesSlice } from "./favoritesSlice";


export const useAppStore = create(devtools((...args) => ({
    ...createRecipeSlice(...args),
    ...createFavoritesSlice(...args),
    ...createNotificationSlice(...args)
})))