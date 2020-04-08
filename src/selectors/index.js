import { createSelector } from 'reselect'

export const getUsers = (state, filter) => {

    const users = state.users.data;

    if(filter === "all"){
        return users;
    }
    else{
        return users.filter(e=> e.name.toLowerCase().includes(filter.toLowerCase()))
    }
}

export const makeGetUsersState = () => createSelector(
    [ getUsers ],
    (users) => users
)

export const isLoading = (state) => state.users.isLoading;

export const filterInput = (state) => state.users.filter;