import { createSlice } from "@reduxjs/toolkit";
import {  POMODORO,SHORT_BREAK,LONG_BREAK, ROUND,  AUTOSTARTBREAKS, AUTOSTARTPOMODOR, INTERVALOFTIMERS,INTERVALISSTARTED } from "./constants";
const initialState = {
    [AUTOSTARTBREAKS]: false,
    [AUTOSTARTPOMODOR] : false,
    [INTERVALOFTIMERS] : 5,
    [INTERVALISSTARTED] : false,
    [ROUND] : 0,
    [POMODORO]: 25,
    [SHORT_BREAK]: 5,
    [LONG_BREAK]: 10,
}



const settings = createSlice({
    name: "Pomodoro",
    initialState: initialState,
    reducers: {
        updateClock(state,action){
            const { longBreakTime,shortBreakTime,pomodoroTime,setInterval} = action.payload
            state[POMODORO] = pomodoroTime  
            state[SHORT_BREAK] = shortBreakTime
            state[LONG_BREAK] = longBreakTime
            state[INTERVALOFTIMERS] = setInterval
        },
        autoStartPomodoro(state) {
            state[AUTOSTARTPOMODOR] = !state[AUTOSTARTPOMODOR]
        },
        autoStartBreaks(state) {
            state[AUTOSTARTBREAKS] = !state[AUTOSTARTBREAKS]
        },
        clearRoundInterval(state){
            state[ROUND] = 0
        },  

        setPreferences(state){
            state[INTERVALOFTIMERS] = state[INTERVALOFTIMERS] - 1
            state[ROUND] = state[ROUND] + 1
            state[INTERVALISSTARTED] = true
        },
        noShortRest(state){
            state[ROUND] = state[ROUND] + 1
            state[INTERVALISSTARTED] = true
        },
        setNewInterval(state,{payload}){
            state[INTERVALOFTIMERS] = payload
            state[ROUND] = 0
        }
    }
})

export const setActions = settings.actions
export default settings