import { createSlice } from "@reduxjs/toolkit";
import {  POMODORO,SHORT_BREAK,LONG_BREAK, ROUND,  AUTOSTARTBREAKS, AUTOSTARTPOMODOR, INTERVALOFTIMERS,INTERVALISSTARTED } from "./constants";
const initialState = {
    [AUTOSTARTBREAKS]: false,
    [AUTOSTARTPOMODOR] : false,
    [INTERVALOFTIMERS] : 1,
    [INTERVALISSTARTED] : false,
    [ROUND] : 0,
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
        setInterval(state,{payload}){
            state[INTERVALOFTIMERS] = payload
        },
        minuseIntervalTime(state){
            state[INTERVALOFTIMERS] = state[INTERVALOFTIMERS] - 1
        },
        intervalStarted(state){
            state[INTERVALISSTARTED] = true
        },
        intervalStoped(state) {
            state[INTERVALISSTARTED] = false
        },
        setRound(state){
            state[ROUND] = state[ROUND] + 1
        },
        clearRoundInterval(state){
            state[ROUND] = 0
        }
        
    }
})

export const setActions = settings.actions
export default settings