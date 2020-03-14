import jsonPlaceHolder from '../apis/jsonPlaceHolder'
import _ from 'lodash'


export const fetchUsers = () =>  async dispatch => {

    const response = await jsonPlaceHolder.get(`/users`);
    
    dispatch({ type: 'FETCH_USERS', payload: response.data });
};

export const changeFilterUser = (filter) =>  async dispatch => {    
    dispatch({ type: 'CHANGE_FILTER', payload: filter });
};