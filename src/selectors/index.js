export const getUsers = (state, filter) => {

    const users = state.users.data;

    if(filter === "all"){
        return users;
    }
    else{
        return users.filter(e=> e.name.toLowerCase().includes(filter.toLowerCase()))
    }
}

export const isLoading = (state) => state.users.isLoading;