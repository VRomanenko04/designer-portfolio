import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    projectsType: 'all',
    projectsLook: 'small'
}

export const ProjectsTypeSlice = createSlice({
    name: 'types',
    initialState,
    reducers: {
        changeType: ( state, action ) => {
            state.projectsType = action.payload;
        },
        changeLook: ( state, action ) => {
            state.projectsLook = action.payload;
        }
    }
});

export const { actions, reducer } = ProjectsTypeSlice;