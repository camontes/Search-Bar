import { createSelector } from 'reselect'

export const getUsers = (state) => state.users.data;

export const makeGetUsersState = () => createSelector(
    [ getUsers, filterInput ],
    (users, filter) => {
        if(filter === "all"){
            return users;
        }
        else{
            return users.filter(e=> e.name.toLowerCase().includes(filter.toLowerCase()))
        }
    }
)

export const isLoading = (state) => state.users.isLoading;

export const filterInput = (state) => state.users.filter;