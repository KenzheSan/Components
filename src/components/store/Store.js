import { configureStore } from "@reduxjs/toolkit";
import Switch from "./Switch";
import settings from "./settings";

const store = configureStore({
    reducer: {
        toggle: Switch.reducer,
        timeSettings: settings.reducer
    }
})

export const toggleActions = Switch.actions
export default store