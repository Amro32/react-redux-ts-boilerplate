import { AnyAction, Dispatch } from 'redux';
import { ACTION1 } from '../types/exampleTypes';

export const Action1 = () => async (dispatch: Dispatch<AnyAction>) => {
    dispatch({ type: ACTION1 });
};