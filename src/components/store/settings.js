import { createSlice } from "@reduxjs/toolkit";
import {  POMODORO,SHORT_BREAK,LONG_BREAK, ROUND,  AUTOSTARTBREAKS, AUTOSTARTPOMODOR, INTERVALOFTIMERS,INTERVALISSTARTED } from "./constants";
const initialState = {
    [AUTOSTARTBREAKS]: true,
    [AUTOSTARTPOMODOR] : true,
    [INTERVALOFTIMERS] : 5,
    [INTERVALISSTARTED] : false,
    [ROUND] : 0,
    [POMODORO]: 1,
    [SHORT_BREAK]: 1,
    [LONG_BREAK]: 1,
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
        // setInterval(state,{payload}){
        //     state[INTERVALOFTIMERS] = payload
        // },
        // minuseIntervalTime(state){
        //     state[INTERVALOFTIMERS] = state[INTERVALOFTIMERS] - 1
        // },
        // intervalStarted(state){
        //     state[INTERVALISSTARTED] = true
        // },
        // intervalStoped(state) {
        //     state[INTERVALISSTARTED] = false
        // },
        // setRound(state){
        //     state[ROUND] = state[ROUND] + 1
        // },

    }
})

export const setActions = settings.actions
export default settings