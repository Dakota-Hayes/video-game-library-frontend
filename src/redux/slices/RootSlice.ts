import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
    name: "root",
    initialState: {
        owner: "Owner",
        title: "Title",
        version: "Version",
        console: "Console",
        publisher: "Publisher",
        region: "Region",
        completed: false,
        status: "Status",
        value: "0.00",
    },
    reducers: {
        chooseOwner: (state, action) => { state.owner = action.payload },
        chooseTitle: (state, action) => { state.title = action.payload },
        chooseVersion: (state, action) => { state.version = action.payload },
        chooseConsole: (state, action) => { state.console = action.payload },
        choosePublisher: (state, action) => { state.publisher = action.payload },
        chooseRegion: (state, action) => { state.region = action.payload },
        chooseCompleted: (state, action) => { state.completed = action.payload },
        chooseStatus: (state, action) => { state.status = action.payload },
        chooseValue: (state, action) => { state.value = action.payload },
    }
});

export const reducer = rootSlice.reducer;
export const {
    chooseOwner,
    chooseTitle,
    chooseVersion,
    chooseConsole,
    choosePublisher,
    chooseRegion,
    chooseCompleted,
    chooseStatus,
    chooseValue
} = rootSlice.actions;
