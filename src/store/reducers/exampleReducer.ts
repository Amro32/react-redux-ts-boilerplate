import { Reducer } from 'redux';
import { ACTION1 } from '../types/exampleTypes';

interface State {
    // Define the state shape here
}

const initialState: State = {
    // Set initial state values here
};

const exampleReducer: Reducer<State> = (state = initialState, action) => {
    switch (action.type) {
        case ACTION1:
            // Perform state updates based on the action
            // Return a new state object with updated values
            return {
                ...state,
                // Update specific properties in the state
            };
        default:
            // For unrecognized actions, return the current state
            return state;
    }
};

export default exampleReducer;