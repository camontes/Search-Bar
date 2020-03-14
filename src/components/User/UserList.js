import React from 'react'

class UserList extends React.Component {

    renderData = () =>{
        const {users, isLoading} = this.props;

        if(users.length == 0 && isLoading){
            return(
                <div>
                    LOADING.........
                </div>
            )
        }

        if(users.length == 0 && !isLoading){
            return(
                <div>
                    There are no results
                </div>
            )
        }

        return(
            <>
                {users.map(user =>
                    <h2 key = {user.id}>{user.name}</h2>
                )}
            </>
        )
    }

    handleChange = (event) =>{
        const {onChangeFilter} = this.props;
        onChangeFilter(event.target.value);
    }

    render(){
        return(
           <center>
                <div>
                    <input type = "text" placeholder ="Search User" onChange = {(e)=>this.handleChange(e)}/>
                    {this.renderData()}
                </div>
           </center>
        )
    }
}

export default UserList;