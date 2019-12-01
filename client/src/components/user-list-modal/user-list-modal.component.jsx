import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectUserList} from '../../redux/user/user.selectors'

const UserListModal = ({userList, setModalDisplay}) =>{    

    return(
        <div>
        <ul>
            {
                userList.map((userName,i) =>
                    <li key={i}>{userName}</li>
                    )
            }
        </ul>
        <button onClick={()=>setModalDisplay(false)}>close</button>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    userList: selectUserList
})

export default connect(mapStateToProps)(UserListModal)