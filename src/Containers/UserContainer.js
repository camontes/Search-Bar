import React from 'react'
import {connect} from 'react-redux'
import {fetchUsers, changeFilterUser} from '../actions/index'
import {getUsers, isLoading} from '../selectors/index'
import UserList from '../components/User/UserList'

class UserContainer extends React.Component {

    componentDidMount(){
        this.props.fetchUsers();
    }
    onChangeFilter = (filter) => {
        this.props.changeFilterUser(filter);
    }
    render(){
        return(
            <UserList
                users = {this.props.users}
                isLoading = {this.props.isLoading}
                onChangeFilter = {this.onChangeFilter}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return { 
        users: getUsers(state, state.users.filter),
        isLoading: isLoading(state),
    }

}

export default connect(mapStateToProps, {fetchUsers, changeFilterUser})(UserContainer);