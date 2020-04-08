import React from 'react'
import {connect} from 'react-redux'
import {fetchUsers, changeFilterUser} from '../actions/index'
import {makeGetUsersState, isLoading, filterInput} from '../selectors/index'
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

const makeMapStateToProps = () => {
    const getUsersState = makeGetUsersState()
    const mapStateToProps = (state) => {
      return {
         users: getUsersState(state, filterInput(state)),
         isLoading: isLoading(state)
        }
    }
    return mapStateToProps
}

export default connect(makeMapStateToProps, {fetchUsers, changeFilterUser})(UserContainer);