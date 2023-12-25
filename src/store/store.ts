import { configureStore } from "@reduxjs/toolkit"
import { reducer as ProjectsReducer } from "./ProjectsTypeFilter/ProjectsTypeFilter.slice"

export const store = configureStore({
    reducer: ProjectsReducer
})