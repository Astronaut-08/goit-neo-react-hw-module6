// файл слайсу для контактів
import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./store";

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: initialState.contacts,
    reducers: {
        addContact(state, {payload}) {
            state.push(payload)
        },
        deleteContact(state, {payload}) {
            const index = state.filter(el => el !== payload)
        }
    }
})
