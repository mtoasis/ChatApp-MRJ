import React, { useState } from 'react'
import { InputTextFieldContainer } from './chat-inputbox.styles'
import FormInput from '../form-input/form-input.component'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectUserId, selectCurrentuser } from '../../redux/user/user.selectors'
import { sendNewMessageStart } from '../../redux/chat/chat.actions'

const ChatInputBox = ({ currentUser, userId, sendNewMessageStart }) => {

    const [newMsg, setNewMsg] = useState("")

    const handleChange = event => {
        const { value } = event.target;
        setNewMsg(value)
    }

    const handleSubmit = event => {
        event.preventDefault();
        sendNewMessageStart({ currentUser, userId, newMsg })
        setNewMsg("")
    }

    return (
        <InputTextFieldContainer>
            <form onSubmit={handleSubmit}>
                <FormInput
                    type="text"
                    value={newMsg}
                    onChange={handleChange}
                    label="Type your message"
                    required
                />
            </form>
        </InputTextFieldContainer>)
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentuser,
    userId: selectUserId
})

const mapDispatchToProps = dispatch => ({
    sendNewMessageStart: (msgInfo) => dispatch(sendNewMessageStart(msgInfo))
})

export default connect(mapStateToProps, mapDispatchToProps)(ChatInputBox)