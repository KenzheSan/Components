import { createSlice } from "@reduxjs/toolkit";

const init = {
    modal: false
}

const Switch = createSlice({
    name: 'switch',
    initialState: init,
    reducers: {
        toggle(state) {
            state.modal = !state.modal
        }
    }
})
export default Switch
