import { createSlice } from "@reduxjs/toolkit";
import {  POMODORO,SHORT_BREAK,LONG_BREAK,  AUTOSTARTBREAKS, AUTOSTARTPOMODOR, INTERVALOFTIMERS } from "./constants";
const initialState = {
    [AUTOSTARTBREAKS]: true,
    [AUTOSTARTPOMODOR] : true   ,
    [INTERVALOFTIMERS] : 1,
    [POMODORO]: {
        minutes: 1,
    },
    [SHORT_BREAK]: {
        minutes: 1,
    },
    [LONG_BREAK]: {
        minutes: 1,
    }
}



const settings = createSlice({
    name: "Pomodoro",
    initialState: initialState,
    reducers: {
        pomodor(state,action) {
            state[POMODORO].minutes = action.payload
        },
        shortBreak(state,action) {
            state[SHORT_BREAK].minutes = action.payload 
        },
        longBreak(state,action) {
            state[LONG_BREAK].minutes = action.payload
        },
        autoStartPomodoro(state,action) {
            state[AUTOSTARTPOMODOR] = action.payload
        },
        autoStartBreaks(state,action) {
            state[AUTOSTARTBREAKS] = action.payload
        },
        setInterval(state,action){
            state[INTERVALOFTIMERS] = action.payload
        },
        minuseIntervalTime(state){
            state[INTERVALOFTIMERS] = state[INTERVALOFTIMERS] - 1
        }
    }
})

export const setActions = settings.actions
export default settings