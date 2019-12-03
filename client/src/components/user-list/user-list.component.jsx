import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectUserList } from '../../redux/user/user.selectors'
import { UserListContainer, UsernameContainer } from './user-list.styles'
import { AiOutlineSmile } from 'react-icons/ai'

const UserList = ({ userList }) => {

    return (
        <UserListContainer>
            {
                userList.map((userName, i) =>
                    <UsernameContainer key={i}>
                        <span>
                            <AiOutlineSmile />
                            {userName}
                        </span>

                    </UsernameContainer>
                )
            }
        </UserListContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    userList: selectUserList
})

export default connect(mapStateToProps)(UserList)