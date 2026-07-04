// файл створення стору
import { configureStore } from "@reduxjs/toolkit";


export const store = configureStore({})

export const initialState = {
    contacts: {
        items: []
    },
    filters: {
        name: ''
    }
}